import Form from '@/components/common/Form'
import { registerFormControls } from '@/components/config'
import { useToast } from '@/hooks/use-toast'
import { registerUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const initialState = {
  username: "",
  email: "",
  password: ""
}

const Register = () => {

  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {toast} = useToast()

  function handelSubmit(e) {
    e.preventDefault()
    dispatch(registerUser(formData)).then((data) =>{
      console.log(data);
      if(data?.payload?.success){ 
        toast({
          title : data?.payload?.message || "signin successful"
        })
        navigate('/auth/login')
      }else{
        toast({
          title : data?.payload?.message || "Signin fail",
          variant : "destructive"
        })
      }
    } )
  }
  // console.log(formData);
  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground mb-10'>Create New Account</h1>
      </div>
      <Form formControls={registerFormControls} buttonText={'Sign Up'} formData={formData} setFormData={setFormData} onSubmit={handelSubmit} />
      <p className='mt-2 ml-20'>Already have an account? <Link className='font-medium ml-2 text-primary hover:underline hover:text-blue-900 hover:font-extrabold' to="/auth/login">Login</Link></p>
    </div>
  )
}

export default Register