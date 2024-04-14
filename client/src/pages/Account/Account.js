import React from 'react'
import "./account.css"
import logo from "../../images/logo8.png"
import { Link } from 'react-router-dom'

const Account = () => {
    const authdata=localStorage.getItem('auth')
    const data1=JSON.parse(authdata);
    
  return (
    <div className='account-container'>
        <div className='account'>
            <div className='account-titele'>
            <img src={logo} alt='' style={{height:"100px",width:"100px"}}/> 
            <span>Your Account</span>    
            </div>
            <div className='account-body'>
             <div>
                <img src='https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png' alt='' style={{height:"100px",width:"100px"}}/>
             </div>
               <div className='account-name-div'><span>Name</span>=<span>{data1.emailexist.name}</span></div>
               <div className='account-name-div'><span>Email</span>=<span>{data1.emailexist.email}</span></div>
            </div>
           <Link to="/home"><span>Home</span></Link> 
           

        </div>

    </div>
  )
}

export default Account