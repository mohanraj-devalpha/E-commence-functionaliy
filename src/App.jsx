import React from "react";
// import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./components/Collection.jsx";
import Items from "./components/Items.jsx";

import Cart from "./components/Cart.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import CheckOut from "./components/CheckOut.jsx";
import Contact from "./components/Contact.jsx";
import Payment from "./components/Payment.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import StripeWrapper from "./components/StripeWrapper.jsx";
import Success from "./components/Success.jsx";
import Chatbot from "./components/chatbot.jsx"; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn-more" element={<Collection />} />
          <Route path="/items" element={<Items />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<StripeWrapper><Payment /></StripeWrapper>} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <Chatbot />
      </Router>
    </CartProvider>
  );
};

export default App;
