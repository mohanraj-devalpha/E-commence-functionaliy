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
        <div className="grid grid-cols-2 relative">
          <div className="flex flex-cols bg-[#fdf1f0] ">
            <div className="absolute top-28 left-28  flex flex-col w-96 space-y-10">
              <p>Furniture Home</p>
              <p className="font-cormorant text-9xl">Embrace Peaceful Oasis</p>
              <p 
              onClick={() => navigate("/learn-more")} 
              className="bg-black text-white px-3 py-3 rounded-lg text-center h-12 w-40 flex items-center justify-center space-x-2 cursor-pointer">
                <span >Shop Now</span>
                <MdOutlineArrowOutward className="text-white text-xl " />
              </p>
            </div>
          </div>
          {/* <img
            src={leaf}
            alt=""
            className="absolute left-[650px] z-0 -rotate-45 top-48"
          /> */}
          <div>
            <img src={table} alt="" className=" relative z-10" />
          </div>
        </div>
        <div className="py-24 px-40 text-center space-y-10">
          <span className="text-7xl font-cormorant">What We Do</span>
          <p className=" font-normal text-[#222222] px-36">
            Our Focus: Crafting Inspiring Living Spaces. At{" "}
            <span className="font-bold"> Furniture home </span>, we're dedicated
            to turning ordinary spaces into visual masterpieces. With a passion
            for design, we collaborate closely with you to bring your unique
            vision to life. From color palettes to furniture arrangement, our
            decor experts ensure each corner tells a captivating story.
          </p>
          <p className="font-normal px-36">
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
        <div className="py-5 text-center">
          <span className="text-7xl font-cormorant ">Popular Collection</span>

          <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 py-16 px-16 cursor-pointer">
          {items.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  navigate("/Items", {
                    state: { img: item.image, title: item.title, price: item.price },
                  })
                }
                className="flex flex-col"
              >
                <img src={item.image} alt={item.title} />
                <div className="flex flex-col py-8 text-lg">
                  <span className="font-bold">{item.title}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            ))}
          </div>


          {/* <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 py-16 px-16 cursor-pointer">
            <div className="flex flex-col">
              <img src={item3} alt="" className="" />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">Flower Vase</span>
                <span>$29.99</span>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={item4} alt="" />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">Book Self</span>
                <span>$119.99</span>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={item5} alt="" />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">Table Chair</span>
                <span>$180.34</span>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={item6} alt="" />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">Wall Clock</span>
                <span>$20.14</span>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={item2} alt="" />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">Round table</span>
                <span>$24.99</span>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={item1} alt="" />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">Pottery Vase</span>
                <span>$24.99</span>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={item8} alt="" />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">wooden sofa</span>
                <span>$140.22</span>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={item7} alt="" />
              <div className="flex flex-col py-8 text-lg">
                <span className="font-bold">Black chair</span>
                <span>$160.34</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
