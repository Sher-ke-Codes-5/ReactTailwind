import React from "react";
import logo from "../../assets/Screenshot_11.png";
import Logo from "../../assets/Screenshot_12.png";
const Models = () => {
  const items = [
    {
      id: 1,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
    {
      id: 2,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
    {
      id: 3,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
    {
      id: 4,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
    {
      id: 5,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
    {
      id: 6,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
    {
      id: 7,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
    {
      id: 8,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
    {
      id: 9,
      title: "Black LACE HEELS",
      price: "$715.00",
      image: logo,
    },
  ];

  // split items into chunks of 3
  // const chunkedItems = chunkArray(items, 3)
  // function chunkArray(arr, size) {
  //   const screenWidth = window.innerWidth;
  //   let result = [];

  //   if (screenWidth  < 768) { // small screen
  //     for (let i = 0; i < arr.length; i++) {
  //       result.push([arr[i]]);
  //     }
  //   } else { // large screen

  //     for (let i = 0; i < arr.length; i += size) {
  //       result.push(arr.slice(i, i + size));
  //     }
  //   }

  //   return result;
  // }

  return (
    <>
      <div className="flex mt-20 flex-col justify-center">
        <h1 className="text-5xl text-center font-semibold">
          Deals of the Week
        </h1>

        <p className="text-sm text-center mt-4 text-black flex">
          <span className="w-full text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmodtempor
          </span>
        </p>
        <p className="text-sm text-center text-black flex">
          <span className="w-full text-center">
            incididunt ut labore et dolore magna aliqua
          </span>
        </p>
      </div>
      {/* <div className="flex  flex-col md:flex-row md:w-auto">
        <div className="flex md:flex-col w-[70%] flex-col ml-10 md:ml-20 mt-10 bg-slate-100">
          {items.map((item) => (
            <div className="flex flex-row">
              <div
                className="flex flex-row md:flex-row md:ml-20 ml-10 mt-5"
              >
                <img
                  className="h-[70px] w-[70px] object-contain"
                  src={logo}
                  alt="pic"
                />
                <div className="flex flex-col">
                  <div className="flex pl-5">
                    <text>{item.title}</text>
                  </div>
                  <div className="flex pl-5">
                    <h1 className="text-base font-semibold">{item.price}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
      </div> */}
<div className='flex flex-row'>
      <div className="grid grid-cols-12 lg:w-[70%] md:w-[70%] sm:w-[100%] w-[100%]">
        {items.map((item) => {
          return (
            <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4">
              <div className="flex flex-row md:flex-row md:ml-20 ml-10 mt-5">
                <img
                  className="h-[70px] w-[70px] object-contain"
                  src={logo}
                  alt="pic"
                />
                <div className="flex flex-col">
                  <div className="flex pl-5">
                    <text>{item.title}</text>
                  </div>
                  <div className="flex pl-5">
                    <h1 className="text-base font-semibold">{item.price}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
       
      </div>
      <div className="md:flex md:flex-row hidden h-[300px] ml-10 md:ml-20 mt-2 w-[300px] w[30%]">
        <img src={Logo} alt="images" />
      </div>
      </div>
     
    </>
  );
};
export default Models;
