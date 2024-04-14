import React, { useState } from 'react'
import logo from "../../images/logo8.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const [input,setInput]=useState({
    email:"",
    password:""
  })

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
      const result=await axios.post('http://localhost:8080/login',{
        email:input.email,
        password:input.password
      })
      console.log(result.data)
      if(result.data.status)
       {
        localStorage.setItem('auth',JSON.stringify(result.data))
        navigate(location.state||'/')
       }
    }catch(err){
       console.log("error===",err.response.data)
       // status=err.response.data.status
      ///  console.log("login--",status)
       // openPopUp()
       }
  }
  return (
    <div className='signup'>
    <div className='sigup-center-div'>
        <div className='sigup-center-top'>
        <img src={logo} alt='' />
        </div>

 <span>Sign In to Account</span>
 <span>Enter your Email and Password to Sign In</span>

 <input type="email" name='email' value={input.email} placeholder='Email' onChange={handleChange}/>
 <input type='password' name='password' value={input.password} placeholder='Password' onChange={handleChange}/>
 <button onClick={heandelSubmit}>Sign In</button>
 <div className='s-down-div'>
    <span>Don't have an account?</span>
   <Link to="/signup" style={{textDecoration:"none"}}><span>Click here to create new account</span></Link> 
 </div>
    </div>

</div>
  )
}

export default Login