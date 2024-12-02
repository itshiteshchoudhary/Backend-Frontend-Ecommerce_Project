import Form from '@/components/common/Form'
import { AddProductFormData } from '@/components/config'
import ImageUpload from '@/components/for-admin/ImageUpload'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import React, { Fragment, useState } from 'react'

const initialFormData={
  image : null,
  title : "",
  description : "",
  category : "",
  brand : "",
  price : "",
  salePrice:"",
  totalStock : ""
}

const Products = () => {
  const [openCreateProduct , setOpenCreateProduct] =useState(false)
  const [formData ,setFormData]= useState(initialFormData)
  const [imageFile , setImageFile] = useState(null)
  const [uploadImage , setUploadImage] = useState("")

  function onSubmit(e){
    e.preventDefault()
  }
  return (
    <Fragment>
      <div className='mb-5 flex w-full justify-end'>
        <Button onClick={()=>setOpenCreateProduct(true)}>Add New Product</Button>
      </div>
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'></div>
      <Sheet open={openCreateProduct} onOpenChange={()=>setOpenCreateProduct(false)}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadImage={uploadImage} setUploadImage={setUploadImage}/>
          <div className='py-6'>
            <Form formData={formData} setFormData={setFormData} buttonText={"Add"} onSubmit={onSubmit} formControls={AddProductFormData}/>
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  )
}

export default Products