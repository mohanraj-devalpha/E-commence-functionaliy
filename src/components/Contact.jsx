import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-slate-100 text-center space-y-5 py-10 mb-[680px]">
        <div>{/* <img src={} alt="" /> */}</div>
        <div>
          <span className="text-7xl font-cormorant">Contact Us</span>
          <p className="text-contact text-base">
            love talking to our customers and are here to help. Please use one
            of the methods below to get in touch
          </p>
        </div>
        <div className="flex flex-col text-contact">
          <span className="text-blue-500 text-lg">hello@furniturehome.com</span>
          <span>(877)-1404-6763</span>
          <span>M-F 9am - 5:30pm EST</span>
          <span>18 North Water St, Suite 55</span>
          <span>Lancaster, PA 17603 (by appointment only)</span>
        </div>
      </div>
      <div className="absolute top-[410px] md:top-[360px] left-0 w-full flex flex-col justify-center items-center py-10">
        <div className="space-y-3 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4">
          <input
            type="text"
            placeholder="Email"
            className="border-2 rounded-lg w-full p-2 hover:border-blue-500"
          />
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
            <input
              type="text"
              placeholder="First name"
              className="border-2 rounded-lg w-full sm:w-1/2 p-2 hover:border-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border-2 rounded-lg w-full sm:w-1/2 p-2 hover:border-blue-500"
            />
          </div>

          <input
            type="text"
            placeholder="Address"
            className="border-2 rounded-lg w-full p-2 hover:border-blue-500"
          />
          <input
            type="text"
            placeholder="Product/Order inquiry"
            className="border-2 rounded-lg w-full p-2 hover:border-blue-500"
          />
          <input
            type="text"
            placeholder="Address"
            className="border-2 rounded-lg w-full p-2 hover:border-blue-500"
          />
          <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
            <input
              type="text"
              placeholder="Mobile Phone (optional)"
              className="border-2 rounded-lg w-full sm:w-1/2 p-2 hover:border-blue-500"
            />
            <input
              type="text"
              placeholder="Phone (optional)"
              className="border-2 rounded-lg w-full sm:w-1/2 p-2 hover:border-blue-500"
            />
          </div>

          <input
            type="text"
            placeholder="Message"
            className="border-2 rounded-lg w-full p-2 pb-40 hover:border-blue-500"
          />

          <button className="bg-black text-white px-10 py-3 rounded-lg hover:border-yellow-500 hover:opacity-70 w-full sm:w-auto">
            Send
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
