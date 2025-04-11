import React from "react";
import Layout from "./Layout";
import item1 from "../assets/collection_101.png";
import item2 from "../assets/collection_102.png";
import { useCart } from "./CartContext.jsx";
import { useForm } from "react-hook-form";

import item3 from "../assets/collection_103.png";
import item4 from "../assets/collection_104.png";
import item5 from "../assets/collection_105.png";
import item6 from "../assets/collection_106.png";
import item7 from "../assets/collection_107.png";
import item8 from "../assets/collection_108.png";
import { PiGreaterThanLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { TiHomeOutline } from "react-icons/ti";

const checkout = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/payment");
  };

  const VAT = 10.55;

  const subtotal = cartItems.reduce((acc, item) => {
    return acc + parseFloat(item.totalPrice || 0);
  }, 0);

  const total = subtotal > 0 ? (subtotal + VAT).toFixed(2) : "000.00";

  return (
    <Layout>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="p-5 md:p-10 space-y-5">
          <div className="space-x-4 text-color flex items-center text-sm sm:text-base">
            <TiHomeOutline
              onClick={() => navigate("/learn-more")}
              className="cursor-pointer"
            />
            <span onClick={() => navigate("/Cart")} className="cursor-pointer">
              Cart
            </span>
            <PiGreaterThanLight />
            <span className="text-black">Shipping</span>
            <PiGreaterThanLight />
            <span
              onClick={() => navigate("/payment")}
              className="cursor-pointer"
            >
              Payment
            </span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-start space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl">Contact Information</h1>

            <input
              type="email"
              placeholder="Email"
              className="border rounded-lg w-full p-2 focus:outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <div className="flex items-center space-x-2 p-2">
              <input type="checkbox" className="w-5 h-5 border" />
              <span className="text-check">Email me with news and offers</span>
            </div>

            <h2 className="text-xl sm:text-2xl">Shipping</h2>
            <input
              type="text"
              placeholder="Country/Region"
              className="border rounded-lg w-full p-2 focus:outline-none"
              {...register("country")}
            />

            <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="border rounded-lg w-full p-2 focus:outline-none"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <input
                type="text"
                placeholder=" Last name"
                className="border rounded-lg w-full p-2 focus:outline-none"
                {...register("lasstName")}
              />
              
            </div>

            <input
              type="text"
              placeholder="Address"
              className="border rounded-lg w-full p-2 focus:outline-none"
              {...register("address")}
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="border rounded-lg w-full p-2 focus:outline-none"
              {...register("apartment")}
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border rounded-lg w-full p-2 focus:outline-none"
                  {...register("postalCode", {
                    required: "Postal code is required",
                    pattern: {
                      value: /^[0-9]{4,10}$/,
                      message: "Invalid postal code",
                    },
                  })}
                />
              </div>

              <div className="w-full">
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded-lg w-full p-2 focus:outline-none"
                  {...register("city", { required: "City is required" })}
                />
              </div>
            </div>

            {/* Side-by-side error messages */}
            <div className="flex flex-col sm:flex-row gap-4 mt-1">
              <div className="w-full">
                {errors.postalCode && (
                  <p className="text-red-500 text-sm">
                    {errors.postalCode.message}
                  </p>
                )}
              </div>
              <div className="w-full">
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 p-2">
              <input type="checkbox" className="w-5 h-5 border focus:outline-none" />
              <span className="text-check">Save for next purchase</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="bg-black text-white px-5 py-3 rounded-lg"
              >
                Continue to payment
              </button>
              <button
                type="button"
                onClick={() => navigate("/Cart")}
                className="text-black px-5 py-3 border rounded-lg"
              >
                Return to cart
              </button>
            </div>
          </form>
        </div>

        <div className="bg-slate-100 p-5 md:p-10">
          <div className="border-b pb-5">
            <span className="text-xl font-medium">Your cart</span>
          </div>

          {cartItems.map((item, i) => (
            <div
              key={item.id || i}
              className="py-5 flex flex-col sm:flex-row sm:justify-between border-b"
            >
              <div className="flex gap-5">
                <div className="w-24 h-24 rounded overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-lg font-semibold w-5">
                    {item.title}
                  </span>
                  <div className="text-sm text-color space-x-2">
                    <span>
                      Quantity{" "}
                      <span className="text-black">{item.quantity}</span>
                    </span>
                    <span>|</span>
                    <span>
                      Color <span className="text-black">{item.color}</span>
                    </span>
                  </div>
                </div>
              </div>
              <span className="mt-3 sm:mt-0 font-medium">
                ${item.totalPrice}
              </span>
            </div>
          ))}

          {/* Promo Code */}
          <div className="p-5 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="border rounded-lg w-full p-2"
            />
            <button className="bg-black text-white w-full sm:w-1/4 rounded-lg p-2">
              Apply
            </button>
          </div>

          {/* Price Summary */}
          <div className="border-t pt-5 space-y-3 px-5 text-sm sm:text-base">
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>VAT</span>
              <span>$ {VAT.toFixed(2)}</span>
            </div>
          </div>

          {/* Total */}
          <div className="border-t pt-5 px-5">
            <div className="flex justify-between font-semibold text-xl">
              <span>Total</span>
              <span>$ {total}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default checkout;
