import React from "react";
import Logo1 from "../../assets/real.png";
const Signup = () => {
  return (
    <div className="flex lg:flex-row w-full h-full  sm:flex-col justify-center items-center flex-col bg-gray-400 ">
      <div className="flex lg:w-[90%] flex-col lg:flex-row my-0 lg:my-20  justify-center items-center w-full   bg-slate-100 radius rounded-lg">
        <div className="flex flex-col lg:w-1/2 pb-60 lg:pb-20 rounded-l-lg w-full bg-gray-300 ">
          <div className="flex flex-row lg:w-full sm:w-auto  bg-white lg:rounded-tl-lg">
            <img alt="pic" src={Logo1} className="h-[30px]" />
            <span className="lg:text-base lg:mt-0 mt-1 text-sm">Sherjan platform</span>
          </div>
          <div className="flex flex-col px-[20px] lg:px-[60px]  ">
            <div className=" lg:mt-16 mt-10 flex flex-col  ">
              <h1 className="text-black  font-semibold sm:text-lg  text-lg xl:text-xl">
                Create account
              </h1>
              <span className=" lg:pl-0 xl:pl-0 mt-3 text-sm">
                Get All Access to the features by creating account
              </span>
            </div>
            <div className=" lg:mt-8 lg:gap-0 gap-1 mt-4 flex flex-col h-[395px]">
              <div className="w-full flex mt-4 lg:gap-0 gap-1 flex-col lg:flex-row">
                <div className="lg:w-[30%] w-auto">
                  <span className="text-black text-sm font-semibold text-center">
                    Name
                  </span>
                </div>
                <div className="lg:w-[60%] w-auto">
                  <input
                    id="name"
                    name="name"
                    placeholder="name"
                    autoComplete="off"
                    className=" py-1 px-2 md:w-[280px] sm:w-full w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full lg:gap-0 gap-1 mt-4 flex flex-col lg:flex-row">
                <div className="w-[30%]">
                  <span className="text-black text-sm font-semibold text-center">
                    Password
                  </span>
                </div>
                <div className="lg:w-[60%] w-auto">
                  <input
                    id="name"
                    name="name"
                    placeholder="name"
                    autoComplete="off"
                    className=" py-1 px-2 md:w-[280px] sm:w-full w-full  rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full mt-4 lg:gap-0 gap-1 flex flex-col lg:flex-row">
                <div className="lg:w-[30%] w-auto">
                  <span className="text-black text-sm font-semibold text-center">
                    Email
                  </span>
                </div>
                <div className="lg:w-[60%] w-auto">
                  <input
                    id="name"
                    name="name"
                    placeholder="name"
                    autoComplete="off"
                    className=" rounded-lg px-2 sm:w-full w-full md:w-[280px] py-1"
                  />
                </div>
              </div>
              <div className="w-full lg:gap-0 gap-1 flex mt-4 flex-col lg:flex-row">
                <div className="lg:w-[30%] w-auto">
                  <span className="text-black text-sm font-semibold text-center">
                    RepeatPassword
                  </span>
                </div>
                <div className="lg:w-[60%] w-auto">
                  <input
                    id="name"
                    name="name"
                    placeholder="name"
                    autoComplete="off"
                    className="py-1 px-2 rounded-lg sm:w-full w-full md:w-[280px]"
                  />
                </div>
              </div>
              <div className="flex  flex-col lg:w-auto  mt-10 ">
                <div className="flex flex-row w-auto  lg:w-full">
                  <div className="w-[5%] ">
                    <input type="checkbox" />
                  </div>
                  <div className="lg:w-[90%] w-auto">
                    <span>I have read and accept the terms and conditions</span>
                  </div>
                </div>
                <div className="flex mt-3 flex-row w-full">
                  <div className="w-[5%] ">
                    <input type="checkbox" />
                  </div>
                  <div className=" lg:w-[90%]  w-auto">
                    <span>Subscribe to latest conditions to stay upto date </span>
                  </div>
                </div>
                
                <div className="flex lg:ml-auto mt-6 sm:px-24 text-white px-24 lg:w-auto text-center sm:w-full w-full   lg:px-4 py-1  rounded-lg bg-blue-700"  >
                  <button >
                      Create my Account
                  </button>
                </div>
                <div className="flex mt-6 justify-center items-center">
                  Already Have Account ? <span className="text-blue-700 pl-2" >Sign in </span>
                </div>
               
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-center items-center lg:w-1/2 h-[660px] rounded-r-lg sm:hidden   w-full bg-blue-900 ">
        <div className="flex flex-col " >
            <div className='flex justify-center items-center '>
              <img
                  alt='pic'
                className="h-[350px]"
                  src={Logo1}
              />
               
            </div>
            
            <span className="ml-20 text-xl text-white">
                  Meet The Exchange Hub 
                </span>
                <span className="lg:text-sm text-base lg:mx-0 mx-10 text-white ">
                  Sherjan cloud visual integration builder set you integrate in
                  real time 
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
