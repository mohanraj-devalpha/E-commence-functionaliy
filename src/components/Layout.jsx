// components/Layout.jsx
import React from "react";
import NavbarIn from "./NavBarIn.jsx";
import Footer from "./Footer.jsx";
const Layout = ({ children }) => {
  return (
    <div className="flex justify-center relative bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1444px] border min-h-screen flex flex-col">
        <NavbarIn />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};


export default Layout;
