import React, { useState } from 'react'
import "./carddialog.css"
import { GiShoppingCart } from "react-icons/gi";
import axios from 'axios';
import Popup from '../popup/Popup';
import { BASE_URL } from '../../server/server';

const Card = ({children,price}) => {
    const [count,setCount]=useState(1)
    const authdata=localStorage.getItem('auth')
    const authdata1=JSON.parse(authdata)
     console.log(children)
    let Price=price.split("/")
    let amount=parseInt(Price[0])*count
    let [value,setValue]=useState(false)
  
    const addcart=async()=>{
        try{
           const result=await axios.post(`${BASE_URL}/cart`,{
              userid:authdata1.emailexist._id,
              amount:amount,
              quantity:count,
              productid:children.id
           }
           )
           if(result.data.status){
            console.log(result.data)
            setValue(!value)
           }
        }catch(err){
          console.log("went to samething wrong",err.message)
        }
    }
  return (
    <>
    <div className='dialog-card'>
      <div className='dialog-card-left'>
        <div className='dialog-image-cotainer'>
            <img src={children.image} alt='' />
        </div>
      </div>
      <div className='dialog-right'>
        <span>{children.name}</span>
        <p>Lorem lpsum is simply dumy text of the printing and typesetting industry. Lorem lpsum has been the industry's standard dummy text</p>
        <span>{amount<=0?0:price}</span>
        <span>Quantity</span>
        <div className='quant-div'><div className='quant-button'><button onClick={()=>setCount(count-1)}>-</button>{count}<button onClick={()=>setCount(count+1)}>+</button></div>
        <span> = {amount} /₹</span>
       </div>
       <button className='dialog-cart-btn' onClick={()=>addcart()}><GiShoppingCart className='dialog-icon'/> Add Cart</button>
       <span>Category = {children.category}</span>
      </div>
     
    </div>
    {
      value && <Popup value={value} h="Add to Cart Sccussfully"/>
    }

    </>
  )
}

export default Card