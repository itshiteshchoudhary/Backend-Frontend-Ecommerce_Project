const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required :[true , "username is require"],
        unique : true
    },
    email:{
        type:String,
        required : [true , "email is require"],
        unique : true
    },
    password:{
        type :String,
        required: [true ,"Password is require"]
    },
    role:{
        type :String,
        default : "user"
    }
})

const User = mongoose.model("User",userSchema)

module.exports = User