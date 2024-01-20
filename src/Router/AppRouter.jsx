import React from 'react';

import { Route,Routes } from 'react-router-dom';
import Todo from '../Todo';
import SignUp from '../Screen/Signup';
import Login from '../Screen/Login';
import Protected from '../Screen/Protected';
import {  ToastContainer } from 'react-toastify';
import Authroute from '../Screen/Authroute';



function AppRouter() {
  return (
    <>
    <Routes element={<Authroute />}>
     <Route path='/login' element={<Login />}/>
     <Route path='/' element={<SignUp />}/>
    
    <Route element={<Protected />}>
    <Route path='/todo' element={<Todo />}/>
   
    </Route>

    </Routes>

 <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />

</>
  )
}






export default AppRouter;