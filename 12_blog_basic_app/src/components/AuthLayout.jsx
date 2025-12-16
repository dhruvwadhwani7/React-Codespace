//it is protection mechanism 
// container protected 
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import React, { useState , useEffect } from 'react'

export default function Protected({children, authentication = "true"}) {
    const navigate = useNavigate()
    const [loader, setLoader ] = useState(true)
    const authStatus = useSelector((state)=> state.auth.status)

    useEffect(()=>{

        //making it easy 
        // if(authStatus === true ){
        //     navigate('/')
        // }
        // else if(authStatus === false){
        //     navigate('login')
        // }
        // let authValue = authStatus === true ? true : false
        if(authentication &&  authStatus !== authentication ){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[navigate,authStatus,authentication])

  return loader  ? <h1>Loading..... </h1>  : <>{children}</>
}
// true 
//authentication is true so it  means login is needed 
