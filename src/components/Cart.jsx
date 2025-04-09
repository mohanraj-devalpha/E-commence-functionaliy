import React from "react";
import Layout from "./Layout";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { TbLocationShare } from "react-icons/tb";
import { IoWarningOutline } from "react-icons/io5";
import { useCart } from "./CartContext.jsx";
import { useNavigate } from "react-router-dom";

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
        <div className="grid grid-rows-2 text-2xl gap-5 py-10 text-center">
          <span className="font-medium text-3xl font-poppins">
            Your cart total is ${total}
          </span>
          <span className="text-color">Free shipping and return</span>
        </div>

        <div className="flex justify-center pb-10">
          <button 
          onClick={() => navigate("/checkout") }
          className="bg-black text-white px-5 py-3 h-12 w-32 rounded-lg flex items-center justify-center space-x-2 text-center cursor-pointer">
            check out
          </button>
        </div>

        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between p-10 border-b"
          >
            <div className="flex gap-10">
              <img
                src={item.img}
                alt={item.title}
                className="w-44 rounded-lg"
              />
              <div className="space-y-16">
                <p className="font-bold text-xl">{item.title}</p>

                <div className="text-gray-600 space-y-2">
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

            <div className="space-y-3">
              <label
                htmlFor={`quantity-${index}`}
                className="block text-sm font-medium"
              >
                Quantity
              </label>
              <select
                id={`quantity-${index}`}
                value={item.quantity || 1}
                className="border py-2 px-3 w-20 rounded-lg"
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

            <div className="space-y-3">
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

            <div className="space-y-3"></div>

            <div className="space-y-5 text-right flex flex-col">
              <span className="text-2xl font-medium">
                $
                {(
                  parseFloat(item.price?.replace(/[^0-9.]/g, "")) *
                  (item.quantity || 1)
                ).toFixed(2)}
              </span>{" "}
              <button
                onClick={() => removeFromCart(index)}
                className="border border-red-400 text-red-600 px-5 py-1 rounded-lg text-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="border-t-2 py-10 space-y-3 px-5 ">
          {/* Subtotal */}
          <div className="flex justify-between font-medium ml-60">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between font-medium ml-60 ">
            <span>Shipping</span>
            <span>free</span>
          </div>

          {/* VAT */}
          <div className="flex justify-between font-medium ml-60 ">
            <span>VAT</span>
            <span>${VAT.toFixed(2)}</span>
          </div>
        </div>
        <div className="border-t-2 ml-60 py-10 px-5">
          {/* Total */}
          <div className="flex justify-between font-medium text-2xl">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
