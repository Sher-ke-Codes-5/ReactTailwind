import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    Name: "",
    email: "",
    address: "",
    Passage: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.val;
    setUser(() => ({
      ...user,
      [name]: val,
    }));
  };
  return (
    <>
      <div className="flex flex-row md:w-auto w-[22.5rem] md:mt-0  md:mb-10 mb-[22rem]  ">
        <form className="space-y-4 ">
          <div className="flex md:flex-row md:w-auto w-[22rem] flex-col h-[4rem] ">
            <div className="flex flex-col  pt-10 pb-10 gap-5 md:px-10 px-8 w-[22.5rem] md:w-full">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="Name"
                id="Name"
                onChange={handleInputChange}
                value={user.Name}
                autoComplete="off"
                className="w-auto text-sm border focus:outline-none text-gray-600 flex md:px-[7rem] px-[5rem] py-2 bg-white"
              />
              <input
                type="text"
                placeholder="Enter Your Email"
                name="email"
                id="email"
                onChange={handleInputChange}
                value={user.email}
                autoComplete="off"
                className="w-auto text-sm flex md:px-[7rem] px-[5rem] border focus:outline-none py-2 bg-white"
              />
              <input
                type="text"
                placeholder="Enter Your Address"
                name="address"
                id="address"
                onChange={handleInputChange}
                value={user.address}
                autoComplete="off"
                className="w-auto text-sm flex md:px-[7rem] px-[5rem] border focus:outline-none py-2 bg-white"
              />
            </div>
            <div className="flex flex-col mb-10 md:pl-3 pl-8 pr-8 gap-2 pt-10">
              <input
                type="text"
                placeholder="Enter Your Passage"
                name="Passage"
                id="Passage"
                onChange={handleInputChange}
                value={user.Passage}
                autoComplete="off"
                className="md:w-[21.5rem] h-[10rem] text-gray-500 pb-28 text-sm flex  border pl-2 focus:outline-none  bg-white"
              />
              <div className='flex  mb-10 justify-center'>
              
                <button className="bg-yellow-400 w-40 text-white h-12 px-7 ml-[11.2rem]">
                <span class="items-center">Send Message</span>

                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
