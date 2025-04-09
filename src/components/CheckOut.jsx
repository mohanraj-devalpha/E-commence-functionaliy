import React from "react";
import Layout from "./Layout";
import item1 from "../assets/collection_101.png";
import item2 from "../assets/collection_102.png";
import item3 from "../assets/collection_103.png";
import item4 from "../assets/collection_104.png";
import item5 from "../assets/collection_105.png";
import item6 from "../assets/collection_106.png";
import item7 from "../assets/collection_107.png";
import item8 from "../assets/collection_108.png";
import { PiGreaterThanLight } from "react-icons/pi";

import { TiHomeOutline } from "react-icons/ti";

const checkout = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2">
        <left className=" p-10 space-y-5">
          <div className="space-x-4 text-color flex items-center">
            <TiHomeOutline />
            <span>Cart</span>
            <PiGreaterThanLight />
            <span className="text-black">shipping</span>
            <PiGreaterThanLight />
            <span>Payment</span>
          </div>

          {/* contact */}
          <div className="text-start space-y-2">
            <h1 className="text-3xl">Contact Information</h1>
            <input
              type="Email"
              placeholder="Email"
              className="border-2 rounded-lg w-full p-2"
            />
            <div className="flex items-center space-x-2 p-2">
              <input type="checkbox" className="w-5 h-5 border-2" />
              <span className="text-check">Email me with news and offers</span>
            </div>
            <div className="text-start space-y-4">
              <h1 className="text-2xl">Shipping</h1>
              <input
                type="text"
                placeholder="Country/Region"
                className="border-2 rounded-lg w-full p-2"
              />
              <div className="flex space-x-5">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="border-2 rounded-lg w-1/2 p-2"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border-2 rounded-lg w-1/2 p-2"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="border-2 rounded-lg w-full p-2"
              />
              <input
                type="text"
                placeholder="Appartment,suite,etc (optional)"
                className="border-2 rounded-lg w-full p-2"
              />
              <div className="flex space-x-5">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="border-2 rounded-lg w-1/2 p-2"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border-2 rounded-lg w-1/2 p-2"
                />
              </div>
              <div className="flex items-center space-x-2 p-2">
                <input type="checkbox" className="w-5 h-5 border-2" />
                <span className="text-check">Save for next pruchase</span>
              </div>
            </div>
          </div>
          {/* shipping */}
          <div className="flex space-x-3">
            <button className="bg-black text-white px-5 py-3 h-12  rounded-lg">
              continute to payment
            </button>
            <button className=" text-black px-5 py-3 h-12 rounded-lg border-2">
              Return to cart
            </button>
          </div>
        </left>

        <right className="bg-slate-100 p-10">
          <div className="border-b-2 pb-7">
            <span className="text-xl">Your cart</span>
          </div>
          <div className="py-5 flex justify-between border-b-2">
            <div className="flex space-x-5">
              <img src={item1} alt="" className="w-24 h-24" />
              <div className="space-y-3">
                <span className="text-xl font-semibold">Pottery vase</span>
                <div className="space-x-3">
                  <span className="text-color">
                    Quantity <span className="text-black">1</span>{" "}
                  </span>
                  <span>|</span>
                  <span className="text-color">
                    Color white <span className="text-black">White</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span>$987987</span>
            </div>
          </div>
          <div className="py-5 flex justify-between border-b-2">
            <div className="flex space-x-5">
              <img src={item1} alt="" className="w-24 h-24" />
              <div className="space-y-3">
                <span className="text-xl font-semibold">Pottery vase</span>
                <div className="space-x-3">
                  <span className="text-color">
                    Quantity <span className="text-black">1</span>{" "}
                  </span>
                  <span>|</span>
                  <span className="text-color">
                    Color white <span className="text-black">White</span>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span>$987987</span>
            </div>
          </div>
          <div className="p-5 flex space-x-3">
            <input
              type="text"
              placeholder="Promo Code"
              className="border-2 rounded-lg w-3/4 p-2"
            />
            <button className=" bg-black text-white w-1/4  rounded-xl">
              Apply
            </button>
          </div>
          <div className="border-t-2 py-10 space-y-3 px-5 ">
            {/* Subtotal */}
            <div className="flex justify-between font-medium ">
              <span>Subtotal</span>
              <span>$345345</span>
            </div>

            {/* Shipping */}
            <div className="flex justify-between font-medium ">
              <span>Shipping</span>
              <span>free</span>
            </div>

            {/* VAT */}
            <div className="flex justify-between font-medium ">
              <span>VAT</span>
              <span>$34634</span>
            </div>
          </div>
          <div className="border-t-2 py-10 px-5">
            {/* Total */}
            <div className="flex justify-between font-medium text-2xl">
              <span>Total</span>
              <span>$45345</span>
            </div>
          </div>
        </right>
      </div>
    </Layout>
  );
};

export default checkout;
