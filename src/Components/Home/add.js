import React, { useState, useEffect } from "react";
import Logo2 from "../../assets/Screenshot_5.png";
import Logo3 from "../../assets/Screenshot_35.png";
import { RiShoppingBagLine } from "react-icons/ri";
// import { useRef } from "react";

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
    <div className="w-full lg:w-full  flex lg:flex-row flex-col mt-20">
      <div className="md:w-full sm:h-full lg:w-[90%]  sm:w-full flex-col  h-screen   flex   ">
        <div className="absolute w-full">
          <img
            className="  md:w-[auto] md:h-[700px] h-[700px] sm:h-[500px] sm:w-auto lg:w-[620px]   lg:h-[560px] xl:h-[580px] xl:w-[850px] "
            src={Logo2}
            alt="Banner"
          />
        </div>
        <div className="justify-items-center items-center">
          <p className="absolute text-white md:px-52  lg:px-32 xl:px-52 pl-6 md:mt-52 mt-32 sm:text-6xl md:text-4xl font-semibold flex-row text-3xl">
            Exclusive Hot Deals End Soon!{" "}
          </p>
        </div>
        <div className="flex lg:items-start items-center sm:w-32 w-32 md:w-32 lg:w-0 sm:mt-0 md:mt-10 rounded-lg md:justify-center lg:justify-starts md:ml-72 lg:ml-52 ">
          <div
            className="items-center sm:px-4 px-3 ml-10 md:pl-20 md:ml-36 lg:ml-52 xl:ml-96 md:pr-14 rounded-sm justify-items-center   bg-slate-200 md:mt-96 mt-56 relative flex flex-col"
            style={{ flex: "1 1 25%", borderRight: "1px solid black" }}
          >
            <h1>{days}</h1>
            <span className="text-sm">Days</span>
          </div>
          <div
            className="relative sm:px-6 px-3 md:pr-14 justify-center items-center md:pl-14 text-center bg-slate-200 md:mt-96 mt-56 flex flex-col"
            style={{ flex: "1 1 25%", borderRight: "1px solid black" }}
          >
            <h1>{hours}</h1>
            <span className="text-sm">Hours</span>
          </div>
          <div
            className=" relative sm:px-6 px-3 md:pl-14  md:pr-14 justify-center items-center bg-slate-200 md:mt-96  mt-56 flex flex-col"
            style={{ flex: "1 1 25%", borderRight: "1px solid black" }}
          >
            <h1>{minutes}</h1>
            <span className="text-sm">Mins</span>
          </div>
          <div className="relative px-3 sm:px-4 items-center md:pl-14 md:pr-14 bg-slate-200 md:mt-96 flex mt-56 flex-col">
            <h1>{seconds}</h1>
            <span className="text-sm">Sec</span>
          </div>
        </div>

        <div className="relative  sm:ml-auto sm:mr-auto sm:mt-0 mt-10 lg:mt-4 xl:mt-10  ml-auto mr-auto   md:m-auto md:mt-10  md:right-5  flex  md:justify-center justify-start items-center">
          <button className="bg-yellow-400 whitespace-nowrap md:px-7 p-6  sm:pt-10 md:py-4   justify-start  text-center font-semibold rounded-full">
            <span>SHOP NOW </span>
          </button>
        </div>
      </div>
      <div className="lg-w-[50%] lg:ml-10 w-auto bg-zinc-200">
        <div className="relative lg:w-[100%] md:mt-96 sm:mt-72 mt-72  lg:mt-0 bg-zinc-200 ">
          <img
            className="sm:pt-0 md:pt-0 w-[100] lg:w-auto lg:h-auto md:w-[700px] mt-10 mb-10  h-[500px]  md:h-auto"
            src={Logo3}
            alt="Banner"
          />
        </div>
        <div className="flex items-center justify-center  ">
          <h1 className="text-center text-lg font-semibold">$150</h1>
        </div>
        <p className="sm:text-2xl md:text-4xl lg:text-2xl mt-0 font-semibold text-center">
          ADDIDAS HOME SEASON FOR SPORTS FESTIVAL
        </p>
        <div className="flex flex-row mt-5 xl:mt-2 justify-center items-center">
          <RiShoppingBagLine className=" p-2 text-white text-4xl xl:mt-2 items-center  bg-yellow-300  rounded-full text-center" />
          <span className="pl-8 mt-0 font-semibold text-base">Add to bag</span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
