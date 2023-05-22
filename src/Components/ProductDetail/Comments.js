import React from "react";
import Logo from "../../assets/Screenshot_32.png";
import Forms from "./Forms";
const data = [
  {
    id: 1,
    Logo: Logo,
    title: "Black Ruiz",
    Date: "12th Feb,2018 at 05:56pm",
    val: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod",
  },

  {
    id: 2,
    title: "Black Ruiz",
    Logo: Logo,
    Date: "12th Feb,2018 at 05:56pm",
    val: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod",
  },
  {
    id: 3,
    title: "Black Ruiz",
    Logo: Logo,
    Date: "12th Feb,2018 at 05:56pm",
    val: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod",
  },
];
const Comments = ({ data }) => {
  return (
    <>
      <div className="flex md:flex-row  flex-row md:w-[50%]   mt-1  md:pl-5">
        <img src={data.Logo} 
            alt="data"
            className='rounded-full'

        />
        <div className="flex flex-col pl-3">
          <h1 className="md:w-[17rem] w-[12rem] ">{data.title}</h1>
          <h2>{data.Date}</h2>
        </div>
        <div>
        <button className='md:w-32 w-[4rem] px-2 py-2 text-base border border-gray-300 bg-white text-black rounded-full'>
            Reply
        </button>
        </div>
      </div>
      <div className='flex md:w-[40rem] w-[20rem] '>
      <p className='text-base'>{data.val}</p>
      </div>
    </>
  );
};

const CommentsDummy = () => {
  return (
    <div className='flex md:flex-row flex-col'>
    <div className="flex flex-col  gap-y-10">
      {data.map((data) => (
        <div key={data.id}>
          <Comments data={data} key={data.id} title={data.title} val={data.val} />
        </div>
      ))}
    </div>
    <div className='flex flex-col md:w-auto w-[20rem]'>

  
    <h1 className='text-2xl   font-semibold'>Post a Comment</h1>
    <Forms/>
    <button className='mt-10 text-white font-semibold text-lg md:ml-40 ml-32 bg-yellow-400 border px-2 py-2 w-48 '>Submit it</button>
    </div>
    </div>
  );
};

export default CommentsDummy;
