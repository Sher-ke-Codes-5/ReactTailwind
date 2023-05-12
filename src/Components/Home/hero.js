import React from "react";
import Logo from "../../assets/shoes-removebg-preview.png";
import Logo2 from "../../assets/11-removebg-preview.png";
import { screen } from "@testing-library/react";

const Hero = () => {
  return (
    <div
      className="flex flex-col  md:flex-row absolute inset-0  bg-center bg-cover"
      style={{
        backgroundImage: `url(${Logo2})`,
        zIndex: "-1",
        backgroundSize: "cover",
      }}
    >
      <div className=" relative w-full md:w-1/2 p-4">
        <p className="text-4xl md:text-5xl pl-4 md:pl-12 mt-32 font-bold  md:mt-40">
          Nike NEW COLLECTION !
        </p>
        <p className="text-gray-500 pl-4 md:pl-12 mt-12 md:mt-[12%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          eleifend dui ex, sed gravida purus lobortis ac. Nulla facilisi. Sed at
          odio in massa fermentum euismod. Aliquam cursus nisi vel suscipit
          malesuada.
        </p>
      </div>
      <div className="mx-auto w-11/12 md:w-1/2">
        <img
          className="object-cover w-full h-56 md:h-auto"
          src={Logo}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Hero;
