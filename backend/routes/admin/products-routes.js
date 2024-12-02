const { upload } = require("../../cloud/cloudinery")
const {handelImageUpload} = require('../../controllers/admin/products-controllers')

const express = require('express')
const router = express.Router()

router.post("/upload-image", upload.single('my_file'),handelImageUpload)

module.exports = router 