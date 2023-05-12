import React from "react";
const FooterBar = () => {
  return (
    <div className="flex flex-col mt-10 md:ml-48 mr-16 h-[4rem] pt-2  bg-slate-500 ">
      <div className="  flex flex-row ">
        <div className="w-full pl-7">
          <select className=" ml-7 mb-32 px-10 py-3 focus:bg-gray-300  text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none">
            <option className=" focus:bg-gray-300 focus:hover:bg-yellow-200 appearance-none">
              Show 12
            </option>
            <option>Show 12</option>
            <option>Show 12</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default FooterBar;
