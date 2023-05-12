import React from "react";
import ProductScreen from "../Home/productScreen";
const Cards = () => {
  return (
    <div className="flex flex-col  md:w-[80%] w-full md:ml-40  md:mt-96">
      <div className="flex flex-col md:mt-0 mt-10  h-[4rem] pt-2  bg-slate-500 ">
        <div className="  flex md:flex-row flex-col ">
          <div className="md:w-full w-[32] ml-7 ">
            <select className=" mb-32 px-5 md:px-10 py-3 hover:text-gray-700 font-semibold text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
              <option className="text-sm  focus:bg-yellow-500 appearance-none">
                Default Setting
              </option>
              <option className="text-sm focus:bg-gray-500 appearance-none">
                Default Setting
              </option>
              <option className="text-sm focus:bg-gray-500 appearance-none">
                Default Setting
              </option>
            </select>
            <select className=" ml-7 mb-32 px-4 md:px-10 py-3 focus:bg-gray-300  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
              <option className=" focus:bg-gray-500 focus:hover:bg-yellow-200 appearance-none">
                Show 12
              </option>
              <option>Show 12</option>
              <option>Show 12</option>
            </select>
          </div>
        </div>
      </div>
      <div className=" md:mt-0 mt-20 flex-col">
        <ProductScreen />
      </div>
    </div>
  );
};

export default Cards;
