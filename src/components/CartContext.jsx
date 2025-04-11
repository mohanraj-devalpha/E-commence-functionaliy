import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const price = parseFloat(item.price?.replace(/[^0-9.]/g, "")) || 0;
    const quantity = item.quantity || 1;
    const totalPrice = (price * quantity).toFixed(2);
  
    const newItem = {
      ...item,
      price: price.toFixed(2), // Store price as clean number
      quantity,
      totalPrice,
    };
  
    setCartItems((prevItems) => [...prevItems, newItem]);
  };

  

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    const price = parseFloat(updatedItems[index].price || 0);
    updatedItems[index].quantity = newQuantity;
    updatedItems[index].totalPrice = (price * newQuantity).toFixed(2);
    setCartItems(updatedItems);
  };
  

  const updateColor = (index, newColor) => {
    const updatedItems = [...cartItems];
    updatedItems[index].color = newColor;
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart, updateQuantity, updateColor }}
    >
      {children}
    </CartContext.Provider>
  );
};
