import React from "react";
import Navbar from "../Components/Navbar/Index";
import HeroBlog from "./../Components/Blog/Hero";
import Footer from "../Components/Footer/index";
import Form from "../Components/Blog/Form";
import Combine from "../Components/BlogDetail/Combine";
const BlogDetailPage = () => {
  return (
    <div className="flex flex-col h-full sm:w-full lg:w-full md:w-full ">
      <Navbar />
      <HeroBlog />
      <div className="flex md:flex-row gap-[10rem] md:w-[60%] w-auto flex-col  ">
        <div className="sm:w-auto md:w-[100%]">
        <Combine />
        </div>
        <div className='mt-96 flex flex-row '>
          <Form />
          </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
