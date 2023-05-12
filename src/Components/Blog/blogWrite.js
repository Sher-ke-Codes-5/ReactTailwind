import React, { useState } from "react";
import Dummy from './post'
import Form from './Form'
const BlogWrite = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleInput = (value) => {
      setSearchInput(value);
    };
  return (
    <div className="flex md:flex-row flex-col gap-10  h-full w-full ">
    <Dummy/>
    <Form/>
   
    </div>
  )
}

export default BlogWrite;