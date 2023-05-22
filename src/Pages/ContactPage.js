import React from "react";
import Navbar from "../Components/Navbar/Index";
import HeroBlog from "../Components/Blog/Hero";
import Footer from "../Components/Footer";
import Map from "../Components/Contact/Map";
import Combine from "../Components/Contact/Combine";
const ContactPage = () => {
  return (
    <div className="flex flex-col  h-full w-[100%] md:w-full ">
      <Navbar />
      <HeroBlog />
      <div className="flex flex-col  md:w-auto w-[23rem] mt-[22rem]">
        <Map />
      </div>
      <Combine />
      <Footer />
    </div>
  );
};

export default ContactPage;
