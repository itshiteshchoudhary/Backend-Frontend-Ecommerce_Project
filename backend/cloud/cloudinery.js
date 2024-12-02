const cloudinery = require("cloudinary").v2
const multer = require('multer')

cloudinery.config({ 
    cloud_name : "dbvqqcqt7",
    api_key : "591851596537121",
    api_secret : "qlJxfm2MWsvWlUxIkGBxDQvafKI"
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