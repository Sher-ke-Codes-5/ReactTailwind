import React from "react";
import { TfiTruck ,TfiHeadphoneAlt} from "react-icons/tfi";
import {FiDatabase}from 'react-icons/fi';
const Logos = () => {
  return (
    <div className="flex flex-col items-center  md:flex-row md:justify-between mt-[590px] bg-slate-200 pt-20 pb-10 md:pt-20 md:pb-10">
      <div className="flex flex-col items-center  md:w-1/4 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <TfiTruck />
        <h1 className="text-center md:text-left"> Free Delivery</h1>
        <p className="text-center md:text-left"> Free shipping all order</p>
      </div>
      <div className="flex flex-col items-center md:w-1/4 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <TfiHeadphoneAlt />
        <h1 className="text-center md:text-left"> Free Delivery</h1>
        <p className="text-center md:text-left"> Free shipping all order</p>
      </div>
      <div className="flex flex-col items-center  md:w-1/4 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <TfiTruck />
        <h1 className="text-center "> Free Delivery</h1>
        <p className="text-center "> Free shipping all order</p>
      </div>
      <div className="flex flex-col items-center  md:w-1/4 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
      <FiDatabase/>
        <h1 className="text-center "> Free Delivery</h1>
        <p className="text-center"> Free shipping all order</p>
      </div>
    </div>
  );
};

export default Logos;
