const cloudinery = require("cloudinary").v2
const multer = require('multer')

cloudinery.config({ 
    cloud_name : process.env.Cloud_name,
    api_key : process.env.Cloud_api_key,
    api_secret : process.env.Cloud_api_secret
})  

const storage =new multer.memoryStorage()

async function adminImageUpload(file) {
   try {
     const result = await cloudinery.uploader.upload( file ,{ resource_type : "auto"})
     // console.log(result);
   } catch (error) {
    console.log(error.message);    
   }    
    return result
}

const upload = multer({storage})
module.exports ={upload , adminImageUpload}