import React from "react";
import Logo from "../../assets/Screenshot_32.png";
import Forms from "./Forms";
import { FaStar } from "react-icons/fa";
const data = [
  {
    id: 1,
    Logo: Logo,
    title: "Black Ruiz",
    Date: <FaStar />,
    val: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod",
  },

  {
    id: 2,
    title: "Black Ruiz",
    Logo: Logo,
    Date: <FaStar />,
    val: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod",
  },
  {
    id: 3,
    title: "Black Ruiz",
    Logo: Logo,
    Date: <FaStar />,
    val: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod",
  },
];
const Comments = ({ data }) => {
  return (
    <>
      <div className="flex w-[50%]   flex-row mt-1  pl-5">
        <img src={data.Logo} alt="data" className="rounded-full" />
        <div className="flex flex-col pl-3">
          <h1 className="md:w-[17rem] ">{data.title}</h1>
          <h2 className="flex text-yellow-300">
            {data.Date}
            {data.Date}
            {data.Date}
            {data.Date}
            {data.Date}
          </h2>
        </div>
        <div>
          <button className="w-32 md:ml-0 ml-5 px-2 py-2 text-base border border-gray-300 bg-white text-black rounded-full">
            Reply
          </button>
        </div>
      </div>
      <div className="flex md:w-[40rem] ">
        <p className="text-base">{data.val}</p>
      </div>
    </>
  );
};

const RevDummy = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex  flex-row'>
      <div className="flex flex-col md:w-60 w-40 bg-slate-200 pl-5 md:pl-20">
        
        <h1 className="text-3xl">Overall</h1>
        <h1 className="md:text-5xl text-4xl text-orange-500 font-bold ">4.0</h1>
        <h1 className="md:text-xl text-lg">(03 Reviews)</h1>
        </div>
        <div className='flex md:w-auto w-[10rem] flex-col md:pl-10 pl-5 md:pt-4'>
        <h1 className="font-semibold text-xl ">Based on 3 Reviews</h1>
        <div className='flex flex-row'>
         <h1 className="md:text-base ">5 star</h1>
         <p className="flex pl-2 pt-1 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <h1 className='pl-2'>01</h1>
         </div>
         </div>
      </div>
      <div className='flex flex-col md:flex-row'>
      <div className="flex flex-col mt-10   gap-y-10">
        {data.map((data) => (
          <div key={data.id}>
            <Comments
              data={data}
              key={data.id}
              title={data.title}
              val={data.val}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col ">
        <h1 className="text-2xl font-semibold">Post a Comment</h1>
        <div className="flex flex-row w-60 gap-2">
          <p className="text-lg  text-gray-400  flex">Your Rating </p>
          <p className="flex pl-10 pt-2 text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
      
        </div>
        <div className='flex flex-col md:w-auto w-[20rem]'>

        <Forms />
        <button className="mt-10  text-white font-semibold text-lg md:ml-40 ml-32 bg-yellow-400 border px-2 py-2 w-48  ">
          Submit it
        </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RevDummy;
