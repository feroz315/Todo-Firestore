import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'



const Authroute = () => {
  return  !localStorage.getItem("userid") ? (
    <Outlet /> 
  ):(

  <Navigate to={"/todo"} />
  
  )
}



export default Authroute;