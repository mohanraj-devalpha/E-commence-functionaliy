import React from "react";
import Welcome from "./Welcome";
import img from "../assets/content.jpg";
import leaf from "../assets/leaf-removebg-preview.png";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Layout from "./Layout";
import item1 from "../assets/collection_103.png";
import item2 from "../assets/collection_102.png";
import item5 from "../assets/collection_105.png";
import item6 from "../assets/collection_106.png";
import item8 from "../assets/collection_108.png";

const Home = () => {
  return (
    <Layout>
      <Welcome className="bg-[#fdf1f0]" />
      {/* Testimonial Section */}
      <div className="py-10 relative flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20">
        <img
          src={img}
          alt=""
          className="w-72 sm:w-96 lg:w-[450px] h-auto object-cover mb-10 lg:mb-0 lg:mr-10"
        />
        <div className="bg-[#fdf1f0] w-full lg:h-[500px] flex items-center px-6 sm:px-10 py-10 relative">
          <div className="max-w-2xl space-y-5">
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl leading-snug">
              Redefining Living Spaces with Furniture home
            </h2>
            <p className="text-base font-light">
              <ImQuotesLeft className="inline text-xl mr-1" />
              They expertly turned my space into a haven of style and comfort.
              Every design element reflected my vision, creating an atmosphere
              that resonated with my dreams. The blend of creativity and
              elegance has truly made my home a sanctuary.
              <ImQuotesRight className="inline text-xl ml-1" />
            </p>
            <button className="bg-black text-white px-5 py-3 w-fit rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="text-center py-2 md:py-16 relative">
        <p className="font-cormorant text-4xl sm:text-6xl">INSTAGRAM</p>
        <p className="text-xl sm:text-2xl mt-2 mb-10">#furniture</p>

        {/* Responsive Grid for Instagram Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 px-6 sm:px-10 lg:px-20">
          {[item1, item8, item5, item2, item6].map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`item-${index}`}
              className="w-full h-52 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
