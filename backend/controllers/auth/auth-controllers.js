const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')
const User = require("../../models/user")

//regisert
const registerUser = async (req, res) => {
    const { username, email, password } = req.body
    // console.log(req.body);    
    try {
        const checkUser = await User.findOne({ email })
        if (checkUser) {
            return res.status(499).json({
                success: false,
                message: "user with email already exist"
            })
        }
        const hashPassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({ username, email, password: hashPassword })
        res.status(201).json({
            success: true,
            message: "new user created successfully / register successfull"
        })
    } catch (error) {
        console.log(error.message, "Error while regestring user");
        res.status(500).json({
            success: false,
            message: "Error while creating/regestring a user"
        })
    }
}

//login
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const checkUser = await User.findOne({ email })
        //    console.log("its checkuser..........",checkUser);
        if (!checkUser) {
            return res.status(498).json({
                success: false,
                message: "User dosen't exist..... try again"
            })
        }
        const checkPassword = await bcrypt.compare(password, checkUser.password)
        if (!checkPassword) {
            // console.log("password is wrong");
            return res.status(497).json({
                success: false,
                message: "password is wrong"
            })
        }

        const token = await jwt.sign(
            {
                id: checkUser._id,
                email: checkUser.email,
                role: checkUser.role
            },
            process.env.CLIENT_SECRET_KEY,
            { expiresIn: "60m" }
        )
        res.cookie("token", token, { httpOnly: true, secure: false }).json({
            success: true,
            message: "cookie store successfully",
            user: {
                id: checkUser._id,
                email: checkUser.email,
                role: checkUser.role
            }
        })
    } catch (error) {
        console.log(error.message, "error while login user");
        res.status(500).json({
            success: false,
            message: "login fail"
        })
    }
}

//logout
const logOutUser = (req,res)=>{
    res.clearCookie("token").json({
        status :202,
        success : true,
        message : "Logout successful"
    })
}

//middelware
const authMiddleware = async(req,res,next)=>{
    const token = req.cookies.token
    if(!token) return res.status(401).json({
        success : false,
        message : "unauthorized user!"
    })

    try {
        const decoded = await jwt.verify(token, process.env.CLIENT_SECRET_KEY)
        req.user = decoded
        next()
    } catch (error) {
      res.status(401).json({
        success : false,
        message : "Unauthorized user !"
      })  
    }
}

module.exports = { registerUser, loginUser,logOutUser ,authMiddleware }