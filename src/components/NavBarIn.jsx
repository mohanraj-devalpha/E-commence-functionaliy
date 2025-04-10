// components/NavbarIn.jsx
import React from "react";
import Sofa from "../assets/sofa.jpg";
import persons from "../assets/persons.webp";
import { CiSearch } from "react-icons/ci";
import { CgSearch } from "react-icons/cg";
import { TbMapSearch } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

const NavbarIn = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full sticky top-0 z-20 bg-white border-b-2 px-4 sm:px-8 py-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-8 font-home text-home_text">
          <span
            onClick={() => navigate("/")}
            className="md:hover:underline underline-offset-[30px] cursor-pointer decoration-blue-500 hover:text-zinc-300"
          >
            Home
          </span>
          <span
            onClick={() => navigate("/learn-more")}
            className="md:hover:underline underline-offset-[30px] cursor-pointer decoration-blue-500 hover:text-zinc-300"
          >
            Collection
          </span>
          <span
            onClick={() => navigate("/Cart")}
            className="md:hover:underline underline-offset-[30px] cursor-pointer decoration-blue-500 hover:text-zinc-300"
          >
            Cart
          </span>
          <span
            onClick={() => navigate("/contact")}
            className="md:hover:underline underline-offset-[30px] cursor-pointer decoration-blue-500 hover:text-zinc-300"
          >
            Contact
          </span>
        </nav>

        {/* Center Logo */}
        <div className="hidden md:block">
          <img src={Sofa} alt="Sofa" className="h-10 object-contain" />
        </div>

        {/* Right Navigation */}
        <nav className="flex items-center space-x-4 font-home text-home_text">
          <span className="hover:text-zinc-300 cursor-pointer">Shops</span>
          <span className="hover:text-zinc-300 cursor-pointer">Accounts</span>
          <CiSearch className="hover:text-zinc-300 text-2xl cursor-pointer" />
          <img
            src={persons}
            alt="profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </nav>
      </div>
    </div>
  );
};

export default NavbarIn;
