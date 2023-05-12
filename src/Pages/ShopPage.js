import React from 'react'
import HeroBlog from '../Components/Blog/Hero'
import Navbar from '../Components/Navbar/Index'
import DummyListFun from './../Components/Shop/Lists';
import DummyListFunc from '../Components/Shop/Listing';
import Cards from '../Components/Shop/Cards';
import ShopDetail from '../Components/Shop/shopDetail';

const ShopPage = () => {
  return (
    <div className='flex flex-col h-full w-[95%] md:w-full'>
    <Navbar/>
    <HeroBlog/>
    <ShopDetail/>



    </div>
  )
}

export default ShopPage