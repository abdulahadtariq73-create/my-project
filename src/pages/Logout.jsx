import React, { useContext, useEffect } from 'react'
import Authcontext from '../context/Authcontext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigator = useNavigate()
const authCtx = useContext(Authcontext)

    useEffect(()=>{
       authCtx.setIslogin(false)
           navigator("/")

    },[])
  return (
    <div>
       <h1>kkk</h1>
    </div>
  )
}

export default Logout
