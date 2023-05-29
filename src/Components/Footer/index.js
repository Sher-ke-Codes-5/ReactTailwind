import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaBehanceSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import Logo from "../../assets/Screenshot_13.png";
import Logo2 from "../../assets/Screenshot_14.png";
const Footer = () => {
  const [user, setUser] = useState({
    email: "",
  });
  const images = [
    { id: 1, src: Logo2, alt: "Image 1" },
    { id: 2, src: Logo2, alt: "Image 2" },
    { id: 3, src: Logo2, alt: "Image 3" },
    { id: 4, src: Logo2, alt: "Image 4" },
    { id: 5, src: Logo, alt: "Image 5" },
    { id: 6, src: Logo, alt: "Image 5" },
    { id: 7, src: Logo, alt: "Image 5" },
    { id: 8, src: Logo, alt: "Image 5" },
  ];
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(() => ({
      ...user,
      [name]: value,
    }));
  };
  return (
    <div className="flex mt-10 bg-slate-950 flex-col">
      <div className="flex md:flex-row w-full  flex-col mt-10 pb-10 pl-10 bg-slate-950 md:pl-10 md:pr-10">
        <div className="flex md:w-1/4 w-full flex-col ">
          <h1 className="text-2xl   mt-10 text-white text-left  font-semibold">
            About Us
          </h1>
          <p className="text-base mt-5 text-left  text-white flex">
            <span className>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor adipisicing elit, sed do eiusmod tempor
            </span>
          </p>
        </div>
        <div className="flex md:w-1/3 w-full  flex-col md:text-left  ">
          <h1 className="text-2xl   mt-10 text-white md:ml-10  font-semibold">
            News Letter
          </h1>
          <p className="text-base mt-5 text-center md:ml-10  text-white flex">
            <span className>Stay update with our latest</span>
          </p>
          <div class="md:ml-10  mt-6 h-10 flex flex-row">
            <form className="space-y-4">
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                onChange={handleInput}
                value={user.email}
                className="w-auto flex md:py-2 md:px-12 py-2 px-5 text-left focus:border-transparent focus:outline-none"
                id="email"
                autoComplete="off"
              />
            </form>
          </div>
        </div>

        <div className="flex w-full md:ml-10 lg:w-1/4  flex-col">
          <h1 className="text-2xl mt-10 text-white md:ml-16 font-semibold">
            Instagram Feed
          </h1>
          <div className="flex flex-wrap   mt-5 md:ml-16 md:flex-row md:flex-wrap">
            {images.map((image) => (
              <div key={image.id} className="w-1/4 p-1  md:w-auto">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="md:h-[60px] md:w-[60px] md:object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl mt-10 text-white md:ml-12 font-semibold">
            Follow Us
          </h1>
          <p className="text-base mt-5 text-center md:ml-10  text-white flex">
            <span className>Lets be social</span>
          </p>
          <div className="flex flex-row text-white md:ml-10 mt-4 gap-5">
            <FaFacebookF />
            <FaTwitter />
            <FaBehanceSquare />
            <FaDribbbleSquare />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col mt-10 pl-4 md:ml-96 md:mt-10 ">
        <p className="text-base w-full bg-slate-950  text-center mr-10  text-white flex">
          <span>
            Copyright ©2023 All rights reserved | This template is made with by
            Sher
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
