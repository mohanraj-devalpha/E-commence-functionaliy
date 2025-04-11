import React, { useState } from "react";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import pot from "../assets/pot1.jpg";

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
  { id: 1, image: item3, title: "Flower Vase", price: "$29.99", type: "Vases" },
  {
    id: 2,
    image: item4,
    title: "Book Shelf",
    price: "$119.99",
    type: "Furniture",
  },
  {
    id: 3,
    image: item5,
    title: "Table Chair",
    price: "$180.34",
    type: "Furniture",
  },
  {
    id: 4,
    image: item6,
    title: "Wall Clock",
    price: "$20.14",
    type: "Accessories",
  },
  {
    id: 5,
    image: item2,
    title: "Round Table",
    price: "$24.99",
    type: "Furniture",
  },
  {
    id: 6,
    image: item1,
    title: "Pottery Vase",
    price: "$24.99",
    type: "Vases",
  },
  {
    id: 7,
    image: item8,
    title: "Wooden Sofa",
    price: "$140.22",
    type: "Furniture",
  },
  {
    id: 8,
    image: item7,
    title: "Black Chair",
    price: "$160.34",
    type: "Furniture",
  },
  { id: 9, image: item9, title: "Green Vase", price: "$40.13", type: "Vases" },
  {
    id: 10,
    image: item10,
    title: "White Chair",
    price: "$320.25",
    type: "Furniture",
  },
  {
    id: 11,
    image: item11,
    title: "White Table",
    price: "$279.99",
    type: "Furniture",
  },
  {
    id: 12,
    image: item12,
    title: "Stripes Vase",
    price: "$39.99",
    type: "Vases",
  },
  {
    id: 13,
    image: item13,
    title: "Wooden Clock",
    price: "$24.99",
    type: "Accessories",
  },
];

const Collection = () => {
  const navigate = useNavigate();
  const [typeFilter, setTypeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  // Filter logic
  const filteredItems = items.filter((item) => {
    const [min, max] = priceFilter
      ? priceFilter.split("-").map(Number)
      : [0, Infinity];
    const numericPrice = parseFloat(item.price.replace("$", ""));
    const priceMatch = numericPrice >= min && numericPrice <= max;
    const typeMatch = typeFilter ? item.type === typeFilter : true;
    return priceMatch && typeMatch;
  });

  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-10 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-cormorant">
            Popular Collection
          </h2>

          <ul className="flex flex-wrap justify-center gap-4 mt-10">
            <li>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border py-2 px-3 rounded-lg focus:outline-none w-40 sm:w-48 text-gray-700 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-black/20"
              >
                <option value="" disabled hidden>
                  Type
                </option>
                <option value="">All Types</option>
                <option value="Furniture">Furniture</option>
                <option value="Accessories">Accessories</option>
                <option value="Vases">Vases</option>
              </select>
            </li>

            <li>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="border py-2 px-3 rounded-lg focus:outline-none w-40 sm:w-48 text-gray-700 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-black/20"
              >
                <option value="" disabled hidden>
                  Price
                </option>
                <option value="">All</option>
                <option value="10-100">$10 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200-300">$200 - $300</option>
              </select>
            </li>
            <li>
              <input
                type="text"
                placeholder="Not For Sale"
                className="border py-2 px-3 rounded-lg focus:outline-none w-40 sm:w-48"
              />
            </li>
            <li
              className="py-2 px-3 text-color cursor-pointer font-medium"
              onClick={() => {
                setPriceFilter("");
                setTypeFilter("");
              }}
            >
              Clear all
            </li>
          </ul>
        </div>

        {/* Filtered Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10">
          {filteredItems.map((item) => (
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
              className="flex flex-col items-center hover:opacity-75 transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="text-center py-4 text-lg">
                <span className="font-bold block">{item.title}</span>
                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* New Collection Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
          <div className="bg-slate-900 text-white p-8 sm:p-16 flex flex-col justify-center space-y-6">
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl">
              Discover our new accessories collection
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              convallis nisi eu ultricies hendrerit. Fusce massa ligula,
              suscipit sit amet porta in, consectetur ut sem. Maecenas velit,
              tincidunt quis risus non, imperdiet egestas mauris.
            </p>
            <button className="bg-white text-black px-5 py-2 rounded-lg border-2 w-fit hover:opacity-90 transition">
              Learn More
            </button>
          </div>
          <div>
            <img
              src={pot}
              alt="pot item"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collection;
