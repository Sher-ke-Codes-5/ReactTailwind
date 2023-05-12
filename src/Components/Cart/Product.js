import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToTheCart, deleteFromCart } from "../../Redux/Action/action";

const Product = () => {
  //const val;

  //const inputValue=useSelector((state)=>state.cartReducer.totalPrice);
  const location = useLocation();
  const [inputVal,setInputVal]=useState('');
  const Logo = location.state.Logo;
  const title = location.state.title;
  const description = location.state.description;
  const price = location.state.price;
  const RemoveVal = () => {};
  const handleInput=(e)=>{
    setInputVal(e.target.value)
  }
  const Price = useSelector((state) => state.CartReducer.totalPrice);
  // const [products, setProducts] = useState(null);
  // console.log("ii", Price);
  const isSmallerScreen = window.innerWidth < 768;
  const isLargerScreen = window.innerWidth > 768;
  // useEffect(() => {
  //   const latestProduct = { Logo, title, description, price };
  //   setProducts((prevProducts) => [...prevProducts, latestProduct]);
  // }, [Logo, title, description, price]);
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
      <div className="md:w-[78rem] md:block hidden ml-14  h-0.5 text-white mt-2 border-b border-gray-400"></div>
      <div className="flex flex-col md:flex-row md:h-auto h-[11rem] bg-white">
        <div className="flex flex-row w-[20rem] md:w-auto  ">
          <img
            src={Logo}
            alt="pic"
            className={`md:h-[200px] h-[200px] w-[200px] md:w-[200px] ${
              isSmallerScreen ? "md:flex-1" : ""
            }`}
          />
          <div className="flex flex-col md:flex-1">
            <div className="flex flex-row">
              <div>
                <h1 className="md:text-2xl mt-20 md:mt-20 md:ml-16">{title}</h1>
              </div>
              {!isSmallerScreen && (
                <>
                  <h1 className="md:text-xl  md:mt-20 md:ml-28">${price}</h1>
                  <div className="flex md:flex-row flex-col relative md:ml-0 ml-[-10px]">
                    <input
                      type="number"
                      id="numbers"
                      name="numbers"
                      min="0"
                      value={inputVal}
                      onChange={handleInput}
                      max="100"
                      className="w-40 md:w-36 md:pl-20 text-lg md:h-[3rem] md:mt-20 h-10 px-2 py-2 md:ml-20 border-2 border-gray-300 focus:outline-none"
                    />
                    <span className="absolute md:top-[70%] top-[10%] left-0  md:left-24  md:mr-4 text-xl font-bold text-gray-500">
                      Qty
                    </span>
                  </div>
                  <div>
                    <h1 className="text-xl mt-1 md:ml-32   md:mt-20">
                      ${Price}
                    </h1>
                    </div>
                    <div>
                      <button className="text-base font-semibold text-white bg-orange-400 px-6 py-4 rounded-md md:ml-24 md:mt-16">
                        Del From Cart
                      </button>
                    </div>
                 
                </>
              )}
            </div>

            <div>
              <p
                className={`md:text-lg mb-20 md:ml-10 md:w-[15rem] ${
                  isSmallerScreen ? "md:flex-1" : ""
                }`}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
      {!isLargerScreen && (
        <>
          <div>
            <h1 className="text-xl ml-10  md:ml-32 md:mt-36">${price}</h1>
          </div>
          <div className="flex md:flex-row flex-row relative md:ml-0 ml-[1rem]">
            <input
              type="number"
              id="numbers"
              name="numbers"
              min="0"
              max="100"
              className="w-40 md:w-40 md:pl-20 pl-20 text-xl md:mt-32 px-4 py-4 md:ml-20 border-2 border-gray-300 focus:outline-none"
            />
            <span className="absolute md:top-[75%] top-[10%] left-5  md:left-24  md:mr-4 text-2xl md:text-xl font-bold text-gray-500">
              Qty
            </span>
          </div>
          <div>
            <h1 className="text-xl mt-1 md:ml-32 ml-10 md:mt-36">${price}</h1>
          </div>
        </>
      )}

      <div className="md:w-auto w-[20rem] flex flex-col md:flex-row  md:gap-0 gap-2 pl-6 md:pl-3">
        <button className="bg-gradient-to-r w-60 transition delay-700 duration-1000 ease-in-out  text-black hover:bg-black hover:text-white py-4 md:ml-10 bg-white border-2 border-black">
          Continue Shopping
        </button>

        {!isLargerScreen && (
          <div className="flex flex-row">
            <button className="bg-gradient-to-r w-48 text-black  hover:bg-black transition-all hover:text-white py-4 md:ml-[40rem] bg-white border-2 border-black">
              Clear Cart
            </button>
            <button className="bg-gradient-to-r w-48 hover:bg-black transition-transform hover:text-white text-black py-4 md:ml-20  bg-white border-2 border-black">
              Update Cart
            </button>
          </div>
        )}

        {!isSmallerScreen && (
          <>
            <button
              className="bg-gradient-to-r w-48 text-black  hover:bg-black transition-all hover:text-white py-4 md:ml-[40rem] bg-white border-2 border-black"
              onClick={RemoveVal}
            >
              Clear Cart
            </button>
            <button className="bg-gradient-to-r w-48 hover:bg-black transition-transform hover:text-white text-black py-4 md:ml-20  bg-white border-2 border-black">
              Update Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
