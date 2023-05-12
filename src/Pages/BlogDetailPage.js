import React from "react";
import Navbar from "../Components/Navbar/Index";
import HeroBlog from "./../Components/Blog/Hero";
import Footer from "../Components/Footer/index";
import Form from "../Components/Blog/Form";
import Combine from "../Components/BlogDetail/Combine";
const BlogDetailPage = () => {
  return (
    <div className="flex flex-col h-screen w-[23.1rem] md:w-full ">
      <Navbar />
      <HeroBlog />
      <div className="flex md:flex-row  flex-col  ">
        <Combine />
        <div className="flex md:mt-96  h-full md:w-96 md:ml-10 ml-5 w-[96%]">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
