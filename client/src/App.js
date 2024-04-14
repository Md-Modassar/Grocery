import { Routes,Route } from 'react-router-dom';
import './App.css';
import Banner from './components/banner/Banner';
import Category from './components/category/Category';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import CartData from './components/Mycart/CartData';
import MyCart from './components/Mycart/MyCart';
import Checkout from './pages/checkout/Checkout';
import Order from './pages/order/Order';
import ProdectCategory from './pages/productcategory/ProdectCategory';

function App() {
  return (
     <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/checkout/:amount' element={<Checkout/>} />
      <Route path='/order' element={<Order/>}/>
      <Route path='/product-category/:category' element={<ProdectCategory/>} />
      

     </Routes>
    
    
  );
}

export default App;
