import React, { useState, useEffect } from "react";
import Logo2 from "../../assets/Screenshot_5.png";
import Logo3 from "../../assets/Screenshot_6.png";
import { RiShoppingBagLine } from "react-icons/ri";
import { useRef } from "react";

//import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  const days = time.getDay().toString().padStart("2", "0");
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="w-full flex md:flex-row flex-col">
      <div className="md:w-[50%] bg-slate-200 w-full  md:ml-0 sm:ml-auto  mt-20 h-screen flex   ">
        <div className="w-auto md:w-1/5 text-black text-3xl rounded-xl  text-center">
          <div className="flex flex-row">
            <div className="absolute">
              <img
                className="object-cover w-auto md:w-full h-[450px]  md:h-[671px]"
                src={Logo2}
                alt="Banner"
              />
            </div>
            <p className="absolute text-white md:pl-32 pl-6 md:mt-72 mt-32 flex-row text-3xl">
              Exclusive Hot Deals End Soon!{" "}
            </p>
            <div className="flex  items-center rounded-lg justify-center ml-10">
              <div
                className="items-center px-4  md:pl-14 md:pr-14 rounded-sm justify-center align-center  bg-slate-200 md:mt-96 mt-56 relative flex flex-col"
                style={{ flex: "1 1 25%", borderRight: "1px solid black" }}
              >
                <h1>{days}</h1>
                <span className="text-sm">Days</span>
              </div>
              <div
                className="relative px-6 md:pr-14 justify-center items-center md:pl-14 text-center bg-slate-200 md:mt-96 mt-56 flex flex-col"
                style={{ flex: "1 1 25%", borderRight: "1px solid black" }}
              >
                <h1>{hours}</h1>
                <span className="text-sm">Hours</span>
              </div>
              <div
                className=" relative px-6 md:pl-14  md:pr-14 justify-center items-center bg-slate-200 md:mt-96  mt-56 flex flex-col"
                style={{ flex: "1 1 25%", borderRight: "1px solid black" }}
              >
                <h1>{minutes}</h1>
                <span className="text-sm">Mins</span>
              </div>
              <div
                className="relative px-4 items-center md:pl-14 md:pr-14 bg-slate-200 md:mt-96 flex mt-56 flex-col"
                style={{ flex: "1 1 25%" }}
              >
                <h1>{seconds}</h1>
                <span className="text-sm">Sec</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative   md:m-auto md:top-52 md:right-20 right-52 flex  md:justify-center justify-start items-center">
          <button className="bg-yellow-400 whitespace-nowrap md:px-7 p-6  md:py-4   justify-start  text-center font-semibold rounded-full">
            <span>SHOP NOW{" "}</span>
            
          </button>
        </div>
      </div>
      <div className=" flex md:flex-col w-[100%]   md:ml-60 mt-20 h-[100] bg-slate-100  flex-col pl-10 pr-10 items-center  text-lg ">
        {/* <OwlCarousel className="owl-theme" loop margin={10} nav items={1}>  */}
        <div className="relative item">
          <img
            className="object-contain pt-40 w-[100] md:w-full h-[100] md:h-full"
            src={Logo3}
            alt="Banner"
          />
        </div>
        {/* </OwlCarousel> */}

        <div className="flex mt-5 flex-col item-center justify-center">
          <div className="flex items-center justify-center  ">
            <h1 className="text-center text-lg font-semibold">$150</h1>
          </div>
          <p className="text-2xl mt-3 font-semibold text-center">
            {" "}
            ADDIDAS HOME SEASON FOR SPORTS FESTIVAL{" "}
          </p>
          <div className="flex flex-row mt-5 justify-center items-center">
            <RiShoppingBagLine className=" p-2 text-white text-4xl mt-2 items-center  bg-yellow-300  rounded-full text-center" />
            <span className="pl-8 mt-2 font-semibold text-base">
              Add to bag
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
