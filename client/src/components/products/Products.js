import React, { useEffect, useState ,forwardRef} from 'react'
import "./products.css"
import data from "../data/data"
import banner from "../../images/productbanner.jpg"

import Productcard from '../productcard/Productcard'


const Products = ({searchQuery},ref) => {

  



  // Initialize selectedOptions with the first price value for each product
 

  const filteredProducts = data.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  // Define a function to handle changes in each select dropdown

  
  return (
    <div className='products' ref={ref} tabIndex={-1} >
      <span className='title'>All Products</span>
      <div className='product-down'>
        <div className='product-banner'>
            <div className='imge-container'>
            <img src={banner} alt='' />
            </div>
          

        </div>
      <div className='products-catainer'>
         {
            filteredProducts?.map((ele,index)=>(
                <Productcard ele={ele} index={index}/>
            ))
         }

      </div>
      </div>
    
      
    </div>
  )
}

export default forwardRef(Products)