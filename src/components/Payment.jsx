import React, { useEffect } from "react";
import Layout from "./Layout";
import { useCart } from "./CartContext.jsx";
import { useForm } from "react-hook-form";
import { PiGreaterThanLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";

const Payment = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("✅ Valid Form Data:", data);
    navigate("/payment");
  };

  useEffect(() => {
    fetch("/config")
      .then(async (r) => {
        const { publishableKey } = await r.json();
        console.log("Stripe Publishable Key:", publishableKey);
      })
      .catch((error) => console.error("Error fetching config:", error));
  }, [])

  useEffect(() => {
    fetch("/create-payment-intent",
       {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      console.log(clientSecret);
      
    });
  }, []);


  const VAT = 10.55;
  const subtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.totalPrice || 0), 0);
  const total = subtotal > 0 ? (subtotal + VAT).toFixed(2) : "000.00";

  return (
    <Layout>
      <div className="grid grid-cols-1 xl:grid-cols-2">
        <div className="p-5 md:p-10 space-y-5">
          <div className="space-x-4 text-color flex items-center text-sm sm:text-base">
            <TiHomeOutline onClick={() => navigate("/learn-more")} className="cursor-pointer" />
            <span onClick={() => navigate("/Cart")} className="cursor-pointer">Cart</span>
            <PiGreaterThanLight />
            <span className="cursor-pointer">Shipping</span>
            <PiGreaterThanLight />
            <span onClick={() => navigate("/payment")} className="cursor-pointer text-black">Payment</span>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="text-start space-y-4">
            <h1 className="text-2xl sm:text-3xl">Payment</h1>
            <p className="text-color">All transactions are secure and encrypted</p>

            <input
              type="text"
              placeholder="Select a Credit Card"
              className="border rounded-lg w-full p-2 focus:outline-none"
              {...register("card", { required: "Card selection is required" })}
            />
            {errors.card && <p className="text-red-500 text-sm">{errors.card.message}</p>}

            <input
              type="text"
              placeholder="Card number"
              className="border rounded-lg w-full p-2 focus:outline-none"
              {...register("number", {
                required: "Card number is required",
                pattern: {
                  value: /^\d{16}$/,
                  message: "Card number must be 16 digits"
                }
              })}
            />
            {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}

            <input
              type="text"
              placeholder="Name on card"
              className="border rounded-lg w-full p-2 focus:outline-none"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Expiration Date (MM/YY)"
                  className="border rounded-lg w-full p-2 focus:outline-none"
                  {...register("date", {
                    required: "Expiration date is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: "Use format MM/YY"
                    }
                  })}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Security Code"
                  className="border rounded-lg w-full p-2 focus:outline-none"
                  {...register("code", {
                    required: "Security code is required",
                    pattern: {
                      value: /^\d{3,4}$/,
                      message: "Enter a 3 or 4 digit code"
                    }
                  })}
                />
                {errors.code && <p className="text-red-500 text-sm mt-1">{errors.code.message}</p>}
              </div>
            </div>

            <div className="flex items-center space-x-2 p-2">
              <input type="checkbox" className="w-5 h-5 border focus:outline-none" />
              <span className="text-check">Save for next purchase</span>
            </div>

            <h2 className="text-xl sm:text-2xl">Billing address</h2>
            <p className="text-color">Select the address that matches your card or payment method</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="bg-black text-white px-5 py-3 rounded-lg">
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
            <div key={item.id || i} className="py-5 flex flex-col sm:flex-row sm:justify-between border-b">
              <div className="flex gap-5">
                <div className="w-24 h-24 rounded overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <span className="text-lg font-semibold w-5">{item.title}</span>
                  <div className="text-sm text-color space-x-2">
                    <span>Quantity <span className="text-black">{item.quantity}</span></span>
                    <span>|</span>
                    <span>Color <span className="text-black">{item.color}</span></span>
                  </div>
                </div>
              </div>
              <span className="mt-3 sm:mt-0 font-medium">${item.totalPrice}</span>
            </div>
          ))}

          {/* Promo Code */}
          <div className="p-5 flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Promo Code" className="border rounded-lg w-full p-2" />
            <button className="bg-black text-white w-full sm:w-1/4 rounded-lg p-2">Apply</button>
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
