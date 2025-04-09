import React from "react";
import { IoStar } from "react-icons/io5";
import { BsStar } from "react-icons/bs";

const Reviews = () => {
  return (
    <div>
      <div className="flex flex-col justify-between  space-y-5">
        <div className="space-y-3">
          <div className="flex pt-5 text-blue-600">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <BsStar />
          </div>
          <div>
            <span className="text-xl font-medium">Absolute Perfection!</span>
            <p className="text-color">
              Your unique perspective, lessons, and moments of triumph can
              resonate deeply with others. Don't hesitate to contribute your
              story
            </p>
          </div>
          <div>
            <span className="text-color">Darlene Robertson, 2 days ago</span>
          </div>
        </div>
        <div className="space-y-3 border-t-2">
          <div className="flex pt-7 text-blue-600">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <BsStar />
          </div>
          <div>
            <span className="text-xl font-medium">classy</span>
            <p className="text-color">
              Your unique perspective, lessons, and moments of triumph can
              resonate deeply with others. Don't hesitate to contribute your
              story
            </p>
          </div>
          <div>
            <span className="text-color">Darlene Robertson, 2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
