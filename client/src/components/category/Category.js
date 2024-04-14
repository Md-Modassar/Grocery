import React from 'react'
import "./category.css"
import data from "./categorydata"
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='category'>
        <span>Shope Category</span>
        <div className='category-container'>
        {
            data.map((cate,index)=>(
              <Link to={`/product-category/${cate.name}`}>
              <div className='cate-cart'>
                 <img src={cate.image} alt='' />
                 <span>{cate.name}</span>
                </div>
              </Link>  
            ))
        }
        </div>

    </div>
  )
}

export default Category