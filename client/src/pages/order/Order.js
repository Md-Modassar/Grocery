import React,{useState,useEffect} from 'react'
import "./order.css"
import Header from '../../components/header/Header'
import axios from 'axios'
import Orderproduct from '../../components/orderproduct/Orderproduct'
import data from "../../components/data/data"
import { BASE_URL } from '../../server/server'

const Order = () => {
    const [orderdata,setOrderdata]=useState([])
    const authdata=localStorage.getItem('auth')
    const data1=JSON.parse(authdata);
    const [orderprdt,setOrderprdt]=useState(false)
    const [order,setOrder]=useState(null)


    const userid= data1.emailexist._id
    const getorder=async()=>{
        try{
          const result=await axios.get(`${BASE_URL}/order/${ userid}`)
          if(result.data.status)
           {
            setOrderdata(result.data.orders)
            //console.log(result.data)
           }
        }catch(err){
            return console.log({status:false,message:err.message})
        }
    }

    useEffect(()=>{
     getorder()
    },[])
   
   
    const healdelproductlis=(ele)=>{
       setOrderprdt(!orderprdt)
       setOrder(ele)
    }
    const filteredData = order?.products?.map(ele =>
        data.find(item => {
           // console.log("Item:", item);
            //console.log("Ele:", ele.productid);
            return item.id === ele.productid;
        })
    );
    //console.log("hiiwnsd",filteredData)
  //  console.log("otegddd===",order)

  return (
    <>
     <Header/>
     <div className='order' >
        <div className='order-title'>
          <span>My Order</span>
        </div>
        <div className='order-history'>
        
          <div className='order-div-container'>
          <span className='span1'>Order History</span>
          
           {
            orderdata.map((ele)=>(
                <div className='order-div' onClick={()=>healdelproductlis(ele)}>
                 <div className='order-div1'><span>Order Date :</span><span> {ele.date}</span></div>
                 <div className='order-div1'><span>Total Amount:</span><span> {ele.amount} ₹</span></div>
                 <div className='order-div1'><span>Status: </span><span></span> {ele.status}</div>
                </div>

            ))
           }
          
          </div>
          {orderprdt &&  <div className='order-product-list'>
            <span className='order-product-list-title'>Your Products</span>
         <Orderproduct products={filteredData} order={order}/>
        </div>
        }
        </div>
        


     </div>
    </>
  )
}

export default Order