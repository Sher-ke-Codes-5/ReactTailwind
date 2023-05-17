import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

import {
  clearCart,
  deleteFromCart,
  updateProduct,
} from "../../Redux/Action/action";
const Product = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice);

  console.log(cartItems);
  const navigate = useNavigate();
  //const [inputVal, setInputVal] = useState(); its needed

  const RemoveVal = () => {
    dispatch(clearCart(cartItems));
  };
  const removeItemsQuantity = (m) => {
    console.log("product", m);
    dispatch(deleteFromCart(m));
  };
  const handleInput = (e, m) => {
    console.log("test on change", m);
    let newInputVal = e.target.value;
    // setInputVal(newInputVal);
    const updatedProduct = {
      ...m,
      inputValue: newInputVal,
      totalPrice: newInputVal * m.price,
    };
    dispatch(updateProduct(updatedProduct));
  };

  const HandleContinue = () => {
    navigate("/ShopPage");
  };

  const isSmallerScreen = window.innerWidth < 768;
  const isLargerScreen = window.innerWidth > 768;
  let length = cartItems.length;
  if (length === 0) {
    return (
      <div className="flex md:mt-[38rem] h-screen md:mx-0 mx-0 justify-center items-center md:w-auto   mt-[26rem] mb-10 bg-slate-400 flex-col">
        <p className="md:text-8xl text-5xl text-yellow-500">No Items here </p>
      </div>
    );
  }
  return (
    <div className="flex md:mt-[38rem] md:w-auto w-[20rem]  mt-[26rem] mb-10 bg-white flex-col">
      <div className="md:flex md:w-auto w-[20rem] hidden text-lg  md:flex-row bg-white">
        <h1 className="text-gray-600 pl-20">Image</h1>
        <h1 className="text-gray-600 pl-[10rem]">Title</h1>
        <h1 className="text-gray-600 pl-[10rem]">Price</h1>
        <h1 className="text-gray-600 pl-[10rem]">Quantity</h1>
        <h1 className="text-gray-600 pl-[10rem]">Total</h1>
        <h1 className="text-gray-600 pl-[10rem]">Actions</h1>
      </div>

      {cartItems.map((m) => {
        console.log(m.id);
        return (
          <div>
            <div className="md:w-[78rem] md:block hidden ml-14  h-0.5 text-white mt-2 border-b border-gray-400"></div>
            <div className="flex flex-col md:flex-row md:h-auto h-[11rem] bg-white">
              <div className="flex flex-row w-[20rem] md:w-auto  ">
                <img
                  src={m.Logo}
                  alt="pic"
                  className={`md:h-[200px] h-[200px] w-[200px] md:ml-[3rem] md:w-[200px] ${
                    isSmallerScreen ? "md:flex-1" : ""
                  }`}
                />
                <div className="flex flex-col md:flex-1">
                  <div className="flex flex-row">
                    <div>
                      <h1 className="md:text-2xl text-xl mt-20 md:mt-20 md:ml-[2.5rem]">
                        {m.title}
                      </h1>
                    </div>
                    {!isSmallerScreen && (
                      <>
                        <h1 className="md:text-xl  md:mt-20 md:ml-[6.2rem]">
                          ${m.price}
                        </h1>
                        <div className="flex md:flex-row flex-col relative md:ml-0 ml-[-10px]">
                          <input
                            type="number"
                            id="numbers"
                            name="numbers"
                            min="1"
                            value={m.inputValue}
                            onChange={(event) => handleInput(event, m)}
                            max="100"
                            className="w-40 md:w-36 md:pl-20 text-lg md:h-[3rem] md:mt-20 h-10 px-2 py-2 md:ml-[9rem] border-2 border-gray-300 focus:outline-none"
                          />
                          <span className="absolute md:top-[70%] top-[10%] left-0  md:left-44  md:mr-4 text-xl font-bold text-gray-500">
                            Qty
                          </span>
                        </div>
                        <div>
                          <h1 className="text-xl mt-1 md:ml-28   md:mt-20">
                            ${m.inputValue * m.price}
                          </h1>
                        </div>
                        <div>
                          <button
                            className="text-base font-semibold text-white  bg-red-500 px-6 py-4 rounded-md md:ml-[9.8rem] md:mt-[4.5rem]"
                            onClick={() => removeItemsQuantity(m)}
                          >
                            <BsTrash3 />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  <div>
                    <p
                      className={`md:text-lg text-lg mb-20 md:ml-9 md:w-[15rem] ${
                        isSmallerScreen ? "md:flex-1" : ""
                      }`}
                    >
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {!isLargerScreen && (
              <>
                <div>
                  <h1 className="text-xl ml-10 mt-4 md:ml-32 md:mt-36">
                    <span className="text-2xl font-semibold">Price </span>{" "}
                    <span className="text-2xl"> ${m.inputValue * m.price}</span>
                  </h1>
                </div>
                <div className="flex md:flex-row flex-row relative md:ml-0 mt-10 ml-[1rem]">
                  <input
                    type="number"
                    id="numbers"
                    name="numbers"
                    min="0"
                    max="100"
                    onChange={(event) => handleInput(event, m)}
                    value={m.inputValue}
                    className="w-40 md:w-40 md:pl-20 pl-28 pt-3 text-2xl md:mt-32 px-4 py-4 md:ml-20 border-2 border-gray-300 focus:outline-none"
                  />
                  <span className="absolute md:top-[75%] top-[20%] left-5  md:left-24  md:mr-4 text-2xl md:text-xl font-bold text-gray-500">
                    Qty
                  </span>
                  <div>
                    <button
                      className="md:text-base text-xl font-semibold text-white bg-red-500 px-6 py-4 rounded-md ml-20 md:ml-[9.8rem] md:mt-16"
                      onClick={() => removeItemsQuantity(m)}
                    >
                      <BsTrash3 className="md:text-base text-3xl" />
                    </button>
                  </div>
                </div>

                <div className="flex">
                  <h1 className="text-xl mt-5 md:ml-32 mb-5  ml-10 md:mt-36">
                    <span className="text-2xl">Price</span>{" "}
                    <span className="text-2xl">${m.price}</span>
                  </h1>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="md:w-auto w-[20rem] flex flex-col md:flex-row  md:gap-0 gap-2 pl-6 md:pl-3">
        <button
          className="bg-gradient-to-r w-60 transition delay-700 duration-1000 ease-in-out  text-black hover:bg-black hover:text-white py-4 md:ml-10 bg-white border-2 border-black"
          onClick={HandleContinue}
        >
          Continue Shoppings
        </button>

        {!isLargerScreen && (
          <div className="flex flex-row">
            <button className="bg-gradient-to-r w-48 text-black  hover:bg-black transition-all hover:text-white py-4 md:ml-[40rem] bg-white border-2 border-black">
              Clear Cart
            </button>
            {/* <button className="bg-gradient-to-r w-48 hover:bg-black transition-transform hover:text-white text-black py-4 md:ml-20  bg-white border-2 border-black">
              Update Cart
            </button> */}
          </div>
        )}

        {!isSmallerScreen && (
          <>
            <button
              className="bg-gradient-to-r w-48 text-black  hover:bg-black transition-all hover:text-white py-4 md:ml-[44rem] bg-white border-2 border-black"
              onClick={RemoveVal}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row md:ml-0 ml-6 flex-wrap gap-40 md:gap-[60rem] h-[3rem] hover:text-yellow-400 md:mt-20 mt-10 w-full bg-slate-200 md:w-full">
          <div>
            <span className="md:w-48 font-semibold text-xl md:text-xl md:pt-4 transition-transform hover:text-yellow-400 text-black py-0 md:ml-0  ">
              Total Price
            </span>
          </div>
          <span className="md:pt-4 right-0 text-xl ">{totalPrice}</span>
        </div>
        <div className="flex flex-row md:ml-0 ml-6 flex-wrap gap-40 md:gap-[60rem] h-[3rem] hover:text-yellow-400 md:mt-0 w-full bg-slate-200 md:w-full">
          <div>
            <span className="md:w-48 font-semibold text-xl md:text-xl md:pt-4 transition-transform hover:text-yellow-400 text-black py-0 md:ml-0  ">
              Total items
            </span>
          </div>
          <span className="md:pt-4 right-0 text-xl ">{cartItems.length}</span>
        </div>
      </div>
    </div>
  );
};
export default Product;
