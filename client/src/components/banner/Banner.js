import React from 'react'
import "./banner.css"
import banner1 from "../../images/baner3.jpg";
import banner2 from "../../images/banner2.jpeg";
import banner3 from "../../images/banner1.jpeg";


const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-left'>
         <img src={banner1} alt=''  className='left-image'/>
        </div>
        <div className='banner-right'>
          <div className='banner-right-top'>
           <img src={banner2} alt='' className='top-image'/>
          </div>
          <div className='banner-right-down'>
           <img src={banner3} alt=''className='down-image'/>
          </div>
        </div>

    </div>
  )
}

export default Banner