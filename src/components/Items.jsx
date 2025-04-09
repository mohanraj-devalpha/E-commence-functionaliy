import React, { useState } from "react";
import Layout from "./Layout.jsx";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";

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
    if (!color) {
      alert("Please select a color");
      return;
    }

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
      <div className="flex  justify-center">
        <div className="p-10 flex space-x-5">
          <img src={img} alt="" className="w-[475px]" />

          <div className="flex flex-col space-y-10 w-36 ">
            <img src={sideimg} alt="" className="" />
            <img src={sideimg} alt="" />
            <img src={sideimg} alt="" />
          </div>
        </div>
        <div className="p-10 w-[565px] space-y-4">
          <div className="flex justify-between">
            <span className="font-cormorant text-5xl">{title}</span>
            <span className="text-xl font-bold pt-3">{price}</span>
          </div>
          <div className="flex space-x-1 text-xl">
            <IoStar className="text-blue-600" />
            <IoStar className="text-blue-600" />
            <IoStar className="text-blue-600" />
            <IoStar className="text-blue-600" />
            <IoStar className="text-blue-600" />
          </div>
          <p className="text-color">
            Dolor purus non enim praesent. At quis risus sed vulputate odio ut.
            Quis risus sed vulputate odio ut enim volutpat. Ornare arcu odio ut
            sem nulla pharetra diam sit. Augue neque gravida in fermentum et
            sollicitudin ac orci phasellus.
          </p>
          <div className="flex flex-col space-y-2">
            <label htmlFor="color" className="font-semibold">
              Color
            </label>
            <select
              id="color"
              className="border py-2 px-3 rounded-lg w-32"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              <option value="" disabled>
                Select color
              </option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>

          {/* Quantity Select */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="quantity" className="font-semibold">
              Quantity
            </label>
            <select
              id="quantity"
              className="border py-2 px-3 w-20 rounded-lg"
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
          <div className="pt-10">
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-5 py-3 h-12 w-60 rounded-lg flex items-center justify-center space-x-2"
            >
              <FiShoppingCart className="text-lg" />
              <span>Add to Cart</span>
            </button>{" "}
          </div>
          <div>
            <button></button>
            <div className="flex space-x-7 text-color">
              <div className="flex space-x-2">
                <CiCreditCard1 className="text-xl" />
                <p>Pay in 21 days</p>
              </div>
              <div className="flex">
                <MdOutlineKeyboardReturn className="text-xl" />
                <p>30 days return Policy</p>
              </div>
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

      <div className="py-20 text-center border-t-2">
        <span className="text-7xl font-cormorant ">Popular Collection</span>
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 py-16 px-16 cursor-pointer">
          {items.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  navigate("/Items", {
                    state: { img: item.image, title: item.title, price: item.price },
                  })
                }
                className="flex flex-col"
              >
                <img src={item.image} alt={item.title} />
                <div className="flex flex-col py-8 text-lg">
                  <span className="font-bold">{item.title}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        {/* <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 py-16 px-16 cursor-pointer">
          <div className="flex flex-col">
            <img src={item3} alt="" className="" />
            <div className="flex flex-col py-8 text-lg">
              <span className="font-bold">Flower Vase</span>
              <span>$29.99</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={item4} alt="" />
            <div className="flex flex-col py-8 text-lg">
              <span className="font-bold">Book Self</span>
              <span>$119.99</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={item5} alt="" />
            <div className="flex flex-col py-8 text-lg">
              <span className="font-bold">Table Chair</span>
              <span>$180.34</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={item6} alt="" />
            <div className="flex flex-col py-8 text-lg">
              <span className="font-bold">Wall Clock</span>
              <span>$20.14</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={item2} alt="" />
            <div className="flex flex-col py-8 text-lg">
              <span className="font-bold">Round table</span>
              <span>$24.99</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={item1} alt="" />
            <div className="flex flex-col py-8 text-lg">
              <span className="font-bold">Pottery Vase</span>
              <span>$24.99</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={item8} alt="" />
            <div className="flex flex-col py-8 text-lg">
              <span className="font-bold">wooden sofa</span>
              <span>$140.22</span>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={item7} alt="" />
            <div className="flex flex-col py-8 text-lg">
              <span className="font-bold">Black chair</span>
              <span>$160.34</span>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Items;
