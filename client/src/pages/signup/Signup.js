import React, { useState } from 'react'
import "./singup.css"
import logo from "../../images/logo8.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
   const [input,setInput]=useState({
    name:"",
    email:"",
    password:""
   });

   const navigate=useNavigate();
   const location=useLocation()

   const handleChange=(e)=>{
    setInput((preState)=>({
      ...preState,
      [e.target.name]:e.target.value
    }))
   }

   const heandelSubmit=async()=>{
    try{
      const result=await axios.post('http://localhost:8080/signup',{
        name:input.name,
        email:input.email,
        password:input.password
      })
      console.log(result)
      if(result.data.status)
      {
        navigate(location.state||"/login")
      }
    }catch(err){
      console.log("went samthing wrong",err.message) 
     }
   }
    
  return (
    <div className='signup'>
        <div className='sigup-center-div'>
            <div className='sigup-center-top'>
            <img src={logo} alt='' />
            </div>

     <span>Create an Account</span>
     <span>Enter your Email and Password Create an account</span>
     <input type='text' name='name' onChange={handleChange} placeholder='Username'/>
     <input type="email" name="email" onChange={handleChange} placeholder='Email'/>
     <input type='password' name="password" onChange={handleChange} placeholder='Password'/>
     <button onClick={heandelSubmit}>Create an Account</button>
     <div className='s-down-div'>
        <span>Already have account</span>
        <Link to="/login" style={{textDecoration:"none"}}><span>Click here to Sign in</span></Link>
     </div>
        </div>
    
    </div>
  )
}

export default Signup