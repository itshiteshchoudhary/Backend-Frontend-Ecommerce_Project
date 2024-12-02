import Form from '@/components/common/Form'
import { loginFormControls } from '@/components/config'
import { useToast } from '@/hooks/use-toast'
import { loginUser } from '@/store/auth-slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const initialState = {
  email: "",
  password: ""
}
const Login = () => {
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const {toast} = useToast()

  function handelSubmit(e) {
    e.preventDefault()
    dispatch(loginUser(formData)).then((data)=>{
      console.log(data);  
      if(data?.payload?.success){
        toast({
          title : data?.payload?.message || "login successfull"
        })
      }else{
        toast({
          title: data?.error?.message,
          varient :"destructive"
        })
      }
    })
  }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold tracking-tight text-foreground mb-10'>Login to your Account</h1>
      </div>
      <Form formControls={loginFormControls} buttonText={'LogIn'} formData={formData} setFormData={setFormData} onSubmit={handelSubmit} />
      <p className='mt-2 ml-20'>Don't have an account? <Link className='font-medium ml-2 text-primary hover:underline hover:text-blue-900 hover:font-extrabold' to="/auth/register">Sign Up</Link></p>
    </div>
  )
}

export default Login