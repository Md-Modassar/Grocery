import React, { useEffect, useState } from 'react'
import "./cartdata.css"
import { MdDelete } from "react-icons/md";
import axios from 'axios';
//import MyCart from './MyCart';
import data from "../data/data"
import Popup from '../popup/Popup';

const CartData = () => {
    //console.log(item.name,quantity,amount,cartid)
    
    const [cartdata,setCartdata]=useState([]);

    const authdata=localStorage.getItem('auth')
    const data1=JSON.parse(authdata);
    const [popup,setPopup]=useState(false)

    const getcarts=async()=>{
      try{
          const result=await axios.get("http://localhost:8080/cart",{
           
          params: {
            userid: data1.emailexist._id
          }
            
          })
          if(result.status)
            {
              setCartdata(result.data.getdata)
            }
      }catch(err){
        console.log("samething went to wrong")
      }
    }

    useEffect(()=>{
       getcarts()
    },[])
    const filteredData = cartdata.map(ele => {
      const foundItem = data.find(item => item.id === ele.productid);
      console.log("ele:", ele, "foundItem:", foundItem);
      return foundItem;
    });
    console.log("filterdata==",filteredData)
     
    const cartdelet=async({cartid})=>{
      try{
         const result=await axios.delete(`http://localhost:8080/cart/${cartid}`)
         if(result.data.status)
           {
            setPopup(!popup)
            console.log('delete successfull')
          
            getcarts()
            
           }
      }catch(err){
        console.log({message:err.message})
      }
    }

    const productMap = new Map();
data.forEach(item => {
  productMap.set(item.id, item);
});
  
  return (
    <>
    
    {cartdata.map(ele => {
      // Get the corresponding item from productMap
      const item = productMap.get(ele.productid);
      if (item) {
        return (
          <div key={ele._id} className='mycart-container'>
              <div className='mycart-img-cantainer'>
                <img src={item.image} alt='' />
              </div>
              <div className='item-container'>
                <span>{item.name}</span>
                <span>Quantity {ele.quantity}</span>
                <span>₹ {ele.amount}</span>
              </div>
              <MdDelete onClick={() => cartdelet({ cartid: ele._id })} className='mydelete'/>

          </div>
        );
      }
      return null; // Return null if no matching item found
    })}
   {popup &&<Popup value={popup} h="Delete item Sccussfully"/>}
  
    </>
       
      
    
  )
}

export default CartData