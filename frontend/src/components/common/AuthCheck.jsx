import { Navigate, useLocation } from 'react-router-dom'

const AuthCheck = ({isAuthenticated , user , children}) => {
    const location = useLocation()
    // console.log(location.pathname, isAuthenticated);

    if(!isAuthenticated && !(location.pathname.includes("/login") || location.pathname.includes("/register"))){
        return <Navigate to="/auth/login"/>
    }
    if(isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes("/register"))){
        if(user?.role === "admin"){
            return <Navigate to="/admin/dashbord"/>
        }else{
            return <Navigate to="/shop/home"/>
        }
    }
    if(isAuthenticated && user?.role !== "admin" && location.pathname.includes('admin')){    
        return <Navigate to="/unauth-page"/>
    }
    if(isAuthenticated && user?.role === "admin" && location.pathname.includes("shop")){        
        return <Navigate to="/admin/dashbord"/>
    }
  return (
    <>{children}</>
  )
}

export default AuthCheck