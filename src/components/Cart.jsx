import React from "react";
import Layout from "./Layout";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { TbLocationShare } from "react-icons/tb";
import { IoWarningOutline } from "react-icons/io5";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { PiGreaterThanLight } from "react-icons/pi";
import { TbMathGreater } from "react-icons/tb";

const Cart = () => {
  const navigate = useNavigate();

  const { cartItems, removeFromCart, updateQuantity, updateColor } = useCart();
  const VAT = 10.55;

  const subtotal = cartItems.reduce((acc, item) => {
    const itemTotal =
      parseFloat(item.price?.replace(/[^0-9.]/g, "")) * (item.quantity || 1);
    return acc + itemTotal;
  }, 0);

  const total = subtotal > 0 ? (subtotal + VAT).toFixed(2) : "000.00";

  return (
    <Layout>
      <div className="text-center py-10 ">
        <div className="flex flex-wrap items-center px-4 sm:px-6 md:px-8 lg:px-12 space-x-1 text-xs sm:text-sm text-color font-poppins">
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
          <span className="text-black cursor-pointer">Cart</span>
        </div>

        <div className="grid grid-rows-2 text-2xl gap-5 py-10 text-center">
          <span className="font-medium text-3xl font-poppins">
            Your cart total is $ {total}
          </span>
          <span className="text-color">Free shipping and return</span>
        </div>

        <div className="flex justify-center pb-10">
          <button
            onClick={() => navigate("/checkout")}
            className="bg-black text-white px-5 py-3 h-12 w-32 rounded-lg flex items-center justify-center space-x-2 text-center cursor-pointer"
          >
            check out
          </button>
        </div>

        {[...cartItems].reverse().map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between gap-6 p-6 border-b"
          >
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              <img
                src={item.img}
                alt={item.title}
                className="w-full sm:w-40 rounded-lg object-cover"
              />
              <div className="space-y-6 flex-1">
                <p className="font-bold text-xl">{item.title}</p>

                <div className="text-gray-600 space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <MdOutlineLocalPostOffice />
                    <span>Order today</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TbLocationShare />
                    <span>Delivery by Dec 23</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoWarningOutline />
                    <span>Only 8 available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap sm:flex-nowrap gap-4 lg:gap-8 items-start lg:items-center justify-between lg:justify-end mt-4 lg:mt-0">
              <div className="space-y-2">
                <label
                  htmlFor={`quantity-${index}`}
                  className="block text-sm font-medium"
                >
                  Quantity
                </label>
                <select
                  id={`quantity-${index}`}
                  value={item.quantity || 1}
                  className="border py-2 px-3 w-24 rounded-lg"
                  onChange={(e) =>
                    updateQuantity(index, parseInt(e.target.value))
                  }
                >
                  {[1, 2, 3, 4].map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor={`color-${index}`}
                  className="block text-sm font-medium"
                >
                  Color
                </label>
                <select
                  id={`color-${index}`}
                  value={item.color || "white"}
                  className="border py-2 px-3 w-32 rounded-lg"
                  onChange={(e) => updateColor(index, e.target.value)}
                >
                  {["white", "black", "blue", "green"].map((color) => (
                    <option key={color} value={color}>
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-right space-y-2">
                <span className="text-xl font-semibold block">
                  $
                  {(
                    parseFloat(item.price?.replace(/[^0-9.]/g, "")) *
                    (item.quantity || 1)
                  ).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(index)}
                  className="border border-red-400 text-red-600 px-4 py-1 rounded-lg text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="border-t-2 py-10 space-y-3 px-5 ">
          {/* Subtotal */}
          <div className="flex justify-between font-medium md:ml-60">
            <span>Subtotal</span>
            <span>$ {subtotal.toFixed(2)}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between font-medium md:ml-60 ">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          {/* VAT */}
          <div className="flex justify-between font-medium md:ml-60 ">
            <span>VAT</span>
            <span>$ {VAT.toFixed(2)}</span>
          </div>
        </div>
        <div className="border-t-2 md:ml-60 py-10 px-5">
          {/* Total */}
          <div className="flex justify-between font-medium text-2xl">
            <span>Total</span>
            <div className="flex flex-col space-y-5 text-end">
              <span>$ {total}</span>
              <button
                onClick={() => navigate("/checkout")}
                className="bg-black text-white px-10 py-3 text-base rounded-lg cursor-pointer font-normal"
              >
                check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
