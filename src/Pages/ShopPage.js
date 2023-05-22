import React from "react";
import HeroBlog from "../Components/Blog/Hero";
import Navbar from "../Components/Navbar/Index";
import ShopDetail from "../Components/Shop/shopDetail";

const ShopPage = () => {
  return (
    <div className="flex flex-col h-full w-[100%] md:w-full">
      <Navbar />
      <HeroBlog />
      <ShopDetail />
    </div>
  );
};

export default ShopPage;
