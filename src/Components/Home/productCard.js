import React from "react";
import Logo from "../../assets/Screenshot_31.png";
import { TfiBag } from "react-icons/tfi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Slider>
  );
};

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  console.log("you",product);
  const imageInf = () => {
    console.log("Product",product.Logo);
    const Logo = product.Logo;
    const id = product.id;
    const title=product.title;
    const description=product.description;
    const price=product.price;
    // console.log(product.logo);
    navigate(`/ProductPage/${product.id}`, { state: {id,Logo,title,description,price} });
  
  };
  const handleAddToCart = () => {};

  return (
    <div className="bg-slate-100 mt-20  w-[100%]  md:mr-10  flex md:flex-col flex-col md:pb-2 ">
      <div className="  w-full  md:w-auto">
        {/* <Link to={`/ProductPage?image=${Logo}`}> */}
        <img
          className="object-cover  cursor-pointer"
          src={product.Logo}
          alt={product.title}
          onClick={imageInf}
        />
        {/* </Link> */}
        <h3 className="font-semibold px-2 text-sm mb-2">{product.title}</h3>
        <p className="text-black font-semibold px-2 text-base">
          {product.description}
        </p>
        <p className="font-bold px-2 text-gray-900 mt-2">Rs {product.price}</p>
        <div className="flex flex-row pt-5 pl-2">
          <button
            className="bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-2 rounded-full"
            onClick={handleAddToCart}
          >
            <TfiBag />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
