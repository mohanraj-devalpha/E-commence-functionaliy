import React from "react";
import Bar from "../assets/progess.png";
import { IoStar } from "react-icons/io5";
import { BsStar } from "react-icons/bs";

const Details = () => {
  return (
    <div>
      <div className="flex justify-between space-y-5">
      <div className="space-y-3">
        <span className="text-lg">Share your experience</span>
        <p className="text-color w-[402px]">
          Your unique perspective, lessons, and moments of triumph can resonate
          deeply with others. Don't hesitate to contribute your story
        </p>
        <button className="bg-black text-white px-5 py-3 h-12 w-36 rounded-lg">
          Write a review
        </button>
      </div>
      <div className="space-y-2">
        <span className="text-color text-4xl font-thin">
          {" "}
          <span className="text-black font-bold">190</span> Reviews
        </span>
        <div className="flex space-x-2 text-xl">
          <IoStar className="text-blue-600" />
          <IoStar className="text-blue-600" />
          <BsStar />
          <BsStar />
          <BsStar />
        </div>
      </div>
      <div className="flex space-x-3">
        <div className="flex flex-col">
          <span>5</span>
          <span>4</span>
          <span>3</span>
          <span>2</span>
          <span>1</span>
        </div>
        <div className="space-y-2 mt-1 text-blue-700">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <div className="">
          <img src={Bar} alt="" />
          <img src={Bar} alt="" />
          <img src={Bar} alt="" />
          <img src={Bar} alt="" />
          <img src={Bar} alt="" />
        </div>
        <div className="flex flex-col">
          <span>75%</span>
          <span>50%</span>
          <span>20%</span>

          <span>40%</span>
          <span>30%</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Details;
