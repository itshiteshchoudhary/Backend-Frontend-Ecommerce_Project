import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Skeleton } from "@/components/ui/skeleton"
import Layout from './components/auth/Layout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminLayout from './components/for-admin/AdminLayout'
import DashVord from './pages/for-admin/DashVord'
import Features from './pages/for-admin/Features'
import Orders from './pages/for-admin/Orders'
import Products from './pages/for-admin/Products'
import ShoppingLayout from './components/for-shopping/ShoppingLayout'
import NotFound from './pages/not-found/NotFound'
import ShoppingAccount from './pages/for-shopping/ShoppingAccount'
import ShoppingListing from './pages/for-shopping/ShoppingListing'
import ShoppingCheckout from './pages/for-shopping/ShoppingCheckout'
import ShoppingHome from './pages/for-shopping/ShoppingHome'
import AuthCheck from './components/common/AuthCheck'
import UnauthPage from './pages/unauth-page/UnauthPage'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './store/auth-slice'

const App = () => {
  const {user , isAuthenticated,isLoading} = useSelector(state =>state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(checkAuth())
  },[dispatch])

  if(isLoading) return <Skeleton className="w-[800px] bg-black h-[600px]" />
  // console.log(isLoading , user); 

  return (
    <div className='flex flex-col overflow-hidden bg-white'>  
      <Routes>
        <Route path='/auth' element={<AuthCheck isAuthenticated={isAuthenticated} user={user}>
          <Layout/>
          </AuthCheck>}>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>
        <Route path='/admin' element={<AuthCheck isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout/>
        </AuthCheck>}>
          <Route path='dashbord' element={<DashVord/>}/>
          <Route path='features' element={<Features/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='products' element={<Products/>}/>
        </Route>
        <Route path='/shop' element={<AuthCheck isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout/>
        </AuthCheck>}>
        <Route path='account' element={<ShoppingAccount/>}/>
        <Route path='checkout' element={<ShoppingCheckout/>}/>
        <Route path='home' element={<ShoppingHome/>}/>
        <Route path='listing' element={<ShoppingListing/>}/>
        </Route>
        <Route path="unauth-page" element={<UnauthPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App