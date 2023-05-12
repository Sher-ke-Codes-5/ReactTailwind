import React from "react";
import Navbar from "../Components/Navbar/Index";
import HeroBlog from "../Components/Blog/Hero";
import ProdInfo from "../Components/ProductDetail/ProdInfo";
import Bar from "../Components/ProductDetail/Bar";
import Footer from "../Components/Footer";

const ProductDetailPage = () => {
  return (
    <div className="flex flex-col w-[100%] md:w-[100%] h-full ">
      <Navbar />
      <HeroBlog />
      <ProdInfo />
      <Bar />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
