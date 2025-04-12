import React, { useState } from "react";
import Sofa from "../assets/sofa.jpg";
import persons from "../assets/persons.webp";
import { CiSearch } from "react-icons/ci";
import { CgMenu, CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const NavbarIn = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false); // Close menu on navigation
  };

  return (
    <div className="w-full sticky top-0 z-20 bg-white border-b-2 px-4 sm:px-8 py-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Navigation */}
        <nav className="hidden md:flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-8 font-home text-home_text">
          <span onClick={() => handleNavigate("/")} className="md:hover:underline underline-offset-[30px] cursor-pointer decoration-blue-500 hover:text-zinc-300">Home</span>
          <span onClick={() => handleNavigate("/learn-more")} className="md:hover:underline underline-offset-[30px] cursor-pointer decoration-blue-500 hover:text-zinc-300">Collection</span>
          <span onClick={() => handleNavigate("/Cart")} className="md:hover:underline underline-offset-[30px] cursor-pointer decoration-blue-500 hover:text-zinc-300">Cart</span>
          <span onClick={() => handleNavigate("/contact")} className="md:hover:underline underline-offset-[30px] cursor-pointer decoration-blue-500 hover:text-zinc-300">Contact</span>
        </nav>

        {/* Hamburger Menu Icon */}
        <div className="flex md:hidden justify-between w-full">
          <img src={Sofa} alt="Sofa" className="h-10 object-contain" />
          <button onClick={handleToggle}>
            {isMobileMenuOpen ? (
              <CgClose className="text-3xl text-home_text" />
            ) : (
              <CgMenu className="text-3xl text-home_text" />
            )}
          </button>
        </div>

        {/* Center Logo (for md and up) */}
        <div className="hidden md:block">
          <img src={Sofa} alt="Sofa" className="h-10 object-contain" />
        </div>

        {/* Right Navigation */}
        <nav className="hidden md:flex items-center space-x-4 font-home text-home_text">
          <span className="hover:text-zinc-300 cursor-pointer">Shops</span>
          <span className="hover:text-zinc-300 cursor-pointer">Accounts</span>
          <CiSearch className="hover:text-zinc-300 text-2xl cursor-pointer" />
          <img src={persons} alt="profile" className="w-8 h-8 rounded-full object-cover" />
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 text-home_text font-home">
          <span onClick={() => handleNavigate("/")} className="cursor-pointer hover:text-zinc-300">Home</span>
          <span onClick={() => handleNavigate("/learn-more")} className="cursor-pointer hover:text-zinc-300">Collection</span>
          <span onClick={() => handleNavigate("/Cart")} className="cursor-pointer hover:text-zinc-300">Cart</span>
          <span onClick={() => handleNavigate("/contact")} className="cursor-pointer hover:text-zinc-300">Contact</span>
          <span className="cursor-pointer hover:text-zinc-300">Shops</span>
          <span className="cursor-pointer hover:text-zinc-300">Accounts</span>
          <CiSearch className="text-2xl cursor-pointer hover:text-zinc-300" />
          <img src={persons} alt="profile" className="w-8 h-8 rounded-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default NavbarIn;
