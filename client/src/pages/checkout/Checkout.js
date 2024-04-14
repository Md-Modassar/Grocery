import React,{useEffect,useState} from 'react'
import "./checkout.css"
import Header from '../../components/header/Header'
import { useParams,useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import data from "../../components/data/data"
import Popup from '../../components/popup/Popup'


const Checkout = () => {
  const {amount}=useParams()
  const [cartdata,setCartdata]=useState([])
  const navigate=useNavigate();
  const location =useLocation()
  const [cond,setCond]=useState(false)
  const [popup,setPopup]=useState(false)

 // console.log(amount)
  let totalamount=parseInt(amount)
  console.log("nu",totalamount)

  const authdata=localStorage.getItem('auth')
  const data1=JSON.parse(authdata);

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



  useEffect(() => {
    getcarts()
  },[cartdata])

  const filteredData = cartdata.map(ele =>
    data.find(item => item.id === ele.productid)
  );

  const productid = cartdata.map(({ productid, amount, quantity }) => ({ productid, amount, quantity }));

  console.log("productid===",productid)
   

  const createorder=async()=>{
    try{
      const result=await axios.post("http://localhost:8080/order",{
       userid:data1.emailexist._id,
       products:productid,
       amount:amount
      })
      if(result.data.status){
         console.log(result.data)
        setPopup(!popup)
       setTimeout(()=>{
        navigate(location.state||'/order')

       },1000) 
        
      }

      

    }catch(err){
     console.log({message:err.message})
    }

 }

  return (
    <>
    <Header/>
        <div className='checkout-div'>
          <span className='checkout-title'>Checkout</span>
          <div className='checkout-container'>
          <div className='checkout-left'>
            <span>Billing Details</span>
            <div className='top-input'>
              <input type='text' placeholder='Enter Your Name'/>
              <input type='email' placeholder='Enter Yor Email'/>

            </div >
            <div className='midl-input'>
              <input type="text" placeholder='Enter Your Mobile No.'/>
              <input type='text' placeholder='Enter Zip Code'/>
            </div>
            <input type='text' placeholder='Address' className='dow-input'/>
           </div>
           <div className='checkout-right'>
             <div className='checkout-right-container'>
             <span className='checkout-right-container-title'>Total Cart(2)</span>
             <div className='checkout-right-container-down'>
             <div className='checkout-span-div1'><span>SubTotal :</span><span>{typeof totalamount === 'number' ? totalamount.toFixed(2) : '-'} ₹</span></div>
             <div className='checkout-span-div2'><span>Delivery Charge</span><span>{(25).toFixed(2)}</span></div>
             <div className='checkout-span-div3'><span>Total Ammount</span><span>{(totalamount+25).toFixed(2)} ₹</span></div>
            
             </div>
             <button onClick={createorder}>Order</button>
             </div>
            
           </div>
          </div>
          {popup &&<Popup value={popup} h="Order Successfully"/>}
  

        </div>
    </>

  )
}

export default Checkout