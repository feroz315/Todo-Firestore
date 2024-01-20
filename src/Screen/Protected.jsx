import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';

const Protected = () => {
  return localStorage.getItem("userid") ? <Outlet /> : <Navigate to={"/"} />
}



export default Protected;