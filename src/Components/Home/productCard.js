import React from "react";
import { TfiBag } from "react-icons/tfi";
import { BsTrash3} from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addItemInCart,removeItemInCart} from "../../Redux/Reducer/CartReducer";
const ProductCard = ({ product }) => {
//const cartItems=useSelector((state)=>state.CartReducer.cartItems);
const cartItems2=useSelector((state)=>state.cartItems);
console.log("CartItems tool",cartItems2);

 const isPresent = cartItems2.some((item) => item.id === product.id);

const handleFun2=(product)=>{
dispatch(removeItemInCart(product))
//dispatch(deleteFromCart(product))
}
  const navigate = useNavigate();
  const dispatch=useDispatch();
  console.log("you", product);
  const handleFun=()=>{
    const updatedProduct = {
      ...product,
      inputValue: 1,
      totalPrice: 1* product.price,
    };
    dispatch(addItemInCart(updatedProduct));
    //dispatch(addToTheCart(updatedProduct));
  }
  const imageInf = () => {
    console.log("Product", product.Logo);
    const Logo = product.Logo;
    const id = product.id;
    const title = product.title;
    const description = product.description;
    const price = product.price;
    // console.log(product.logo);
    navigate(`/ProductPage/${product.id}`, {
      state: { id, Logo, title, description, price },
    });
  };


  return (
    <div className="bg-slate-100 mt-20  w-[100%]  md:mr-10  flex md:flex-col flex-col pb-4"
      >
      <div className="  w-full  md:w-auto">
        <div onClick={imageInf}>
        {/* <Link to={`/ProductPage?image=${Logo}`}> */}
        <img
          className="object-cover  cursor-pointer"
          src={product.Logo}
          alt={product.title}
          
        />
        {/* </Link> */}
        <h3 className="font-semibold px-2 text-sm mb-2">{product.title}</h3>
        <p className="text-black font-semibold px-2 text-base">
          {product.description}
        </p>
        <p className="font-bold px-2 text-gray-900 mt-2">Rs {product.price}</p>
        </div>
        <div className="flex flex-row pt-5 pl-2">
         {
          !isPresent ?(
         
          <button
            className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-2 rounded-full"
            onClick={handleFun}
          >
            <TfiBag />
          </button>
        ):(
          <button
          className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full"
          onClick={()=>handleFun2(product)}
        >
          <BsTrash3/>
        </button>
        )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
