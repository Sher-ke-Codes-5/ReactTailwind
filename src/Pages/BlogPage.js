import React from "react";
import HeroBlog from "./../Components/Blog/Hero";
import Navbar from "../Components/Navbar/Index";
import Logos from "../Components/Blog/Logos";
import BlogWrite from "../Components/Blog/blogWrite";
import Footer from "./../Components/Footer/index";
const BlogPage = () => {
  return (
    <div className="flex flex-col h-full w-full ">
      <Navbar />
      <HeroBlog />
      <Logos />
      <BlogWrite />
      <Footer />
    </div>
  );
};

export default BlogPage;
