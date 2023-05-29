import React from "react";

const Reply = () => {
  return (
    <div className="flex mb-10 w-[87%] md:w-[50rem] border ml-5 mr-5 md:mr-5 md:ml-20 flex-col mt-10 bg-slate-200">
      <h1 className="text-xl font-semibold ml-24 md:ml-[20rem] w-[50%] md:w-[60%] text-gray-800">
        {" "}
        Leave a Reply{" "}
      </h1>
      <form className="space y-4 mt-10 ml-5 md:mr-0 mr-5 md:ml-5">
        <div className="flex md:flex-row flex-col md:w-1/2 md:gap-28 ">
          <input
            type="text"
            placeholder="enter Your name"
            name="name"
            // onChange={handleInputChange}
            // value={user.Name}
            id="name"
            autoComplete="off"
            className="w-auto ml-4 text-sm bg-white flex md:px-[4.5rem] text-white py-2 focus:border-transparent focus:outline-none"
          />
          <input
            type="text"
            placeholder="enter Your Email"
            name="name"
            // onChange={handleInputChange}
            // value={user.Name}
            id="name"
            autoComplete="off"
            className="w-auto ml-4 md:mt-0 mt-4 text-sm bg-white flex md:px-[4.5rem]  text-white py-2 focus:border-transparent focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="enter Your Subject"
          name="name"
          // onChange={handleInputChange}
          // value={user.Name}
          id="name"
          autoComplete="off"
          className="w-[89%] ml-4 md:mt-5 mt-4 bg-white flex md:px-10 text-sm text-white py-2 focus:border-transparent focus:outline-none"
        />
        <input
          type="text"
          placeholder="Message"
          name="name"
          // onChange={handleInputChange}
          // value={user.Name}
          id="name"
          autoComplete="off"
          className="w-[89%] ml-4  h-40 md:pt-5 pt-5 md:h-32 pb-40 pl-[1rem] pr-[1rem] mt-5 bg-white flex text-sm text-white  focus:border-transparent focus:outline-none"
        />

        <button className="md:ml-[17rem]  ml-[4rem] text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full font-bold text-md border h-[50px] w-44  md:px-4 hover:bg-red-600 mt-20 mb-4 ">
          Post a Comment
        </button>
      </form>
    </div>
  );
};

export default Reply;
