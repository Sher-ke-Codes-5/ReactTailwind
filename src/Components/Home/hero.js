import React from "react";
import Logo from "../../assets/shoes-removebg-preview.png";
import Logo2 from "../../assets/11-removebg-preview.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col   lg:flex-row absolute inset-0 bg-center bg-cover"
      style={{
        backgroundImage: `url(${Logo2})`,
        zIndex: "-1",
        //backgroundSize: "cover",
      }}
    >
      <div className=" relative w-full lg:w-1/2 p-4">
        <p className="sm:text-5xl text-4xl sm:pt-10 md:pt-10 pt-10 md:text-7xl lg:text-5xl pl-4 lg:pl-12 mt-32 font-bold  lg:mt-40">
          Nike NEW COLLECTION !
        </p>
        <p className="text-gray-500 sm:text-base md:text-xl pl-4 lg:pl-12 mt-12 lg:mt-[12%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          eleifend dui ex, sed gravida purus lobortis ac. Nulla facilisi. Sed at
          odio in massa fermentum euismod. Aliquam cursus nisi vel suscipit
          malesuada.
        </p>
      </div>
      <div className="mx-auto sm:hidden hidden md:hidden lg:w-1/2">
        <img
          className="object-cover w-full h-56 md:h-auto sm:h-56 lg:h-auto"
          src={Logo}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Hero;
