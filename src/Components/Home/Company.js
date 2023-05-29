import React from "react";
import logo from "../../assets/Screenshot_8.png";
import logo2 from "../../assets/Screenshot_9.png";
import logo3 from "../../assets/Screenshot_10.png";
const CompLogos = () => {
  return (
    <div className="flex flex-col  items-center  md:flex-row md:justify-between lg:mt-[10rem] md:mt-[90px] bg-slate-200 pt-20 pb-10 md:pt-20 md:pb-10">
      <div className="flex flex-col opacity-25 hover:opacity-100 w-1/2   transition-all ease-in-out items-center  md:w-1/5 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col opacity-25 hover:opacity-100  items-center transition-all ease-in-out md:w-1/5 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <img src={logo2} alt="logo" />
      </div>
      <div className="flex flex-col opacity-25 items-center hover:opacity-100 transition-all ease-in-out  md:w-1/5 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex opacity-25 flex-col items-center hover:opacity-100 transition-all ease-in-out   md:w-1/5 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <img src={logo2} alt="logo" />
      </div>
      <div className="flex opacity-25 flex-col items-center hover:opacity-100 transition-all ease-in-out   md:w-1/5 md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
        <img src={logo3} alt="logo" />
      </div>
    </div>
  );
};

export default CompLogos;
