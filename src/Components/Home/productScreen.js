import React from "react";
import ProductCard from "./productCard";
import Logo from "../../assets/real.png";
import { useLocation } from "react-router-dom";
const ProductScreen = () => {
  const location = useLocation();
  const routeName = location.pathname;

  const products = [
    {
      id: 0,
      title: "Product 1",
      price: 10,
      Logo: Logo,
      description: "This is the description for product 1.",
    },
    {
      id: 1,
      title: "Product 2",
      price: 20,
      Logo: Logo,
      description: "This is the description for product 2.",
    },
    {
      id: 2,
      title: "Product 3",
      price: 30,
      Logo: Logo,
      description: "This is the description for product 3.",
    },
    {
      id: 3,
      title: "Product 4",
      price: 40,
      Logo: Logo,
      description: "This is the description for product 4.",
    },
    {
      id: 4,
      title: "Product 5",
      price:50,
      Logo: Logo,
      description: "This is the description for product 5.",
    },
    {
      id: 5,
      title: "Product 6",
      price: 50,
      Logo: Logo,
      description: "This is the description for product 5.",
    },
    {
      id: 6,
      title: "Product 7",
      price: 50,
      Logo: Logo,
      description: "This is the description for product 5.",
    },
    {
      id: 7,
      title: "Product 8",
      price: 50,
      Logo: Logo,
      description: "This is the description for product 5.",
    },
  ];
  let productToShow = products;
  let width = "1/4";

  if (routeName === "/ShopPage") {
    width = "1/3";
    productToShow = products.slice(0, 6);
  } else {
    if (window.innerWidth>=768 && window.innerWidth<1024)
    width = "1/2";
    

  
  }

  const handleAddToCartClick = (productId) => {
    console.log("Add to cart clicked for product id:", productId);
  };

  const handleProductClick = (productId) => {
    console.log("Product clicked with id:", productId);
  };

  return (
    <div>
      {/* <ProductCarousel products={products} /> */}
      <div className="flex md:flex-row flex-col flex-wrap  w-full md:justify-between">
        {productToShow.map((product) => (
          <div className={`lg:w-${width}  md:w-1/2 sm:w-full px-10`} key={product.id}>
            <ProductCard
              key={product.id}
              product={product}
              onAddToCartClick={handleAddToCartClick}
              onProductClick={handleProductClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScreen;
