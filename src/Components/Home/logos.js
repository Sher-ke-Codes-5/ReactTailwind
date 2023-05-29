import React from "react";
import { TfiTruck ,TfiHeadphoneAlt} from "react-icons/tfi";
import {FiDatabase}from 'react-icons/fi';
const Logos = () => {
  return (
    <div className="flex flex-col md:flex-col  items-center  lg:flex-row md:justify-between sm:mt-[590px] mt-[590px] md:mt-[900px] lg:mt-[590px] bg-white  sm:pt-20 md:pt-32 pb-10 lg:pt-20 md:pb-10">
      <div className="flex flex-col items-center  md:w-1/4 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <TfiTruck />
        <h1 className="text-center md:text-left"> Free Delivery</h1>
        <p className="text-center md:text-left"> Free shipping for all</p>
      </div>
      <div className="flex flex-col items-center md:w-1/4 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <TfiHeadphoneAlt />
        <h1 className="text-center md:text-left"> Free Delivery</h1>
        <p className="text-center md:text-left"> Free shipping for all</p>
      </div>
      <div className="flex flex-col items-center  md:w-1/4 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <TfiTruck />
        <h1 className="text-center "> Free Delivery</h1>
        <p className="text-center "> Free shipping for all</p>
      </div>
      <div className="flex flex-col items-center  md:w-1/4 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
      <FiDatabase/>
        <h1 className="text-center "> Free Delivery</h1>
        <p className="text-center"> Free shipping for all</p>
      </div>
    </div>
  );
};

export default Logos;
