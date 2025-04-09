import React from "react";
import Layout from "./Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="bg-slate-100 text-center space-y-5 py-20">
        <div>
          <span className="text-7xl font-cormorant">Contact Us</span>
          <p className="text-check">
            love talking to our customers and are here to help. Please use one
            of the methods below to get in touch
          </p>
        </div>
        <div className="flex flex-col text-color">
          <span className="text-blue-500 text-lg">hello@furniturehome.com</span>
          <span>(877)-1404-6763</span>
          <span>M-F 9am - 5:30pm EST</span>
          <span>18 North Water St, Suite 55</span>
          <span>Lancaster, PA 17603 (by appointment only)</span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center py-10 items-center ">
        <div className="space-y-3 w-[560px]">
        <input
          type="text"
          placeholder="Email"
          className="border-2 rounded-lg w-full p-2"
        />
        <div className="flex space-x-3">
        <input
          type="text"
          placeholder="First name"
          className="border-2 rounded-lg w-1/2 p-2"
        />
        <input
          type="text"
          placeholder="Last name"
          className="border-2 rounded-lg w-1/2 p-2"
        />

        </div>
        
        <input
          type="text"
          placeholder="Address"
          className="border-2 rounded-lg w-full p-2"
        />
         <input
          type="text"
          placeholder="Product/Order inquiry"
          className="border-2 rounded-lg w-full p-2"
        /> <input
        type="text"
        placeholder="Address"
        className="border-2 rounded-lg w-full p-2"
      />
      <div className="flex space-x-3">
        <input
          type="text"
          placeholder="Mobile Phone (optional)"
          className="border-2 rounded-lg w-1/2 p-2"
        />
        <input
          type="text"
          placeholder="Phone (optional)"
          className="border-2 rounded-lg w-1/2 p-2"
        />
        
        </div>
        <input
          type="text"
          placeholder="Message"
          className="border-2 rounded-lg w-full p-2 pb-40 "
        />

        <button className="bg-black text-white px-24 py-3 rounded-lg hover:border-yellow-500">Send</button>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;
