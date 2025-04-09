// components/Footer.jsx
import React from "react";
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <div className="py-10 px-20 border-y-2">
        <div className="flex justify-between">
          <div className="grid grid-cols-3 gap-20">
            <div className="flex flex-col space-y-3">
              <span className="font-bold">Company</span>
              <ul className="space-y-3 text-[#657786]">
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQs</li>
                <li>About</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="font-bold">Resources</span>
              <ul className="space-y-3 text-[#657786]">
                <li>Get started</li>
                <li>Learn</li>
                <li>Case studies</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <span className="font-bold">Community</span>
              <ul className="space-y-3 text-[#657786]">
                <li>Discard</li>
                <li>Events</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-2 w-80">
            <span className="font-bold">Subscribe to our newsletter</span>
            <p className="text-color">
              Join our community to get weekly updates and unique gifts every Friday
            </p>
            <input type="text" placeholder="Email" className="border py-2 px-3 rounded-lg" />
            <button className="bg-black text-white px-5 py-3 h-12 w-36 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex py-10 justify-between px-10">
        <div>
          <span className="flex space-x-5">
            <LuCopyright className="mt-1 text-xl" />
            <p className="py-1 text-xs text-color">
              2022 Company, Inc. All rights reserved.
            </p>
          </span>
        </div>
        <div className="flex space-x-2 text-2xl">
          <ImTwitter className="text-color" />
          <FaInstagram className="text-color" />
          <SiFacebook className="text-color" />
        </div>
      </div>
    </>
  );
};

export default Footer;
