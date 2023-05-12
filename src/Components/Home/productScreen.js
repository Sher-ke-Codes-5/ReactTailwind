import React, { useState } from "react";
import ProductCard from "./productCard";
import Logo from "../../assets/real.png";
import ProductCarousel from "./productCard";
import { useLocation } from "react-router-dom";
import ShopPage from "../../Pages/ShopPage";
const ProductScreen = () => {
  const location=useLocation();
  const routeName=location.pathname

  const products=[
    {
      id: 1,
      title: "Product 1",
      price: 9.99,
      Logo:Logo,
      description: "This is the description for product 1.",
    },
    {
      id: 2,
      title: "Product 2",
      price: 19.99,
      Logo:Logo,
      description: "This is the description for product 2.",
    },
    {
      id: 3,
      title: "Product 3",
      price: 29.99,
      Logo:Logo,
      description: "This is the description for product 3.",
    },
    {
      id: 4,
      title: "Product 4",
      price: 39.99,
      Logo:Logo,
      description: "This is the description for product 4.",
    },
    {
      id: 5,
      title: "Product 5",
      price: 49.99,
      Logo:Logo,
      description: "This is the description for product 5.",
    },
    {
      id: 6,
      title: "Product 6",
      price: 49.99,
      Logo:Logo,
      description: "This is the description for product 5.",
    },
    {
      id: 7,
      title: "Product 7",
      price: 49.99,
      Logo:Logo,
      description: "This is the description for product 5.",
    },
    {
      id: 8,
      title: "Product 8",
      price: 49.99,
      Logo:Logo,
      description: "This is the description for product 5.",
    },
  ];
  let productToShow=products;
  let width='1/4'

  if (routeName==='/ShopPage')
  {
    width='1/3'
    productToShow=products.slice(0,6)
    console.log("i",productToShow);
  }
  else{
    width='1/4'
  }
  console.log("he", products);

  const handleAddToCartClick = (productId) => {
    console.log("Add to cart clicked for product id:", productId);
  };

  const handleProductClick = (productId) => {
    console.log("Product clicked with id:", productId);
  };

  return (
    <div >
      {/* <ProductCarousel products={products} /> */}
      <div className="flex md:flex-row flex-col flex-wrap  w-full md:justify-between">
        {productToShow.map((product) => (
          <div className={`md:w-${width} w-full px-10`} key={product.id}>
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
