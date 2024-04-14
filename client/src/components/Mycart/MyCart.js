import React from 'react'
import "./mycart.css"
import CartData from './CartData';
import data from "../data/data"
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyCart = ({isOpen,onClose,children}) => {
    if(!isOpen) return null;
      
    const authdata=localStorage.getItem('auth')
    const data1=JSON.parse(authdata);

    const filteredData = children.map(ele =>
        data.find(item => item.id === ele.productid)
      );
       
        let totalmaount=0
         children.map((ele)=>{totalmaount+=ele.amount
            
        })
        //const productid=filteredData.map((ele)=>ele.id)
     
  
      
  return (
    <div className='my-cart'>
    <div className='my-cart-dialog'>
        <button className='my-cart-butn' onClick={onClose}>X</button>
        <div className='my-cart-container'>
            <div className='my-cart-titel'><span>My Carts</span></div>
            <div className='cantainer-of-carts'>
             
                <CartData/>

            </div>
       
         <div className='amout-container'>
            <spa>Total Ammount</spa><span>₹{totalmaount.toFixed(2)}</span>
         </div>
           <Link to={`/checkout/${totalmaount}`} style={{textDecoration:"none" ,height:"10vh",width:"100%"}}><button className='checkout' >Checkout</button></Link>
        </div>
        
    </div>

    </div>
  )
}

export default MyCart