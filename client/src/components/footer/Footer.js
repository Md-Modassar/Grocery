import React from 'react'
import "./footer.css"
import logo from "../../images/logo8.png"
import { SiGoogleplay } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const catdata=[
    "Vegetables",
     "Fruits",
    "Milk & Juice",
    "Personal Core",
    "Bakery",
    "Grains",
    "Spicies",
    "Oil",
    "Cookies",
    "Chicken & Eggs"
  ]
  return (
    
  
    <div className='footer'>
      <div className='footer-category'>
        <span className='footer-cate-title'>Popular Category</span>
        <div className='footer-category-container'>
           {
            catdata.map((cate)=>(
              <Link to={`/product-category/${cate}`} style={{textDecoration:"none"}}><span>{cate}</span></Link> 
            ))
           }
        </div>

      </div>
      <div className='footer-socal-midea'>
        <img src={logo} alt='' className='footer-logo'/>
        <div className='a-p-store'>
        <div className='googleplay'>
         <SiGoogleplay className='icon'/>
         <div className='googlespan'>
            <span>GET IT ON</span>
            <span>Google Play</span>
         </div>
        </div>
        <div className='appleStore'>
           <FaApple className='a-icon'/>
           <div className='apple-div'>
            <span>Download on the</span>
            <span>Apple Store</span>
           </div>
        </div>
        </div>
       <div className='social-midea'>
        <FaFacebookSquare className='f-icon1'/>
        <FaInstagram className='i-icon'/>
        <FaTwitter className='t-icon'/>
        <FaLinkedin className='l-icon'/>
       </div>
      </div>
      
    </div>
    

  )
}

export default Footer