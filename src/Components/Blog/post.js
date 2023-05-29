import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { RxCalendar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import logo3 from "../../assets/Screenshot_19.png";
import logo from "../../assets/Screenshot_20.png";
import logo2 from "../../assets/Screenshot_21.png";
import logo4 from "../../assets/Screenshot_22.png";
import logo5 from "../../assets/Screenshot_23.png";
import { BsChat } from "react-icons/bs";
const data = [
  {
    id: 1,
    title: "Astronomy Binoculars A Great Initiative",
    description:
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    image: logo3,
    buttonText: "VIEW MORE",
  },
  {
    id: 2,
    title: "The Basic of Buying of telescope",
    description:
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    image: logo,
    buttonText: "VIEW MORE",
  },
  {
    id: 3,
    title: "The Glossary of Teslescope",
    description:
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    image: logo2,
    buttonText: "VIEW MORE",
  },
  {
    id: 4,
    title: "The Night Sky",
    description:
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    image: logo4,
    buttonText: "VIEW MORE",
  },
  {
    id: 5,
    title: "Telescope 101",
    description:
      "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
    image: logo5,
    buttonText: "VIEW MORE",
  },
];
const Post = ({ id, title, description, image, buttonText }) => {
  const navigate = useNavigate();
  const handleViewMore = () => {
    console.log(id);
    navigate(`/blogDetail/${id}`, { state: { title, description } });
  };
  return (
    <div className="flex  flex-col md:flex-row sm:w-full md:w-auto md:pl-20 md:pr-5  bg-slate-100">
      <div className="flex flex-col md:w-1/4 sm:w-full">
        <div className="flex flex-row pt-10 md:text-left text-right md:pl-5 pl-52">
          <Link to="#">Food,Technology,</Link>
        </div>
        <div className="flex md:pl-5 pl-52 ">
          <Link to="#">Politics,Lifestyle</Link>
        </div>

        <ul>
          <Link to="#">
            <li className="flex gap-2 items-center text-gray-700 md:pl-5 pl-52">
              Mark wiens <CiUser />
            </li>
          </Link>
          <Link to="#">
            <li className="flex gap-2 items-center  text-gray-700 md:pl-5 pl-52">
              12 Dec,2018 <RxCalendar />
            </li>
          </Link>
          <Link to="#">
            <li className="flex gap-2 items-center  text-gray-700 md:pl-5 pl-52">
              1.2M views
              <MdOutlineRemoveRedEye />
            </li>
          </Link>
          <Link to="#">
            <li className="flex gap-2 items-center  text-gray-700 md:pl-5 pl-52">
              06 Comments <BsChat />{" "}
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex flex-col sm:w-auto md:w-[90%] md:pr-10 pt-10 ">
        <div className="md:items-center md:ml-10">
          <img
            src={image}
            alt="pic
          
          "
            className="sm:h-auto sm:w-auto md:w-auto md:h-auto w-auto h-auto lg:w-[400px]"
          />
        </div>

        <h1 className="md:text-xl text-2xl md:ml-10 font-semibold">{title}</h1>
        <p className="md:pl-10 md:pr-0 text-sm pl-5 pr-8 text-gray-700 sm:w-auto md:w-96">
          {description}
        </p>
        <button
          className=" text-sm mt-5 md:mr-[500px] mr-[200px]  md:ml-10  py-2  w-32 border border-gray-500"
          onClick={handleViewMore}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

function Dummy() {
  return (
    <div className="sm:w-auto md:w-[65%]">
      {data.map((item) => {
        return (
          <Post
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            buttonText={item.buttonText}
          />
        );
      })}
    </div>
  );
}

export default Dummy;
