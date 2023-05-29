import React from "react";
import Logo from "../../assets/Screenshot_16.png";
import logo2 from "../../assets/Screenshot_17.png";
import logo3 from "../../assets/Screenshot_18.png";

const Logos = () => {
  return (
    <div className="flex sm:w-full md:w-[100%] md:justify-items-center md:items-center lg:w-[100%] md:pl-32 pl-10 mt-96  relative pt-20 pb-10 mb-20 md:flex-row flex-col bg-slate-100">
      <div className=" md:flex md:w-1/3 flex w-full">
        <div className="relative ">
          <img src={Logo} alt="pic" className="h-[300px] w-[300px]" />
          <div className="absolute inset-0 flex flex-col justify-center mt-5 mb-5 ml-5 mr-5  hover:bg-yellow-500   bg-slate-950 opacity-50 items-center text-center">
            <h5 className="text-white font-semibold mb-4 text-xl">
              SOCIAL LIFE
            </h5>
            <p className="text-white text-lg">Enjoy Social life together </p>
          </div>
        </div>
      </div>
      <div className=" md:flex md:w-1/3 flex w-full">
        <div className="relative">
          <img src={logo2} alt="pic" className="h-[300px] w-[300px]" />
          <div className="absolute inset-0 flex flex-col justify-center mt-5 mb-5 ml-5 mr-5 bg-slate-950 opacity-50 hover:bg-yellow-500 items-center text-center ">
            <h1 className="text-white font-semibold text-xl mb-4 ">POLITICS</h1>
            <p className="text-white text-lg">Be a part of POLITICS</p>
          </div>
        </div>
      </div>
      <div className="md:flex md:w-1/4 flex w-full">
        <div className="relative">
          <img src={logo3} alt="pic" className="h-[300px] w-[300px]" />
          <div className="absolute inset-0 flex flex-col justify-center mt-5 mb-5 ml-5 mr-5 bg-slate-950 opacity-50 hover:bg-yellow-500 items-center text-center ">
            <h1 className="text-white font-semibold text-xl mb-4 ">FOOD</h1>
            <p className="text-white text-lg">Let the food be finished</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
