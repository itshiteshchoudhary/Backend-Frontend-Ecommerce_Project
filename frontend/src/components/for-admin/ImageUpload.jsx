import React, { useEffect, useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input';
import { IoCloudUpload } from "react-icons/io5";
import { FaRegFileImage } from "react-icons/fa";
import { Button } from '../ui/button';
import { GrClose } from "react-icons/gr";
import axios from 'axios';

const ImageUpload = ({ imageFile, setImageFile, uploadImage, setUploadImage }) => {
    const inputRef = useRef(null)

    function handelImageChange(event) {
        // console.log(event.target.files);
        const selectedFile = event.target.files?.[0]
        if (selectedFile){ setImageFile(selectedFile)}
        // console.log(setImageFile);  
    }

    function handelDragOver(e) {
        e.preventDefault()
    }

    function handelDrop(e) {
        e.preventDefault()
        const droppedFile = e.dataTransfer.files?.[0]
        if (droppedFile) setImageFile(droppedFile)
    }

    function handelRemoveImage() {
        setImageFile(null)
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }
    // console.log(imageFile);

    async function uploadImageToCloudinery(){
        const data = new FormData()
        data.append("my_file" ,imageFile)
        const response = await axios.post('http://localhost:8080/api/admin/products/upload-image', data)
        console.log("api response data....." , response);

        if(response) setUploadImage(response.data)        
    }

    useEffect(()=>{
        if(imageFile !== null) uploadImageToCloudinery()
    },[imageFile])


    return (
        <div className='w-full max-w-md mx-auto border-b-2 border-t-4 mt-12 rounded-md border-muted-foreground border-blue-500'>
            <Label className="text-lg font-semibold mb-2 block">Upload Image</Label>
            <div onDragOver={handelDragOver} onDrop={handelDrop}>
                <Input id='imageUpload' type="file" ref={inputRef} onChange={handelImageChange} className="hidden" />
                {
                    !imageFile ? (
                        <Label htmlFor="imageUpload" className="flex flex-col justify-start items-center h-32">
                            <IoCloudUpload className='w-10 h-10 text-muted-foreground mb-2' />
                            <span>Drag & Drop or click to upload image</span>
                        </Label>) : (
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <FaRegFileImage className='w-8 text-primary mr-2 h-8' />
                            </div>
                            <p className='text-sm font-medium'>{imageFile.name}</p>
                            <Button varient="ghost" size="icon" className="text-muted-foreground text-lg hover:text-foreground hover:bg-slate-600 bg-white" onClick={handelRemoveImage}>
                                <GrClose className='w-4 font-extrabold h-4' />
                                <span className='sr-only'>Remove File</span>
                            </Button>
                        </div>)
                }
            </div>
        </div>
    )
}

export default ImageUpload