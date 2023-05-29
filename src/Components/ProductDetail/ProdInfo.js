import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SlDiamond } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addItemInCart } from "../../Redux/Reducer/CartReducer";
const ProdInfo = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  //const product = location.state.product;
  const Logo = location.state.Logo;
  const title = location.state.title;
  const description = location.state.description;
  const price = location.state.price;
  const id = location.state.id;
 
  console.log("its", location.state.title);
  const cartItems = useSelector((state) => state.cartItems);
  console.log("ids", cartItems);

  const [inputValue, setInputValue] = useState(1);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const totalPrice=inputValue*price;
  const products = {
    id,
    title,
    price,
    Logo,
    description,
    inputValue,
    totalPrice,
  };
  const isPresent = cartItems.some((item) => item.id === products.id);

  const navigate = useNavigate();
  const remCart = () => {
    //dispatch(deleteFromCart(products));
  };
  console.log("uuuuu", products);
  const imageInf = () => {
    //dispatch(addToTheCart(products));
    dispatch(addItemInCart(products));
    navigate(`/CartPage/${id}`, {
      state: { products, id, Logo, title, description, price,totalPrice,inputValue },
    });
  };
  return (
    <div className="bg-white md:w-auto w-[23rem] flex flex-col md:flex-row md:mb-10 mt-96">
      <div className="md:items-center  md:ml-40">
        <img src={Logo} alt="pic" className="md:h-[500px] md:w-[500px]" />
      </div>
      <div className="flex flex-col ">
        <h className="md:mt-4 pl-10 md:pl-32 ml-3 mt-6 font-semibold text-4xl md:text-3xl font-sans ">
          {title}
        </h>
        <h className="md:mt-4 pl-10  md:pl-32 font-semibold text-yellow-400 ml-3 mt-10 text-4xl md:text-2xl font-sans ">
          ${price}
        </h>
        <div className="flex flex-row md:w-auto w-[20rem]">
          <p className="md:mt-4 md:pl-32  font-semibold text-neutral-700 ml-3 mt-10  text-base font-sans ">
            Category:
          </p>
          <p className="md:mt-4 md:pl-8 pl-8 font-semibold text-red-500 ml-3 mt-10  text-base font-sans ">
            : Household
          </p>
        </div>
        <div className="flex flex-row md:w-auto w-[20rem]">
          <p className="md:mt-4 md:pl-32 pl-10 font-semibold text-neutral-700 ml-3 mt-10 text-base font-sans ">
            Availability
          </p>
          <p className="md:mt-4 md:pl-8 pl-8 font-semibold text-gray-500 ml-3 mt-10 text-base font-sans ">
            : InStock
          </p>
        </div>
        <div className="border border-gray-200 mt-8 mr-10 md:mr-0 md:mt-10 ml-10 md:ml-32"></div>
        <div className="flex md:w-[40rem] w-[20rem] md:ml-0 ml-6">
          <p className="md:mt-16  md:pl-32 pl-0 font-semibold text-gray-500 ml-3 mt-10  text-base font-sans ">
            {description}
            <p>
              Mill Oil is an innovative oil filled radiator with the most modern
              technology. If you are looking for something that can make your
              interior look awesome, and at the same time give you the pleasant
              warm feeling during the winter.
            </p>
          </p>
        </div>
        <div className="flex md:w-auto w-[20rem] flex-row md:mt-0 mt-10 pl-10 gap-2 md:pl-36 md:pt-10">
          <h>Quantity:</h>
          <input
            type="number"
            id="numbers"
            name="numbers"
            min="1"
            value={inputValue}
            onChange={handleInputChange}
            max="100"
            className="pl-1 border-2 focus:outline-none border-gray-300"
          ></input>
        </div>
        <div className="md:w-auto w-[20rem] flex flex-row mt-10 md:gap-0 gap-2 md:pl-10 pl-6">
          {isPresent ? (
            <button
              className="bg-gradient-to-r w-48 text-white py-2 md:ml-36 from-orange-500 rounded-lg to-yellow-500"
              onClick={remCart}
            >
              Rem from Cart
            </button>
          ) : (
            <button
              className="bg-gradient-to-r w-48 text-white py-2 md:ml-36 from-orange-500 rounded-lg to-yellow-500"
              onClick={imageInf}
            >
              Add To Cart
            </button>
          )}
          <div className="w-12 h-12 md:ml-10 gap-2 bg-gray-500 rounded-full flex items-center justify-center">
            <SlDiamond className="text-white text-lg" />
          </div>
          <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
            <AiOutlineHeart className=" text-white text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdInfo;
