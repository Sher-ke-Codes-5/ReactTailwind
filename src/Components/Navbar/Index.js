import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/Screenshot_3-removebg-preview.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);

  if (cartItems.length > 0) {
    const length = cartItems.length;
    const lastIndex = cartItems[length - 1].id;
    console.log(lastIndex);
  }

  //console.log("length", length);
  //console.log("items ",cartItems[0].id);
  const location = useLocation();
  let pathName = location.pathname;
  console.log("path", pathName);
  const [padding, setPadding] = useState(true);
  const [topBar,setTopBar]=useState(false);
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
  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);
const handleScroll2=()=>{
  if (window.pageYOffset>0){
    setTopBar(true);

  }
  else{
    setTopBar(false);
  }
}
  const handleSearchClick = () => {
    setShowSearchBar((ShowSearchBar) => !ShowSearchBar);

    if (window.innerWidth < 1024) {
      setShowSidebarSmallScreen(false);
    }
  };

  const handleSidebarClick = () => {
    if (window.innerWidth < 1024) {
      setShowSidebarSmallScreen(!showSidebarSmallScreen);
    } else {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <>
      <div className=" lg:w-auto md:w-[100%] sm:w-[100%] lg:relative">
        <div
          className={`bg-white md:mt-0 mt-0 z-10 lg:flex items-center md:justify-between lg:space-x-8 transition-all duration-300 ${
            padding
              ? "lg:mx-32   lg:mt-16 lg:px-4 "
              : "lg:mx-0 lg:mt-0 lg:fixed sm:w-[23rem] md:w-full lg:w-[100%]  "
          }`}
          onScroll={handleScroll}
        >
          <div className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="lg:w-16 w-12 h-auto lg:mr-4 lg:mb-4"
            />

            <Link
              to="/"
              className="font-bold md:text-xl text-2xl my-2 mb-4 items-center justify-start text-slate-900 mt-4"
            >
              Karma
            </Link>

            <div className="flex flex-col">
              <div className="lg:hidden text-gray-10 w-auto flex-wrap hover:text-slate-300 ml-20 absolute top-0.5 pt-2 right-2">
                <button onClick={handleSidebarClick}>
                  <FaBars className="text-5xl mt-4 pb-4" />
                </button>
              </div>

              {(showSidebar || showSidebarSmallScreen) && (
                <div className="absolute top-0 left-0 lg:h-screen bg-white w-44">
                  <div className=" lg:hidden text-gray-600 right-2 flex justify-start"></div>
                  <ul className="mt-10 flex text-base flex-col pt-10 pb-32 justify-center h-auto">
                    <li className="w-100 ">
                      <Link
                        to="/"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                          pathName === "/" ? "text-yellow-400" : "text-gray-800"
                        }`}
                      >
                        Homes
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        to="/ShopPage"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                          pathName === "/ShopPage"
                            ? "text-yellow-400"
                            : "text-gray-800"
                        }`}
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        to="/BlogPage"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                          pathName === "/BlogPage"
                            ? "text-yellow-400"
                            : "text-gray-800"
                        }`}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="w">
                      <Link
                        to="/CartPage/id"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                          pathName === "/CartPage/id"
                            ? "text-yellow-400"
                            : "text-gray-800"
                        }`}
                      >
                        Cart
                      </Link>
                    </li>
                    <li className="w-100">
                      <Link
                        to="/ContactPage"
                        className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                          pathName === "/ContactPage"
                            ? "text-yellow-400"
                            : "text-gray-800"
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center pr-5">
            <div className="relative">
              <Link
                to="/"
                className={`text-gray-800  border-b-4 text-sm font-semibold border-transparent hover:text-yellow-400 ml-10 py-2 ${
                  pathName === "/" ? "text-yellow-400" : "text-gray-800"
                }`}
              >
                HOME
              </Link>

              <Link
                to="/ShopPage"
                className={`text-gray-800  border-b-4 text-sm font-semibold border-transparent hover:text-yellow-400 ml-10 py-2 ${
                  pathName === "/ShopPage" ? "text-yellow-400" : "text-gray-800"
                }`}
              >
                SHOP
              </Link>

              <Link
                to="/BlogPage"
                className={`text-gray-800  border-b-4 text-sm font-semibold border-transparent hover:text-yellow-400 ml-10 py-2 ${
                  pathName === "/BlogPage" ? "text-yellow-400" : "text-gray-800"
                }`}
              >
                BLOG
              </Link>

              <Link
                to="/ContactPage"
                className={`text-gray-800  border-b-4 text-sm font-semibold border-transparent hover:text-yellow-400 ml-10 py-2 ${
                  pathName === "/ContactPage"
                    ? "text-yellow-400"
                    : "text-gray-800"
                }`}
              >
                CONTACT
              </Link>

              <Link
                to="/CartPage/id"
                className={`text-gray-800   text-xl border-b-4 font-semibold border-transparent hover:text-yellow-400 ml-10 py-2
                ${
                  pathName === "/CartPage/id"
                    ? "text-yellow-400"
                    : "text-gray-800"
                }`}
              >
                <button className="pt-2 ml-10 relative    ">
                  <RiShoppingBagLine />
                  {/* {cartItems.length > 0 && ( */}
                    <span className="absolute bottom-4 left-2 bg-yellow-400 px-2 py-0.5 rounded-full hover:text-yellow-300  text-black text-sm">
                      {cartItems.length}
                    </span>
                </button>
              </Link>

              <button
                className="text-gray-500 focus:outline-none ml-10 delay-700 transition-all duration-1000 ease-in-out focus:text-gray-700"
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
        className={` relative lg:w-[81.4%] md:w-0 sm:w-0 w-0  ml-[8rem] inset-0 top-0 z-50  bg-orange-600  transition-height duration-1000 ease-in-out ${
          showSearchBar ? "h-12 " : "h-0" 
          
         
        } ${
          topBar? "hidden mt-[8.rem] ":"mt-0"
        }` }onClick={handleScroll2}
      >
        <form className="pb-10   items-center">
          <div
            className={`relative w-full ${showSearchBar ? "ml-0" : "ml-auto"}`}
          >
            <input
              type="text"
              className={`w-full h-full pt-10 pl-10 text-center placeholder-white text-black  bg-orange-500  transition-all duration-1000 focus:outline-none  ${
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
