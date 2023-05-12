import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/Screenshot_3-removebg-preview.png'
import Logo2 from '../../assets/11-removebg-preview.png'
import { FaSearch, FaCartPlus, FaBars, FaTimes, FaShoppingBasket, FaShoppingBag } from "react-icons/fa";
import {RiShoppingBagLine} from "react-icons/ri";

const Navbar = () => {
  const [showItems, setShowItems] = useState(false);
  const [padding, setPadding] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarSmallScreen, setShowSidebarSmallScreen] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setPadding(false);
    } else {
      setPadding(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchClick = () => {
    setShowSearchBar((ShowSearchBar) => !ShowSearchBar);

    if (window.innerWidth < 768) {
      setShowSidebarSmallScreen(false);
    }
  };

  const handleSidebarClick = () => {
    if (window.innerWidth < 768) {
      setShowSidebarSmallScreen(!showSidebarSmallScreen);
    } else {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <>
    <div className=" md:w-auto w-auto md:relative">
  <div
    className={`bg-slate-100 md:mt-0 mt-0 z-10 md:flex items-center md:justify-between lg:space-x-8 transition-all duration-300 ${
      padding ? "md:mx-32   md:mt-16 md:px-4 " : "md:mx-0 md:mt-0 md:fixed sm:w-[23rem] md:w-[100%]  "
    }`}
    onScroll={handleScroll}
  >
    <div className="flex items-center">
      <a href="#">
        <img
          src={Logo}
          alt="Logo"
          className="md:w-16 w-12 h-auto md:mr-4 md:mb-4"
        />
      </a>

      <Link
        to="/home"
        className="font-bold md:text-xl text-2xl my-2 mb-4 items-center justify-start text-slate-900 mt-4"
      >
        Karma
      </Link>
   
 

            <div className="flex flex-col">
              <div className="md:hidden text-gray-10 w-auto flex-wrap hover:text-slate-300 ml-20 absolute top-0.5 pt-2 right-2">
                <button onClick={handleSidebarClick}>
                  <FaBars className="text-5xl mt-4 pb-4" />
                </button>
              </div>

              {(showSidebar || showSidebarSmallScreen) && (
                <div className="absolute top-0 left-0 md:h-screen bg-white w-44">
                  <div className=" md:hidden text-gray-600 right-2 flex justify-start"></div>
                  <ul className="mt-10 flex text-base flex-col pt-10 pb-32 justify-center h-auto">
                    <li className="w-100 ">
                      <Link
                        to="/"
                        className="px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        to="/ShopPage"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        to="/BlogPage"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="w">
                      <Link
                        to="/CartPage"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        Cart
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        to="/ContactPage"
                        className="px-4 py-2 text-base text-gray-800 hover:bg-gray-100"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center pr-5">
           
            <div className="relative">
              <Link 
              to='/'
              className="text-gray-800 border-b-4 py-2 text-sm font-semibold border-transparent ml-40 hover:text-yellow-400  ">
                HOME
              </Link>
          

            <Link
              to="/ShopPage"
              className="text-gray-800  border-b-4 text-sm font-semibold border-transparent hover:text-yellow-400 ml-10 py-2"
            >
              SHOP
            </Link>

            <Link
              to="/BlogPage"
              className="text-gray-800  text-sm border-b-4 font-semibold border-transparent hover:text-yellow-400 ml-10 py-2"
            >
              BLOG
            </Link>

            <Link
              to="/ContactPage"
              className="text-gray-800 border-b-4 text-sm font-semibold border-transparent hover:text-yellow-400 ml-10 py-2"
            >
              CONTACT
            </Link>

            <Link
              to="/CartPage"
              className="text-gray-800 border-b-4 text-sm font-semibold border-transparent hover:text-yellow-400 ml-10 py-2"
            >
              CART
            </Link>
            <Link
              to="/item"
              className="text-gray-800   text-xl border-b-4 font-semibold border-transparent hover:text-yellow-400 ml-10 py-2"
            >
              <button className="pt-2 ml-10">
                <RiShoppingBagLine />
              </button>
            </Link>
            <button
              className="text-gray-500 focus:outline-none ml-10 focus:text-gray-700"
              onClick={handleSearchClick}
            >
              {showSearchBar ? (
                <FaTimes className="w-4 h-4" />
              ) : (
                <FaSearch className="w-4 h-4 " />
              )}
            </button>
            </div>
          </div>
          
        </div>
      </div>
      <div
        className={` relative w-[80%] mx-24 inset-0 top-32 z-50  bg-orange-500  transition-all duration-700 ${
          showSearchBar ? "h-12 " : "h-0"
        }`}
      >
        <form className="pb-10 hidden  items-center">
          <div
            className={`relative w-full ${showSearchBar ? "ml-0" : "ml-auto"}`}
          >
            <input
              type="text"
              className={`w-full h-full pt-10 pl-10    bg-orange-500  transition-all duration-1000 focus:outline-none  ${
                showSearchBar ? "opacity-100" : "hidden"
              }`}
              placeholder="Search for anything"
            />
          </div>
        </form>
      </div>

     
    </>
  );
};

export default Navbar;
