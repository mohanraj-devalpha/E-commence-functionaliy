import React from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import pot from "../assets/pot1.jpg"

import item1 from "../assets/collection_101.png";
import item2 from "../assets/collection_102.png";
import item3 from "../assets/collection_103.png";
import item4 from "../assets/collection_104.png";
import item5 from "../assets/collection_105.png";
import item6 from "../assets/collection_106.png";
import item7 from "../assets/collection_107.png";
import item8 from "../assets/collection_108.png";
import item9 from "../assets/collection_109.png";
import item10 from "../assets/collection_110.png";
import item11 from "../assets/collection_111.png";
import item12 from "../assets/collection_112.png";
import item13 from "../assets/collection_113.png";

const items = [
  { id: 1, image: item3, title: "Flower Vase", price: "$29.99" },
  { id: 2, image: item4, title: "Book Self", price: "$119.99" },
  { id: 3, image: item5, title: "Table Chair", price: "$180.34" },
  { id: 4, image: item6, title: "Wall Clock", price: "$20.14" },
  { id: 5, image: item2, title: "Round table", price: "$24.99" },
  { id: 6, image: item1, title: "Pottery Vase", price: "$24.99" },
  { id: 7, image: item8, title: "wooden sofa", price: "$140.22" },
  { id: 8, image: item7, title: "Black chair", price: "$160.34" },
  { id: 9, image: item9, title: "GreenVase", price: "$40.13" },
  { id: 10, image: item10, title: "White chair", price: "$320.25" },
  { id: 11, image: item11, title: "White Table", price: "$279.99" },
  { id: 12, image: item12, title: "Stripes Vase", price: "$39.99" },
  { id: 13, image: item13, title: "Wooden Clock", price: "$24.99" },
];

const Collection = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="p-10">
        <div className="py-5 text-center">
          <span className="text-7xl font-cormorant">Popular Collection</span>
          <span>
            <ul className="flex justify-center space-x-5 mt-10">
              <li>
                <input type="text" placeholder="Type" className="border py-2 px-3 rounded-lg" />
              </li>
              <li>
                <input type="text" placeholder="Price" className="border py-2 px-3 rounded-lg" />
              </li>
              <li>
                <input type="text" placeholder="Not For sale" className="border py-2 px-3 rounded-lg" />
              </li>
              <li className="py-2 px-3 cursor-pointer">
                Clear all
              </li>
            </ul>
          </span>
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
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-slate-900 text-white p-20 space-y-8">
            <span className="font-cormorant text-5xl">Discover our new accessories collection</span>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing 
              elit. Sed convallis nisi eu ultricies hendrerit. Fusce
               massa ligula, suscipit sit amet porta in, consectetur 
               ut sem. Maecenas velit velit, tincidunt quis risus non,
                imperdiet egestas mauris. Ut efficitur orci ligula, vehicula
                 fermentum ante volutpat ut</p>
                 <button className=" text-black px-5 py-3 h-12 rounded-lg border-2  bg-white">
                 Learn More</button>
           
          </div>
          <div className="object-fit">
            <img src={pot} alt="" className="object-fill h-full"/>
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Collection;
