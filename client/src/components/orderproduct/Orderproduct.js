import React,{useState,useEffect} from 'react'
import "./orderproduct.css"
import axios from 'axios'
import data from "../data/data"
const Orderproduct = ({products,order}) => {
    

    const productMap = new Map();
    data.forEach(item => {
        productMap.set(item.id, item);
      });
      console.log("order",data)
 
   
  return (
    <>
    {order?.products?.map(ele =>{

        const item =productMap.get(ele.productid)
        if(item){
            return (
                <div className='order-product-container'>
                <div className='order-product-image'>
                  <img src={item.image} alt=''/>
                </div>
                <div className='order-product-name-price'>
                    <span>{item.name}</span>
                    <span>{item.price[item.price.length-1]}</span>
                </div>
                <div className='order-product-quantity'>
               <span> Quantity: {ele.quantity}</span>
                </div>
                <div className='order-product-amount'>
                  <span>Amount :{ele.amount.toFixed(2)}₹</span>
                </div>
            </div>
            )
        }
        
      
            

})
        }


    </>
    
  )
}

export default Orderproduct