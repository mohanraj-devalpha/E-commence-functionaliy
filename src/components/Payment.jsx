import React, { useEffect } from "react";
import Layout from "./Layout";
import { useCart } from "./CartContext.jsx";
import { useForm } from "react-hook-form";
import { PiGreaterThanLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const stripe = useStripe();
  const elements = useElements();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!stripe || !elements) return;
    console.log("yes the block is running")
  
    const res = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: parseInt(total*100), // Convert to cents
        
      }),
      
    });
  
    const { clientSecret } = await res.json();
  
    const cardElement = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: data.name,
        },
      },
    });
  
    if (error) {
      console.error("❌ Payment failed:", error.message);
    } else {
      console.log("✅ Payment successful:", paymentIntent);
      navigate("/success");
    }
  };
  

  const VAT = 10.55;
  const subtotal = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.totalPrice || 0),
    0
  );
  const total = subtotal > 0 ? (subtotal + VAT).toFixed(2) : "000.00";

  return (
    <Layout>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="p-5 md:p-10 space-y-5">
          <div className="space-x-4 text-color flex items-center text-sm sm:text-base">
            <TiHomeOutline
              onClick={() => navigate("/learn-more")}
              className="cursor-pointer"
            />
            <span onClick={() => navigate("/Cart")} className="cursor-pointer">
              Cart
            </span>
            <PiGreaterThanLight />
            <span className="cursor-pointer">Shipping</span>
            <PiGreaterThanLight />
            <span className="cursor-pointer text-black">Payment</span>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-start space-y-4"
          >
            <h1 className="text-2xl sm:text-3xl">Payment</h1>
            <p className="text-color">
              All transactions are secure and encrypted
            </p>

            <input
              type="text"
              placeholder="Name on card"
              className="border rounded-lg w-full p-2 focus:outline-none"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}

            <div className="p-4 border rounded-lg bg-white">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </div>

            <div className="flex items-center space-x-2 p-2">
              <input
                type="checkbox"
                className="w-5 h-5 border focus:outline-none"
              />
              <span className="text-check">Save for next purchase</span>
            </div>

            <h2 className="text-xl sm:text-2xl">Billing address</h2>
            <p className="text-color">
              Select the address that matches your card or payment method
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="bg-black text-white px-5 py-3 rounded-lg"
              >
                Pay now
              </button>
              <button
                type="button"
                onClick={() => navigate("/checkout")}
                className="text-black px-5 py-3 border rounded-lg"
              >
                Return to Shipping
              </button>
            </div>
          </form>
        </div>

        <div className="bg-slate-100 p-5 md:p-10">
          <div className="border-b pb-5">
            <span className="text-xl font-medium">Your cart</span>
          </div>

          {cartItems.map((item, i) => (
            <div
              key={item.id || i}
              className="py-5 flex flex-col sm:flex-row sm:justify-between border-b"
            >
              <div className="flex gap-5">
                <div className="w-24 h-24 rounded overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-lg font-semibold w-5">{item.title}</span>
                  <div className="text-sm text-color space-x-2">
                    <span>
                      Quantity <span className="text-black">{item.quantity}</span>
                    </span>
                    <span>|</span>
                    <span>
                      Color <span className="text-black">{item.color}</span>
                    </span>
                  </div>
                </div>
              </div>
              <span className="mt-3 sm:mt-0 font-medium">
                ${item.totalPrice}
              </span>
            </div>
          ))}

          {/* Promo Code */}
          <div className="p-5 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Promo Code"
              className="border rounded-lg w-full p-2"
            />
            <button className="bg-black text-white w-full sm:w-1/4 rounded-lg p-2">
              Apply
            </button>
          </div>

          {/* Price Summary */}
          <div className="border-t pt-5 space-y-3 px-5 text-sm sm:text-base">
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>VAT</span>
              <span>$ {VAT.toFixed(2)}</span>
            </div>
          </div>

          {/* Total */}
          <div className="border-t pt-5 px-5">
            <div className="flex justify-between font-semibold text-xl">
              <span>Total</span>
              <span>$ {total}</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
