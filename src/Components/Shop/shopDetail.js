import React from "react";
import DummyListFun from "./Lists";
import DummyListFunc from "./Listing";
import Cards from "./Cards";
import ProductScreen from "../Home/productScreen";
import Extra from "./FooterBar";
import FooterBar from "./FooterBar";
import Listss from "./Listss";
import Models from "../Home/Models";
import Footer from "../Footer";
const ShopDetail = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-[100%] ">
      <div className="flex flex-col  md:flex-col">
       <Listss/>

        </div>
        <div className="flex flex-col w-full">
          <Cards />
          <FooterBar />
        </div>
      </div>
      <Models/>
      <Footer/>
    </div>
  );
};

export default ShopDetail;
