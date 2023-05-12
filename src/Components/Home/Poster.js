import React from "react";
import { TfiTruck, TfiHeadphoneAlt } from "react-icons/tfi";
import { FiDatabase } from "react-icons/fi";
import Logo from "../../assets/Screenshot_1.png";
import Logo2 from "../../assets/Screenshot_2.png";
import Logo3 from "../../assets/Screenshot_3.png";
import App from "./../../App";

const Poster = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="flex flex-col gap-10 md:w-[70%] w-full pl-5 pr-5 md:pl-20 md:pr-10 md:flex-cols mt-[90px] bg-slate-100 pt-20 pb-10 md:pt-24 md:pb-10">
        <div className="flex md:flex-row gap-10 flex-col  mx-auto md:items-center w-[100] md:w-[70] md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
          <div className="relative">
            <img
              className="object-cover max-w-full h-auto"
              src={Logo}
              alt="Banner"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <span className="text-white text-sm font-bold">
                Sneaker for Sports
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              className="object-cover max-w-full h-auto"
              src={Logo2}
              alt="Banner"
            />
            <div className="absolute top-0 left-4 w-auto h-full bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <span className="text-white text-sm text-center font-semibold">
                Sneaker for Sports
              </span>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row gap-10 flex-col  w-[100] md:w-[100] md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
          <div className="relative">
            <img
              className="object-cover max-w-full h-auto "
              src={Logo2}
              alt="Banner"
            />
            <div className="absolute top-0 left-2  w-full h-full bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <span className="text-white text-sm font-bold">
                Sneaker for Sports
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              className="object-cover max-w-full h-auto"
              src={Logo}
              alt="Banner"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <span className="text-white text-sm font-bold">
                Sneaker for Sports
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row  gap-10 bg-slate-100 mt-24 flex-col  mx-auto items-center w-[100] md:w-[100] md:pl-[15px] md:pr-[15px] text-lg mb-8 md:mb-0">
        <div className="relative">
          <img
            className="object-cover pt-16 w-full md:w-[350px] h-auto md:h-[530px]"
            src={Logo3}
            alt="Banner"
          />
          <div className="absolute top-9 bottom-9 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <span className="text-white text-sm font-bold">
              Sneaker for Sports
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Poster;
