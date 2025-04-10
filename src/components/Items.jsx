import React, { useState } from "react";
import Layout from "./Layout.jsx";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { SlReload } from "react-icons/sl";
import { HiOutlineHome } from "react-icons/hi2";
import { TbMathGreater } from "react-icons/tb";

import Bar from "../assets/progess.png";
import item1 from "../assets/collection_101.png";
import item2 from "../assets/collection_102.png";
import item3 from "../assets/collection_103.png";
import item4 from "../assets/collection_104.png";
import item5 from "../assets/collection_105.png";
import item6 from "../assets/collection_106.png";
import item7 from "../assets/collection_107.png";
import item8 from "../assets/collection_108.png";

const items = [
  { id: 1, image: item3, title: "Flower Vase", price: "$29.99" },
  { id: 2, image: item4, title: "Book Self", price: "$119.99" },
  { id: 3, image: item5, title: "Table Chair", price: "$180.34" },
  { id: 4, image: item6, title: "Wall Clock", price: "$20.14" },
  { id: 5, image: item2, title: "Round table", price: "$24.99" },
  { id: 6, image: item1, title: "Pottery Vase", price: "$24.99" },
  { id: 7, image: item8, title: "wooden sofa", price: "$140.22" },
  { id: 8, image: item7, title: "Black chair", price: "$160.34" },
];

import sideimg from "../assets/Loading.png";

import { CiCreditCard1 } from "react-icons/ci";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { IoStar } from "react-icons/io5";
import { BsStar } from "react-icons/bs";

import { Link, Outlet, useLocation } from "react-router-dom";

const Items = () => {
  const navigate = useNavigate();

  // const location = useLocation();
  const { state } = useLocation();
  const { img, title, price } = state || {};

  const { addToCart } = useCart();

  // const handleAddToCart = () => {
  //   const product = { img, title, price };
  //   addToCart(product);
  //   navigate("/cart");
  // };

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");

  const handleAddToCart = () => {
    
    const cartItem = {
      img,
      title,
      price,
      quantity,
      color,
    };

    addToCart(cartItem);
    navigate("/cart");
  };

  return (
    <Layout>
      <div className="px-4 sm:px-8 pt-12 flex flex-wrap items-center text-home_text space-x-2 text-sm sm:text-base">
        <HiOutlineHome
          onClick={() => navigate("/")}
          className="cursor-pointer"
        />
        <TbMathGreater />
        <span onClick={() => navigate("/")} className="cursor-pointer">
          Home
        </span>
        <TbMathGreater />
        <span
          onClick={() => navigate("/learn-more")}
          className="cursor-pointer"
        >
          Collection
        </span>
        <TbMathGreater />
        <span>{title}</span>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 w-full">
        {/* Left Section */}
        <div className="p-4 sm:p-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src={img}
            alt="Main"
            className="w-full max-w-md mx-auto object-contain"
          />

          <div className="flex flex-row lg:flex-col justify-center gap-4 lg:space-y-4">
            <img
              src={sideimg}
              alt="Side 1"
              className="w-20 h-20 object-cover"
            />
            <img
              src={sideimg}
              alt="Side 2"
              className="w-20 h-20 object-cover"
            />
            <img
              src={sideimg}
              alt="Side 3"
              className="w-20 h-20 object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="p-4 sm:p-8 w-full space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0">
            <span className="font-cormorant text-3xl sm:text-5xl">{title}</span>
            <span className="text-lg sm:text-xl font-medium">{price}</span>
          </div>

          <div className="flex space-x-1 text-xl">
            {[...Array(5)].map((_, i) => (
              <IoStar key={i} className="text-blue-600" />
            ))}
          </div>

          <p className="text-color pt-2 sm:pt-5 text-sm sm:text-base">
            Dolor purus non enim praesent. At quis risus sed vulputate odio ut.
            Quis risus sed vulputate odio ut enim volutpat. Ornare arcu odio ut
            sem nulla pharetra diam sit. Augue neque gravida in fermentum et
            sollicitudin ac orci phasellus.
          </p>

          {/* Color Selector */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="color" className="font-semibold">
              Color
            </label>
            <select
              id="color"
              className="border py-2 px-5 rounded-lg w-32 focus:outline-none text-color hover:border-blue-800"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="white" className="text-color">
                White
              </option>
              <option value="black" className="text-color">
                Black
              </option>
              <option value="blue" className="text-color">
                Blue
              </option>
              <option value="green" className="text-color">
                Green
              </option>
            </select>
          </div>

          {/* Quantity Selector */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="quantity" className="font-semibold">
              Quantity
            </label>
            <select
              id="quantity"
              className="border py-2 px-3 w-20 rounded-lg text-color focus:outline-none hover:border-blue-800"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              {[1, 2, 3, 4].map((qty) => (
                <option key={qty} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart */}
          <div className="pt-4 sm:pt-10">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-5 py-3 w-full sm:w-60 rounded-lg flex items-center justify-center space-x-2 hover:opacity-70"
            >
              <FiShoppingCart className="text-lg" />
              <span>Add to Cart</span>
            </button>
          </div>

          {/* Info Row */}
          <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 text-color">
            <div className="flex space-x-3 items-center text-sm sm:text-base">
              <CiCreditCard1 className="mt-1 text-lg text-black"/>
              <p>Pay in 21 days</p>
            </div>
            <div className="flex space-x-3  text-sm sm:text-base">
              <SlReload className="rotate-180 mt-1  text-black" />
              <p>30 days return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pb-5 text-color px-12">
        <div className="flex space-x-12">
          <Link
            to="details"
            className={`hover:underline underline-offset-[25px] hover:cursor-pointer decoration-blue-500 ${
              location.pathname.includes("details")
                ? "underline text-blue-500"
                : ""
            }`}
          >
            Details
          </Link>
          <Link
            to="reviews"
            className={`hover:underline underline-offset-[25px] hover:cursor-pointer decoration-blue-500 ${
              location.pathname.includes("reviews")
                ? "underline text-blue-500"
                : ""
            }`}
          >
            Reviews
          </Link>
        </div>
      </div>
      <div className="border-t-2 mx-10 space-y-5">
        <Outlet />
      </div> */}

      <div className="py-20 text-center border-t-2 md:pb-[600px]">
        <span className="text-3xl md:text-7xl font-cormorant ">
          Popular Collection
        </span>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 py-16 px-16 cursor-pointer">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                navigate("/Items", {
                  state: {
                    img: item.image,
                    title: item.title,
                    price: item.price,
                  },
                })
              }
              className="flex flex-col hover:opacity-50"
            >
              <img src={item.image} alt={item.title} />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">{item.title}</span>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Items;
