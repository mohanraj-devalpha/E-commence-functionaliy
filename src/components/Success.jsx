import React from "react";
import { useNavigate } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";
import Layout from "./Layout";

const Success = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[80vh] px-4">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-xl text-center space-y-6">
          <div className="flex items-center justify-center text-green-500 text-6xl">
            <TiTickOutline />
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold">Payment Successful!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. A confirmation email has been sent to your inbox.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
