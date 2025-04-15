// components/Footer.jsx
import React from "react";
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { LuCopyright } from "react-icons/lu";
import { useForm } from "react-hook-form";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Subscribed with:", data.email);
    // handle submission logic here
  };
  return (
    <>
      <div className="py-10 px-10 md:px-20 border-y-2">
        <div className="flex flex-wrap gap-5 justify-center footer:justify-between text-center  footer:text-start">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 w-full footer:w-96 justify-center">
            <div className="flex flex-col space-y-3">
              <span className="font-bold">Company</span>
              <ul className="space-y-3 text-[#657786] cursor-pointer">
                <li className="hover:text-black">Home</li>
                <li className="hover:text-black">Features</li>
                <li className="hover:text-black">Pricing</li>
                <li className="hover:text-black">FAQs</li>
                <li className="hover:text-black">About</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="font-bold">Resources</span>
              <ul className="space-y-3 text-[#657786] cursor-pointer">
                <li className="hover:text-black">Get started</li>
                <li className="hover:text-black">Learn</li>
                <li className="hover:text-black">Case studies</li>
                <li className="hover:text-black">FAQs</li>
              </ul>
            </div>

            <div className="flex flex-col space-y-3 sm:col-span-2 sm:col-start-1 sm:items-center md:col-span-1 md:col-start-auto">
              <span className="font-bold">Community</span>
              <ul className="space-y-3 text-[#657786] cursor-pointer">
                <li className="hover:text-black">Discard</li>
                <li className="hover:text-black">Events</li>
                <li className="hover:text-black">FAQs</li>
                <li className="hover:text-black">Blog</li>
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-4 w-full footer:w-80 items-center footer:items-start"
          >
            <span className="font-bold">Subscribe to our newsletter</span>
            <p className="text-color">
              Join our community to get weekly updates and unique gifts every
              Friday
            </p>

            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="border py-2 px-3 rounded-lg focus:outline-none hover:border-blue-500 w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <button
              type="submit"
              className="bg-slate-950 text-white px-5 py-1 h-10 w-32 rounded-lg hover:opacity-60"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-wrap gap-5 py-8 justify-between px-8 md:px-16">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <span className="flex space-x-3 items-center text-sm">
            <LuCopyright className="mt-1 text-color" />
            <p className="py-1 text-color">
              2022 Company, Inc. All rights reserved.
            </p>
          </span>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4 text-2xl">
          <ImTwitter className="text-color" />
          <FaInstagram className="text-color" />
          <SiFacebook className="text-color" />
        </div>
      </div>
    </>
  );
};

export default Footer;
