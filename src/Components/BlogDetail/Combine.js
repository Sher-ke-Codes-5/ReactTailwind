import React from "react";
import PostDetail from "./PostDetail";
import Reply from "./Reply";
import DummyComment from "./Comment";
const Combine = () => {
  return (
    <div className="flex flex-col sm:w-full w-full  md:w-full">
      <PostDetail />
      <DummyComment />
      <Reply />
    </div>
  );
};

export default Combine;
