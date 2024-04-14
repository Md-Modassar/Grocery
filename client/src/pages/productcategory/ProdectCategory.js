import React from 'react'
import "./productcategory.css"
import data from '../../components/data/data'
import { useParams } from 'react-router-dom'
import Productcard from '../../components/productcard/Productcard'
import Category from '../../components/category/Category'
import Header from '../../components/header/Header'

const ProdectCategory = () => {
  const { category } = useParams();
  console.log("Data Array:", data);
  const filteredProducts = data.filter(product =>
    product.category.trim().toLowerCase() === category.trim().toLowerCase()
  );

  // Log category and filtered products for debugging
  console.log("Category Parameter:", category);
  console.log("Filtered Products:", filteredProducts);


  
  return (
    <>
    <Header/>
        <div className='proedtcategory-product'>
      <span className='proedtcategory-product-title'>{category}</span>
      <Category/>
      <div className='proedtcategory-product-down'>
      <span className='proedtcategory-product-down-title'>Popular Product</span>
      <div className='proedtcategory-product-container'>
           {
            filteredProducts.map((ele,index)=>(
              
                 <Productcard ele={ele} index={index}/>
              
              
            ))
           }
      </div>

      </div>
     
    </div>
    </>

  )
}

export default ProdectCategory