import React from "react";
import Logo2 from "../../assets/11-removebg-preview.png";
import { useLocation } from "react-router-dom";

const HeroBlog = () => {
  const location = useLocation();
  let routeName = location.pathname.substring(1).replace("Page", " Page");
  const parameterRegex = /\/\d+/g;
  routeName = location.pathname.substring(1).replace(parameterRegex, "");
  // routeName = 'Cart Page';
  console.log("ooooooo",routeName);

  if (routeName==='CartPage/id')
  {
    console.log("if called")
    routeName='Cart Page'
  }
console.log(routeName);
  return (
    <div
      className="flex flex-col   h-96 md:w-auto w-[23.2rem] md:flex-row absolute inset-0 bg-orange-500 md:bg-transparent md:bg-center md:bg-cover"
      style={{
        backgroundImage: `url(${Logo2})`,
        zIndex: "-1",
        backgroundSize: "cover",
      }}
    >
      <div className="mt-52 pl-5 md:pl-[650px] md:ml-96  justify-center items-center w-11/12 md:w-full bg-full">
        <h1 className="text-4xl font-semibold text-center  md:text-white text-white flex ">
          {routeName}
        </h1>
      </div>
    </div>
  );
};

export default HeroBlog;
