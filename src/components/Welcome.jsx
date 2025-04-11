import React from "react";
import table from "../assets/table.jpg";
import leaf from "../assets/leaf-removebg-preview.png";
import item1 from "../assets/collection_101.png";
import item2 from "../assets/collection_102.png";
import item3 from "../assets/collection_103.png";
import item4 from "../assets/collection_104.png";
import item5 from "../assets/collection_105.png";
import item6 from "../assets/collection_106.png";
import item7 from "../assets/collection_107.png";
import item8 from "../assets/collection_108.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const items = [
  { id: 1, image: item3, title: "Flower Vase", price: "$29.99" },
  { id: 2, image: item4, title: "Book Self", price: "$119.99" },
  { id: 3, image: item5, title: "Table Chair", price: "$180.34" },
  { id: 4, image: item6, title: "Wall Clock", price: "$20.14" },
  { id: 5, image: item2, title: "Round table", price: "$24.99" },
  { id: 6, image: item1, title: "Pottery Vase", price: "$24.99" },
  { id: 7, image: item8, title: "wooden sofa", price: "$140.22" },
  { id: 8, image: item7, title: "Black chair", price: "$160.34" },
];

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="snap-y">
        {/* Hero Section */}
        <div className="grid xl:grid-cols-2 relative">
        <div className="flex bg-[#fdf1f0] min-h-[300px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px]">
        <div className="absolute top-20 sm:top-28 left-6 sm:left-10 md:left-20 xl:left-28 flex flex-col space-y-6 sm:space-y-10 max-w-xs sm:max-w-md md:max-w-lg">
              <p className="text-sm sm:text-base">Furniture Home</p>
              <p className="font-cormorant text-4xl sm:text-6xl xl:text-8xl leading-tight">
                Embrace Peaceful Oasis
              </p>
              <p
                onClick={() => navigate("/learn-more")}
                className="bg-black text-white px-5 py-3 rounded-lg w-fit flex items-center space-x-2 cursor-pointer"
              >
                <span>Shop Now</span>
                <MdOutlineArrowOutward className="text-white text-xl" />
              </p>
            </div>
          </div>
          <div>
            <img
              src={table}
              alt="table"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </div>

        {/* What We Do Section */}
        <div className="py-5 md:py-16 px-6 sm:px-10 md:px-20 text-center space-y-10">
          <span className="text-4xl sm:text-5xl xl:text-7xl font-cormorant">
            What We Do
          </span>
          <p className="text-sm sm:text-base font-normal text-[#222222] max-w-5xl mx-auto">
            Our Focus: Crafting Inspiring Living Spaces. At{" "}
            <span className="font-bold">Furniture home</span>, we're dedicated
            to turning ordinary spaces into visual masterpieces. With a passion
            for design, we collaborate closely with you to bring your unique
            vision to life. From color palettes to furniture arrangement, our
            decor experts ensure each corner tells a captivating story.
          </p>
          <p className="text-sm sm:text-base font-normal max-w-4xl mx-auto">
            Whether your style is contemporary, classic, or eclectic, let us
            expertly transform your dreams into stunning reality. Discover the
            art of creating lovely environments that truly resonate and inspire,
            as we skillfully turn houses into homes and rooms into reflections
            of you.
          </p>
          <button className="bg-black text-white px-5 py-3 rounded-lg">
            Learn More
          </button>
        </div>

        {/* Popular Collection */}
        <div className="py-2 md:py-10 text-center">
          <span className="text-3xl sm:text-5xl md:text-6xl font-cormorant">
            Popular Collection
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 py-12 px-6 sm:px-10 lg:px-16">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  navigate("/Items", {
                    state: {
                      img: item.image,
                      title: item.title,
                      price: item.price,
                    },
                  })
                }
                className="flex flex-col hover:opacity-80 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover"
                />
                <div className="flex flex-col py-4 text-base sm:text-lg">
                  <span className="font-bold">{item.title}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
