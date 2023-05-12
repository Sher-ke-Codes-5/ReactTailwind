import React from "react";
import { Link } from "react-router-dom";
const data = [
  {
    id: 1,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 2,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 3,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 4,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 5,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 6,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 7,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 8,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 9,
    val: "Fruit and Vegetable (25)",
  },
  {
    id: 10,
    val: "Fruit and Vegetable (25)",
  },
];
const Lists = ({ val }) => {
  return (
    <div className="flex flex-col  shadow-lg md:pl-0 pl-7 bg-white shadow-gray-200 border-gray-200 md:justify-center md:items-center w-[90%] md:w-full md:ml-24 ml-5 ">
      <ul className=" py-2 pb-10 gap-4 mt-5 flex ">
        <Link>
        <li className='text-base  hover:text-yellow-400  text-black'>{val}</li>
        </Link>
      </ul>
    </div>
  );
};

function DummyListFun() {
  return (
    <div className='mt-96 md:w-auto w-[90%]'>
    <h1 className='text-xl w-[90%] ml-5 md:mb-10 md:ml-24 md:pl-10 pl-5 py-4  text-white bg-slate-900 md:w-full '> Browse Categories</h1>
      {data.map((item) => {
        return <Lists 
            key={item.id}
            val={item.val}
        />;
      })}
    </div>
  );
}
export default DummyListFun;