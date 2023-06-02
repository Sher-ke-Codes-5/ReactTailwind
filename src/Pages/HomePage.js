import React from "react";
// import Navbar from "../Components/Navbar/Index";
import Navbar from "../Components/Navbar/Index";
import Hero from "../Components/Home/hero";
import Logos from "../Components/Home/logos";
import Poster from "../Components/Home/Poster";
import ProductScreen from "./../Components/Home/productScreen";
import Clock from "../Components/Home/add";
import CompLogos from "../Components/Home/Company";
import Models from "../Components/Home/Models";
import Footer from "../Components/Footer";
const HomePage = () => {
  return (
    <div className="flex  flex-col h-screen w-[100%] lg:w-full relative">
      <Navbar />
      <Hero />
      <Logos />
      <Poster />
      <ProductScreen />

      <Clock />
      <CompLogos />
      <Models />
      <Footer />
    </div>
  );
};

export default HomePage;
