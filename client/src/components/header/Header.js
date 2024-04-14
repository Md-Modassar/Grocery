import React, { useEffect, useState } from 'react'
import "./header.css"
import logo from "../../images/logo8.png"
import { TbCategory } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import { RiAccountCircleLine } from "react-icons/ri";
import data from "../category/categorydata"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MyCart from '../Mycart/MyCart';
import { BASE_URL } from '../../server/server';
import Popup from '../popup/Popup';

const Header = ({onSearch}) => {
  const [menu,setMenu]=useState(false)
  const [category,setCategory]=useState(false)
  const [searchQuery,setSearchQuery]=useState('')

  const authdata=localStorage.getItem('auth')
  const data1=JSON.parse(authdata);
  
    const [cartdata,setCartdata]=useState([])
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [popup,setPopup]=useState(false)
    const navigate=useNavigate();
    const location=useLocation()

    const handleOpenDialog = () => {
      setIsDialogOpen(true);
    };
    const handleSearch = (productRef) => {
      if (productRef) {
        onSearch(searchQuery, productRef);
      } else {
        return <h1>No item</h1>;
      }
    };

    const handleLogout = () => {

      localStorage.removeItem('auth')
      setPopup(!popup)
      navigate(location.state||"/")
      
    }
    
  
    const handleCloseDialog = () => {
      setIsDialogOpen(false);
    };
    const getcarts=async()=>{
      try{
          const result=await axios.get(`${BASE_URL}/cart`,{
           
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
    },[cartdata])
      
   console.log(cartdata.length)

  return (
    <div className='header'>
    <div className='header-left'>
      <Link to="/home"><img src={logo}  alt=''/></Link>
      <div className='cate'>
        <TbCategory className='icon1' onClick={()=>setCategory(!category)}/>
        <span>Category</span>
      </div>
      <div className='search'>
        <CiSearch className='searchicon' onClick={handleSearch}/>
        <input type='text' placeholder='Search' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
      </div>
    </div>
    <div className='header-right'>
     <div className='cart' onClick={handleOpenDialog}>
     <GiShoppingCart className='iconcart'/>
     <span>{cartdata?.length}</span>
   
     </div>
     { data1.status ===false?(<Link to="/signup" style={{textDecoration:"none"}}><button>Login</button></Link>):
      (<RiAccountCircleLine className='profile' onClick={()=>setMenu(!menu)}/>)
    }
    </div>
    {
      category &&(
 <div className='headre-category-container' >
        {
            data.map((cate,index)=>(
              <Link to={`/product-category/${cate.name}`} style={{textDecoration:"none"}}>
                <div className='header-cate-cart'>
                 <img src={cate.image} alt='' />
                 <span>{cate.name}</span>
                </div>
              </Link>
            ))
        }
        </div>
      )
    }
      
    {
      menu &&(<div className='div-profile'>
       <span>My Account</span>
       <Link to="/order" style={{textDecoration:"none",color:"black"}}><span>My Order</span></Link> 
      <span onClick={handleLogout}>LogOut</span>
    </div>)
}
<MyCart isOpen={isDialogOpen} onClose={handleCloseDialog} children={cartdata}/>
{popup &&<Popup value={popup} h="Logout Sccussfully"/>}
    </div>
  )
}

export default Header