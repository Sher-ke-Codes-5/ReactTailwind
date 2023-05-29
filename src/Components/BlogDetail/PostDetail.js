import React from "react";
import { CiUser } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import { BsChat } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useLocation } from "react-router-dom";
import logo1 from "../../assets/Screenshot_27.png";
import logo3 from "../../assets/Screenshot_29.png";
import logo4 from "../../assets/Screenshot_30.png";
import { FaFacebookF, FaTwitter, FaBehanceSquare } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
const PostDetail = () => {
  const location = useLocation();
  const description = location.state.description;
  const title = location.state.title;
  return (
    <>
      <div className="flex md:mt-96 md:pb-10 flex-col md:flex-row sm:w-[23.2rem] lg:w-[100%] w-[100%] md:w-[100%] md:pl-0 md:pr-5  bg-slate-200">
        <div className="flex flex-col sm:w-auto bg-slate-200  md:w-[30rem] lg:w-[100%] md:pt-10 pt-0 ">
          <div className=" md:w-auto  md:ml-10">
            <img
              src={logo1}
              alt="pic 
     
            "
              className="sm:w-auto sm:h-auto w-auto h-auto md:w-[500px] md:h-[300px]"
            />
          </div>
          <div className="flex  flex-col md:flex-row w-full">
            <div className="flex flex-col md:w-1/3 w-full">
              <div className="  text-gray-600 flex flex-row pt-10 md:text-left text-right md:pl-12 pl-52">
                Food,Technology,
              </div>
              <div className="flex md:pl-12 pl-52  text-gray-300">
                Politics,Lifestyle
              </div>
              <ul className="flex flex-col">
                <li className="flex gap-2 md:items-center text-gray-700 md:pl-12 pl-52">
                  Mark wiens <CiUser />
                </li>

                <li className="flex gap-2 items-center  text-gray-700 md:pl-12 pl-52">
                  12 Dec,2018 <RxCalendar />
                </li>

                <li className="flex gap-2 items-center  text-gray-700 md:pl-12 pl-52">
                  1.2M views
                  <MdOutlineRemoveRedEye />
                </li>

                <li className="flex gap-2 items-center  text-gray-700 md:pl-12 pl-52">
                  06 Comments <BsChat />
                </li>
              </ul>
              <div className="flex flex-row mt-3 gap-5 ml-[12.8rem] text-gray-400 md:ml-12">
                <FaFacebookF />
                <FaTwitter />
                <AiOutlineGithub />
                <FaBehanceSquare />
              </div>
            </div>
            <div className="flex flex-col ">
              <h className="md:mt-10 md:ml-10 ml-3 mt-2 text-3xl font-sans font-semibold">
                {title}
              </h>
              <p className="mt-3 md:ml-10 ml-3 sm:w-auto sm:h-auto w-auto h-auto md:w-[18rem] text-gray-600">
                {description}
              </p>
              <p className="mt-3 md:ml-10 ml-3 sm:w-auto sm:h-auto w-auto h-auto md:w-[18rem] text-gray-600">
                Boot camps have its supporters and its detractors. Some people
                do not understand why you should have to spend money on boot
                camp when you can get the MCSE study materials yourself at a
                fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training. who has the
                willpower to actually sit through a self-imposed
              </p>
              <p className="mt-3 md:ml-10 ml-3 sm:w-auto sm:h-auto w-auto h-auto md:w-[18rem] text-gray-600">
                Boot camps have its supporters and its detractors. Some people
                do not understand why you should have to spend money on boot
                camp when you can get the MCSE study materials yourself at a
                fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training. who has the
                willpower to actually sit through a self-imposed
              </p>
            </div>
          </div>
          <p className="mt-3 ml-9 mr-9 sm:w-auto sm:h-auto w-auto h-auto md:w-[29rem]  text-gray-600 text-wrap text-wrap-normal">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower to actually sit
            through a self-imposed MCSE training.
          </p>
          <div className="flex md:flex-row mt-2 md:px-0 px-5 md:gap-10 gap-6 w-full">
            <img
              src={logo1}
              alt="images it"
              className="md:h-[200px] h-[150px] w-[160px] md:w-[220px]"
            />
            <img
              src={logo3}
              alt="images here"
              className="md:h-[200px]  h-[150px] w-[160px] md:w-[220px]"
            />
          </div>
          <p className="mt-3 md:ml-9 ml-5 sm:w-auto sm:h-auto w-auto h-auto md:w-[29rem] text-gray-600 text-wrap-normal">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower.
          </p>
          <p className="mt-3 md:ml-9 ml-5 sm:w-auto sm:h-auto w-auto h-auto md:w-[29rem] text-gray-600 text-wrap-normal">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower.
          </p>
          <div className="flex md:flex-row flex-col md:mt-10 mt-32   ">
            <div className="flex">
              <img src={logo4} alt="image4" className="md:ml-0 ml-5" />
              <div className="flex flex-col ">
                <h1 className="text-sm md:ml-12 ml-8"> Prev post</h1>
                <h1 className="text-xl font-semibold md:ml-8 ml-8 w-40">
                  Space The Final Frontier
                </h1>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col ">
                <h1 className="text-sm md:ml-10 md:pl-10 pl-48"> Next post</h1>
                <h1 className="md:text-xl text-lg font-semibold md:ml-5 md:w-40 w-72 md:pl-10 pl-36">
                  Telescope 101
                </h1>
              </div>
              <img src={logo4} alt="images" className="pl-2" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex md:w-[70%]  w-[90%] text-xl font-semibold justify-center items-center mt-10">
        <h1> 05 Comments </h1>
      </div>
    </>
  );
};

export default PostDetail;
