// components/Layout.jsx
import React from "react";
import NavbarIn from "./NavBarIn.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center relative bg-white">
      <div className="max-w-[1444px] border mx-auto">
        <NavbarIn />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
