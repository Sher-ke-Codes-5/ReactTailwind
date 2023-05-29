import React, { useState } from "react";
import logo6 from "../../assets/Screenshot_24.png";
import { SlMagnifier } from "react-icons/sl";
import { MdEmail } from "react-icons/md";
import logo1 from "../../assets/Screenshot_26.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaBehanceSquare } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import Cards from "./Cards";
const Form = () => {
  const [user, setUser] = useState({
    search: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(() => ({
      ...user,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col   md:w-[30%] sm:h-auto md:h-[70%] w-[90%] lg:w-[100%] sm:w-[90%] bg-slate-200 ">
      <div className="  flex sm:justify-center sm:items-center text-white flex-row w-full ">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Search Post"
            name="search"
            onChange={handleInputChange}
            value={user.search}
            className="w-auto rounded-full md:ml-10 mt-10 text-white bg-yellow-300 flex md:px-10 py-2 px-12 focus:border-transparent focus:outline-none"
            id="search"
            autoComplete="off"
          />
        </form>
        <div className="absolute  lg:right-20 md:right-20 sm:right-7 pr-[3rem] pt-[40px] md:pr-3 text-white flex ">
          <SlMagnifier />
        </div>
      </div>
      {/* <div className="w-[18rem] ml-8 mb-2 mr-4 h-0.5 border border-b text-white md:mt-5 mt-7 border-gray-200"></div> */}

      <div className="flex flex-col md:w-auto w-[90%] justify-center items-center rounded-full">
        <img src={logo6} alt="pic" className="rounded-full mt-10" />
        <h1 className="md:text-xl w-32 text-black flex  bg-slate-100 mt-8">
          Charlie Barber
        </h1>
        <p className="md:text-sm w-32 text-black flex  bg-slate-100 mt-2">
          Senior Blog Writer{" "}
        </p>
        <div className="flex flex-row mt-3 gap-6">
          <FaFacebookF />
          <FaTwitter />
          <AiOutlineGithub />
          <FaBehanceSquare />
        </div>

        <p className="mt-10 w-72  bg-slate-100  box-border">
          Boot camps have its supporters andit sdetractors. Some people do not
          understand why you should have to spend money on boot camp when you
          can get. Boot camps have its supporters andits detractors.
        </p>
        <div className="w-[18rem]   h-0.5 text-white mt-10 border-b border-gray-400"></div>
        <h1 className="md:text-2xl md:w-60 sm:w-72 ml-10 pl-12 text-white flex bg-yellow-300 mt-8">
          Popular Posts
        </h1>
        <Cards />

        {/* <div className="w-[18rem]   h-0.5 border border-b text-white mt-14   border-gray-400"></div> */}
        <div className="md:mt-10 mt-16  w-72 sm:w-72 md:60 ml-10   ">
          <img src={logo1} alt='pic' className="h-[250px] w-[250px] ml-5" />
        </div>

        <h1 className="md:text-2xl md:w-60 w-72 sm:w-72 ml-10 pl-12 text-white flex bg-yellow-400 mt-8">
          Posts Categories
        </h1>
        <ul>
          <Link to="#">
            <li className="flex gap-[8.5rem] mt-5 bg-slate-100 md:w-60 sm:w-72 ml-14 items-center  text-gray-700  ">
              <p>Technology</p>
              <p>37</p>
            </li>
          </Link>
          <Link to="#">
            <li className="flex gap-[12.2rem] mt-5 bg-slate-100 md:w-60 w-72 sm:w-72 ml-14 items-center  text-gray-700  ">
              Art <p>29</p>
            </li>
          </Link>
          <Link to="#">
            <li className="flex gap-[10rem] mt-5 bg-slate-100 md:w-60 w-72 sm:w-72 ml-14 items-center  text-gray-700  ">
              Lifestyle <p>34</p>
            </li>
          </Link>
          <Link to="#">
            <li className="flex gap-[10rem] mt-5 bg-slate-100 md:w-60 w-72 sm:w-72 ml-14 items-center  text-gray-700  ">
              Fashion <p>44</p>
            </li>
          </Link>
        </ul>

        <h1 className="md:text-2xl md:w-60 w-72 sm:w-72 ml-10 pl-20 text-white flex bg-yellow-400 mt-8">
          New Letter
        </h1>
        <p className="w-72 ml-4 md:mt-1 mt-4 text-center">
          Here, I focus on a range of items and features that we use in life
          without giving them a second thought.
        </p>
        <div class="md:ml-10 ml-10 mt-6 h-10 flex flex-row">
          <MdEmail className="  xl:right-[19rem] md:right-[15rem] right-[20rem] mt-3  absolute" />
          <form className="space-y-4 ">
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              onChange={handleInputChange}
              value={user.email}
              className="w-[12.5rem] flex md:py-2 md:px-11 py-2 px-5 text-left focus:border-transparent focus:outline-none"
              id="email"
              autoComplete="off"
            />
          </form>
          <button className="bg-yellow-400 text-white pr-2 pl-2  ">
            Subscribe
          </button>
        </div>
        <p className="w-44 md:mt-0 mt-3 text-sm text-center text-gray-500">
          You can Subscribe any time
        </p>

        <h1 className="md:text-2xl md:w-60 w-72 sm:w-72 ml-10 pl-20 text-white flex bg-yellow-400 mt-8">
          Tag Clouds
        </h1>
        <div>
          <ul>
            <Link to="#">
              <li className="flex gap-[1rem] mt-5 w-72 ml-5 items-center  text-gray-700  ">
                <p className="bg-slate-100 px-1">Technology</p>{" "}
                <p className="bg-slate-100 px-1">Fashion</p>{" "}
                <p className="bg-slate-100 px-1">Architecture</p>
              </li>
            </Link>
            <Link to="#">
              <li className="flex gap-[2rem] mt-5 ml-5 w-72 items-center  text-gray-700  ">
                <p className="bg-slate-100 px-2">Art</p>{" "}
                <p className="bg-slate-100 px-2">Food</p>
                <p className="bg-slate-100 px-2">Architecture</p>
              </li>
            </Link>
            <Link to="#">
              <li className="flex gap-[1rem] mt-5  md:w-60 w-72 sm:w-72 ml-5 items-center  text-gray-700  ">
                <p className="bg-slate-100 px-1">Lifestyle</p>{" "}
                <p className="bg-slate-100 px-1">Food</p>{" "}
                <p className="bg-slate-100 px-1">Adventure</p>{" "}
                <p className="bg-slate-100">Food</p>
              </li>
            </Link>
            <Link to="#">
              <li className="flex gap-[2rem] mt-5 w-72 ml-5 items-center  text-gray-700  ">
                <p className="px-2 bg-slate-100">Food</p>{" "}
                <p className="bg-slate-100 px-2">Adventure</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
    //  </div>
  );
};

export default Form;
