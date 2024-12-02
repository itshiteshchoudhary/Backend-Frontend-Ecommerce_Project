const { adminImageUpload } = require("../../cloud/cloudinery")

const handelImageUpload= async(req,res)=>{
    try {        
        const b64= Buffer.from(req.file.buffer).toString("base64")
        const url = `data:${req.file.mimetype};base64,${b64}`;
        const result = await adminImageUpload(url)

        res.json({
            success : true,
            message : "image successfully uploaded on cloud"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success :false,
            message : "uploading image fail"
        })        
    }
}

module.exports = {handelImageUpload}