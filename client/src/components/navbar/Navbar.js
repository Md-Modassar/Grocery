import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import sliderImage from './sliderImage';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="slider-container">
     <Slide>
         {sliderImage.map((slideImage, index)=> (
           <div className={index===0?'image-container':index===1?"image-container1":"image-container2"}>
               <img src={slideImage.urls} alt='' className='slid-image'/>
           </div>
          
      
          ))} 
        </Slide>
  </div>
  );
};

export default Navbar