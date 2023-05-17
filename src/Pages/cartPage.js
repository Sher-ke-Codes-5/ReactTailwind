import React from 'react'
import Navbar from "../Components/Navbar/Index";
import HeroBlog from "../Components/Blog/Hero";
import Product from '../Components/Cart/Product';
const CartPage = () => {
  return (
    <div className="flex flex-col  h-full  w-full ">
    <Navbar />
    <HeroBlog/>
    <Product/>
    {/* <ProdALL/> */}
    </div>
  )
}

export default CartPage