import React from "react";
import Welcome from "./Welcome";
import img from "../assets/content.jpg";
import leaf from "../assets/leaf-removebg-preview.png";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Layout from "./Layout";
import item1 from "../assets/collection_103.png"
import item2 from "../assets/collection_102.png";
import item5 from "../assets/collection_105.png";
import item6 from "../assets/collection_106.png";
import item8 from "../assets/collection_108.png";

const Home = () => {
  return (
    <Layout>
      <Welcome className="bg-[#fdf1f0]" />
      <div className="py-10 relative">
        <img
          src={img}
          alt=""
          className="absolute z-10 w-[461px] h-[400px] left-20 top-24"
        />
        <div className="bg-[#fdf1f0] ml-40 mr-16 h-[500px] relative">
          <div className="absolute top-28 right-36 w-[508px]">
            <div className="flex flex-col space-y-3">
              <span className="font-cormorant text-5xl">
                Redefining Living Spaces with Furniture home
              </span>
              <p className="text-base font-thin">
                <ImQuotesLeft className="inline text-xl mr-1" />
                They expertly turned my space into a haven of style and comfort.
                Every design element seemed to reflect my vision, creating an
                atmosphere that resonated with my dreams. The seamless blend of
                creativity and elegance has truly made my home an inspiring
                sanctuary.
                <ImQuotesRight className="inline text-xl ml-1" />
              </p>

              <button className="bg-black text-white px-5 py-3 h-12 w-36 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          {/* <div>
            <img src={leaf} alt="" className="absolute z-10 -rotate-45 -right-40"/>
          </div> */}
        </div>
      </div>
      <div className="text-center py-10 pt-20 pb-[600px] relative">
        <p className="font-cormorant text-7xl">INSTAGRAM</p>
        <p className="text-3xl ">#furniture</p>
        <div>
          <img src={item1} alt="" className="absolute z-10  left-36 w-52 h-52" />
          <img src={item8} alt="" className="absolute z-10 top-72 left-72 w-52 h-52 shadow-2xl"/>
          <img src={item5} alt="" className="absolute z-10 top-96 left-[600px] w-52 h-52"/>
          <img src={item2} alt=""  className="absolute z-20 top-72 right-72 w-52 h-52 shadow-2xl"/>
          <img src={item6} alt="" className="absolute z-10 top-40 right-36 w-52 h-52" />
        </div>
       
        
      </div>
    </Layout>
  );
};

export default Home;
