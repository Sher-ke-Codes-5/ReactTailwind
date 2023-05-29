import React from "react";
import Logo from "../../assets/Screenshot_1.png";
import Logo2 from "../../assets/Screenshot_2.png";
import Logo3 from "../../assets/Screenshot_3.png";

const Poster = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="flex flex-col md:gap-10 lg:gap-10 sm:gap-10 xl:gap-20 lg:w-[60%] xl:w-[70%] sm:w-full pl-5 pr-5 md:pl-20 md:pr-10 md:flex-col mt-[90px] bg-slate-100 pt-20 pb-10 md:pt-24 md:pb-10">
        <div className="flex md:flex-row gap-10 flex-col  md:mx-auto md:items-center w-auto md:w-[70] md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
          <div className="relative">
            <img
              className="object-cover h-[200px] w-[500px] md:max-w-full md:h-auto"
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
              className="md:object-cover h-[300px] w-[500px] md:w-full md:h-auto"
              src={Logo2}
              alt="Banner"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <span className="text-white text-sm text-center font-semibold">
                Sneaker for Sports
              </span>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row gap-10 flex-col  w-[100] md:w-[100] md:pl-[15px] md:pr-[14px] text-lg mb-8 md:mb-0">
          <div className="relative">
            <img
              className="object-cover h-[300px] w-[500px] md:w-full md:h-auto "
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
              className="object-cover h-[200px] w-[500px] md:max-w-full md:h-auto"
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
      <div className="flex md:flex-row  lg:mt-24 md:mt-10 sm:mt-0 xl:mt-0 gap-10 bg-white flex-col mx-auto items-center w-[100] md:w-[100] md:pl-[15px] md:pr-[15px] text-lg mb-0 md:mb-0">
  <div className="relative">
    <img
      className="object-cover lg:pt-0 md:pt-0  xl:pt-0 w-full md:w-[350px] h-auto md:h-[530px]"
      src={Logo3}
      alt="Banner"
    />
    <div className="absolute inset-0 flex justify-center  items-center ">
      <span className="text-white  text-sm font-bold opacity-0 transition-opacity duration-300 hover:opacity-100 hover:bg-black">
        Sneaker for Sportssss
      </span>
    </div>
  </div>
</div>

    </div>
  );
};
export default Poster;
