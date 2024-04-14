import React, { useRef, useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Category from '../../components/category/Category'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products'
import Footer from '../../components/footer/Footer'
import Orderbanner from '../../components/orderbanner/Orderbanner'

const Home = () => {
  const [searchQuery,setSearchQuery]=useState('')
  const productRef =useRef(null)

  const handleSearch = (query) => {
    setSearchQuery(query);
    if(productRef.current){
      productRef.current.focus();
    }
  };
  return (
    <div>
      <Header onSearch={handleSearch} productRef={productRef}/>
     <Navbar/>
     <Category/>
     <Banner/>
     <Products searchQuery={searchQuery} ref={productRef}/>
     <Orderbanner/>
     <Footer/>
    </div>
  )
}

export default Home