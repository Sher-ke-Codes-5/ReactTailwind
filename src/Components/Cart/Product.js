import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";
import {updateItemInCart,removeItemInCart,delALL} from '../../Redux/Reducer/CartReducer'
const Product = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const totalPrice = useSelector((state) => state.totalPrice);

 // console.log(cartItems);
  const navigate = useNavigate();
  //const [inputVal, setInputVal] = useState(); its needed

  const RemoveVal = () => {
    dispatch(delALL(cartItems));
  };
  const removeItemsQuantity = (m) => {
    console.log("product", m);
    dispatch(removeItemInCart(m));
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
    dispatch(updateItemInCart(updatedProduct))
    //dispatch(updateProduct(updatedProduct));
  };

  const HandleContinue = () => {
    navigate("/ShopPage");
  };

  let length = cartItems.length;
  if (length === 0) {
    return (
      <div className="flex md:mt-[38rem] h-screen md:mx-0 mx-0 justify-center items-center md:w-auto   mt-[26rem] mb-10 bg-slate-400 flex-col">
        <p className="md:text-8xl text-5xl text-yellow-500">No Items here </p>
      </div>
    );
  }
  return (
    <div className="flex md:mt-[32rem] md:w-auto w-[20rem] md:h-auto lg:h-auto sm:h-[40rem] h-auto mt-[24rem] mb-10 bg-white md:gap-0 gap-10 flex-col">
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
          <>
            <div className="flex flex-col mt-0  md:flex-row w-[22rem] md:w-auto h-[32rem] md:h-[12rem]  ">
              <div className="flex flex-row ">
                <img
                  src={m.Logo}
                  alt="pic"
                  className="md:h-[200px] h-[200px] w-[200px]  ml-10 md:ml-[3rem] md:w-[200px] "
                />
                <div className="flex flex-col">
                  <h1 className="md:text-2xl  text-xl mt-20 md:mt-20 md:ml-[2.5rem]">
                    {m.title}
                  </h1>
                  <p className="md:text-lg text-lg   w-[7rem]  md:w-[15rem]">
                    {m.description}
                  </p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col md:mt-0 mt-4 ">
                <h1 className="md:text-xl text-3xl md:ml-0 ml-20 md:mt-20">
                  ${m.price}
                </h1>
                <div className="flex md:flex-row mt-2 flex-col ml-16  relative md:ml-0 ">
                  <input
                    type="number"
                    id="numbers"
                    name="numbers"
                    min="1"
                    value={m.inputValue}
                    onChange={(event) => handleInput(event, m)}
                    max="100"
                    className="w-40 md:w-36 md:pl-20 pl-24 md:text-lg  text-2xl md:h-[3rem] md:mt-20 h-20 px-2 py-2 md:ml-[9rem] border-2 border-gray-300 focus:outline-none"
                  />
                  <span className="absolute md:top-[48%] top-[30%] left-5  md:left-44 text-2xl md:mr-4 md:text-xl font-bold text-gray-500">
                    Qty
                  </span>
                </div>
                <div>
                  <h1 className="md:text-xl mt-4  text-3xl ml-20 md:ml-28  md:mt-20">
                    ${m.inputValue * m.price}
                  </h1>
                </div>
                <div>
                  <button
                    className="md:text-base text-2xl font-semibold ml-16 text-white mt-6  bg-red-500 md:px-6 px-10 py-7 md:py-4 rounded-md md:ml-[9.8rem] md:mt-[4.5rem]"
                    onClick={() => removeItemsQuantity(m)}
                  >
                    <BsTrash3 />
                  </button>
                  <div className="md:flex-row md:hidden flex-col mx-14 md:mx-0 lg:mx-0  md:mt-32 sm:mx-14 border text-black mt-8 bg-black"></div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="md:w-auto  flex w-[15rem] md:mt-32 md:h-auto  h-[20rem] mt-10  flex-col md:flex-row  md:gap-0 gap-2 pl-6 md:pl-3">
        <button
          className=" md:w-60 md:px-10 h-16 transition delay-700 duration-1000 ease-in-out  text-black hover:bg-black hover:text-white py-4 md:ml-10 bg-white border-2 border-black"
          onClick={HandleContinue}
        >
          <span className="md:w-32"> Continue Shoppings</span>
        </button>

        <button
          className="bg-gradient-to-r w-48 text-black  hover:bg-black transition-all hover:text-white py-2 md:ml-[44rem] bg-white border-2 border-black"
          onClick={RemoveVal}
        >
          Clear Cart
        </button>
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
