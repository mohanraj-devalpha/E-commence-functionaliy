import React, { useState } from "react";
import Layout from "./Layout.jsx";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { SlReload } from "react-icons/sl";
import { HiOutlineHome } from "react-icons/hi2";
import { TbMathGreater } from "react-icons/tb";
import Person from "../assets/change.jpg";
import P from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

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
  {
    id: 1,
    image: item3,
    title: "Flower Vase",
    price: "$29.99",
    rating: 2,
    reviewCount: 12,
  },
  {
    id: 2,
    image: item4,
    title: "Book Self",
    price: "$119.99",
    rating: 4.8,
    reviewCount: 34,
  },
  {
    id: 3,
    image: item5,
    title: "Table Chair",
    price: "$180.34",
    rating: 4.9,
    reviewCount: 56,
  },
  {
    id: 4,
    image: item6,
    title: "Wall Clock",
    price: "$20.14",
    rating: 4.2,
    reviewCount: 8,
  },
  {
    id: 5,
    image: item2,
    title: "Round table",
    price: "$24.99",
    rating: 4.0,
    reviewCount: 20,
  },
  {
    id: 6,
    image: item1,
    title: "Pottery Vase",
    price: "$24.99",
    rating: 3,
    reviewCount: 19,
  },
  {
    id: 7,
    image: item8,
    title: "wooden sofa",
    price: "$140.22",
    rating: 5.0,
    reviewCount: 25,
  },
  {
    id: 8,
    image: item7,
    title: "Black chair",
    price: "$160.34",
    rating: 2.3,
    reviewCount: 30,
  },
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
  const { img, title, price, rating = 5.0, reviewCount = 0 } = state || {};

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
        <div className="p-4 sm:p-8 flex flex-col lg:flex-row gap-6">
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={img}
              alt="Main"
              className="w-full max-w-full  h-full "
            />
          </div>

          {/* Side Images */}
          <div className="flex flex-row lg:flex-col justify-center gap-4 w-full lg:w-40">
            {[sideimg, sideimg, sideimg].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Side ${index + 1}`}
                className="w-1/3 lg:w-full object-cover px-5 md:px-0"
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="p-4 sm:p-8 w-full space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between space-y-2 sm:space-y-0">
            <span className="font-cormorant text-3xl sm:text-5xl">{title}</span>
            <span className="text-lg sm:text-xl font-medium">{price}</span>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex space-x-1 text-xl">
              {[...Array(5)].map((_, i) =>
                i < Math.round(rating) ? (
                  <IoStar key={i} className="text-blue-600" />
                ) : (
                  <BsStar key={i} className="text-blue-600" />
                )
              )}
            </div>

            <div className="flex gap-2 text-color text-base font-medium">
              <span>{rating.toFixed(2)}</span>
              <span>|</span>
              <span>{reviewCount}</span>
              <span>Reviews</span>
            </div>
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
          <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-4 sm:space-y-0 text-color pt-5">
            <div className="flex items-center space-x-3 text-sm sm:text-base">
              <CiCreditCard1 className="text-xl text-black" />
              <p>Pay in 21 days</p>
            </div>
            <div className="flex items-center space-x-3 text-sm sm:text-base">
              <SlReload className="text-xl text-black transform rotate-180" />
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

      <div className="pb-5 text-color px-4 sm:px-8 md:px-12">
        <div className="flex flex-wrap sm:space-x-6 space-x-3">
          <p className="hover:underline underline-offset-[25px] hover:cursor-pointer decoration-blue-500">
            Details
          </p>
          <p className="hover:underline underline-offset-[25px] hover:cursor-pointer decoration-blue-500">
            Reviews
          </p>
          <p className="hover:underline underline-offset-[25px] hover:cursor-pointer decoration-blue-500">
            Shipping and Returns
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10 py-10 border-t-2 mx-4 sm:mx-8 md:mx-10">
        <div className="space-y-3 flex-1">
          <span className="text-lg">Share your experience</span>
          <p className="text-color max-w-md">
            Your unique perspective, lessons, and moments of triumph can
            resonate deeply with others. Don't hesitate to contribute your
            story.
          </p>
          <button className="bg-black text-white px-5 py-3 h-12 w-36 rounded-lg">
            Write a review
          </button>
        </div>

        <div className="space-y-2 flex-1">
          <span className="text-color text-3xl sm:text-4xl font-thin">
            <span className="text-black font-bold">190</span> Reviews
          </span>
          <div className="flex space-x-2 text-xl">
            <IoStar className="text-blue-600" />
            <IoStar className="text-blue-600" />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
        </div>

        {/* <div className="flex gap-3 flex-1">
          <div className="flex flex-col">
            <span>5</span>
            <span>4</span>
            <span>3</span>
            <span>2</span>
            <span>1</span>
          </div>
          <div className="space-y-2 mt-1 text-blue-700">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
          </div>
          <div>
            <img src={Bar} alt="" />
            <img src={Bar} alt="" />
            <img src={Bar} alt="" />
            <img src={Bar} alt="" />
            <img src={Bar} alt="" />
          </div>
          <div className="flex flex-col">
            <span>75%</span>
            <span>50%</span>
            <span>20%</span>
            <span>40%</span>
            <span>30%</span>
          </div>
        </div> */}
      </div>

      {/* Review Item */}
      {[Person, P, p3].map((img, i) => {
        const names = ["Robert Fox", "Savannah Williams", "Kathryn Murphy"];
        const ratings = [4, 4, 5];
        const reviews = [
          `Absolutely captivated by the minimalist aesthetic in this decor! The clean lines, neutral tones, and thoughtfully placed elements create such a serene and inviting atmosphere that's hard to resist.`,
          `Wow, that vintage-inspired furniture is an absolute game-changer. The seamless blend of old-world charm with contemporary elements is nothing short of pure genius, bringing a unique character that immediately catches the eye.`,
          `can't help but marvel at the skillful use of the vibrant color scheme in this space. It adds an incredible amount of energy, and each shade seems to have its own story. It injects so much personality into the room that I'm now genuinely motivated to embark on my own home revamp journey!`,
        ];

        return (
          <div
            key={i}
            className="flex flex-col md:flex-row mx-4 sm:mx-8 md:mx-10 mt-10 border-t-2 pt-5 gap-4"
          >
            <div className="flex flex-col space-y-6 flex-1">
              <div className="flex space-x-5">
                <img
                  src={img}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex flex-col text-color">
                  <span className="text-black text-xl">{names[i]}</span>
                  <span>February 3, 2023</span>
                </div>
              </div>
              <p className="text-color">{reviews[i]}</p>
            </div>
            <div className="flex text-blue-700 items-center space-x-2 mt-4 md:mt-0">
              {[...Array(ratings[i])].map((_, idx) => (
                <IoStar key={idx} />
              ))}
              {[...Array(5 - ratings[i])].map((_, idx) => (
                <BsStar key={idx} />
              ))}
              <span>{ratings[i]}</span>
            </div>
          </div>
        );
      })}

      <div className="py-20 text-center pt-20 ">
        <span className="text-3xl md:text-7xl font-cormorant ">
          Popular Collection
        </span>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3 py-16 px-16 cursor-pointer">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                navigate("/Items", {
                  state: {
                    img: item.image,
                    title: item.title,
                    price: item.price,
                    rating: item.rating,
                    reviewCount: item.reviewCount,
                  },
                });

                // Scroll to top manually
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
