import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import { BsChat } from "react-icons/bs";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useParams, useLocation } from "react-router-dom";
import logo1 from "../../assets/Screenshot_27.png";
import logo2 from "../../assets/Screenshot_28.png";
import logo3 from "../../assets/Screenshot_29.png";
import logo4 from "../../assets/Screenshot_30.png";
import {
  FaLongArrowAltRight,
  FaFacebookF,
  FaTwitter,
  FaBehanceSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
const  PostDetail = () => {
  const id = useParams();
  const location = useLocation();
  const description = location.state.description;
  const title = location.state.title;
  return (
    <>
      <div className="flex md:mt-96 md:pb-10 flex-col md:flex-row w-[23.2rem] md:w-[100%] md:pl-20 md:pr-5  bg-slate-100">
        <div className="flex flex-col md:pr-10 md:pt-10 pt-0 ">
          <div className="md:items-center md:w-auto  md:ml-10">
            <img src={logo1} alt="pic" />
          </div>
          <div className="flex  flex-col md:flex-row w-full">
            <div className="flex flex-col md:w-1/3 w-full">
              <div className="  text-gray-600 flex flex-row pt-10 md:text-left text-right md:pl-12 pl-52">
                <Link to="#">Food,Technology,</Link>
              </div>
              <div className="flex md:pl-12 pl-52  text-gray-600">
                <Link to="#">Politics,Lifestyle</Link>
              </div>
              <ul className="flex flex-col">
                <Link to="#">
                  <li className="flex gap-2 md:items-center text-gray-700 md:pl-12 pl-52">
                    Mark wiens <CiUser />
                  </li>
                </Link>
                <Link to="#">
                  <li className="flex gap-2 items-center  text-gray-700 md:pl-12 pl-52">
                    12 Dec,2018 <RxCalendar />
                  </li>
                </Link>
                <Link to="#">
                  <li className="flex gap-2 items-center  text-gray-700 md:pl-12 pl-52">
                    1.2M views
                    <MdOutlineRemoveRedEye />
                  </li>
                </Link>
                <Link to="#">
                  <li className="flex gap-2 items-center  text-gray-700 md:pl-12 pl-52">
                    06 Comments <BsChat />{" "}
                  </li>
                </Link>
              </ul>
              <div className="flex flex-row mt-3 gap-5 ml-[12.8rem] text-gray-400 md:ml-12">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <AiOutlineGithub />
                </a>
                <a href="#">
                  <FaBehanceSquare />
                </a>
              </div>
            </div>
            <div className="flex flex-col ">
              <h className="md:mt-10 md:ml-10 ml-3 mt-2 text-3xl font-sans font-semibold">
                {title}
              </h>
              <p className="mt-3 md:ml-10 ml-3 text-gray-600">{description}</p>
              <p className="mt-3 md:ml-10 ml-3 text-gray-600">
                Boot camps have its supporters and its detractors. Some people
                do not understand why you should have to spend money on boot
                camp when you can get the MCSE study materials yourself at a
                fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training. who has the
                willpower to actually sit through a self-imposed
              </p>
              <p className="mt-3 md:ml-10 ml-3 text-gray-600">
                Boot camps have its supporters and its detractors. Some people
                do not understand why you should have to spend money on boot
                camp when you can get the MCSE study materials yourself at a
                fraction of the camp price. However, who has the willpower to
                actually sit through a self-imposed MCSE training. who has the
                willpower to actually sit through a self-imposed
              </p>
            </div>
          </div>
          <p className="mt-3 ml-9 mr-9 text-gray-600 text-wrap text-wrap-normal">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower to actually sit
            through a self-imposed MCSE training.
          </p>
          <div className="flex md:flex-row  md:px-0 px-5 md:gap-10 gap-6 w-full">
            <img
              src={logo1}
              className="md:h-[300px] h-[150px] w-[160px] md:w-[400px]"
            />
            <img
              src={logo3}
              className="md:h-[300px]  h-[150px] w-[160px] md:w-[400px]"
            />
          </div>
          <p className="mt-3 md:ml-9 ml-5 text-gray-600 text-wrap-normal">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower.
          </p>
          <p className="mt-3 ml-5  text-gray-600">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower.
          </p>
          <div className="flex md:flex-row flex-col md:mt-10 mt-32 gap-36  ">
            <div className="flex">
              <img src={logo4} className="md:ml-0 ml-5" />
              <div className="flex flex-col ">
                <h1 className="text-sm md:ml-12 ml-8"> Prev post</h1>
                <h1 className="text-xl font-semibold md:ml-12 ml-8 w-60">
                  {" "}
                  Space The Final Frontier
                </h1>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col ">
                <h1 className="text-sm md:ml-10 md:pl-20 pl-48"> Next post</h1>
                <h1 className="md:text-xl text-lg font-semibold md:ml-10 md:w-60 w-72 md:pl-20 pl-36">
                  {" "}
                  Telescope 101
                </h1>
              </div>
              <img src={logo4} className="pl-2" />
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
