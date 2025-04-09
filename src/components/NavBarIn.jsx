// components/NavbarIn.jsx
import React from "react";
import Sofa from "../assets/Sofa.jpg";
import persons from "../assets/persons.webp";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const NavbarIn = () => {
   const navigate = useNavigate();
  return (
    <div className="flex w-full pt-10 justify-center space-x-80 sticky top-0 z-20 bg-white border-b-2 px-28">
      <nav className="space-x-10 font-home text-home_text hover:text-hover_home">
        <span  onClick={() => navigate("/")}   className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-blue-500">Home</span>
        <span  onClick={() => navigate("/learn-more")}  className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-blue-500">Collection</span>
        <span onClick={() => navigate("/Cart") } className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-blue-500">Cart</span>
        <span onClick={() => navigate("/contact") } className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-blue-500">Contact</span>
      </nav>
      <img src={Sofa} alt="Sofa" />
      <nav className="space-x-5 flex text-home_text">
        <span className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-blue-500">Shops</span>
        <span className="hover:underline underline-offset-[20px] hover:cursor-pointer decoration-blue-500">Accounts</span>
        <CiSearch className="" />
        <img src={persons} alt="profile" className="w-7 h-7 rounded-full" />
      </nav>
    </div>
  );
};

export default NavbarIn;
