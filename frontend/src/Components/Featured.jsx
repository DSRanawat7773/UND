import React from "react";
import rkm1 from "../assets/rkm-circular.jpg";
import rkm2 from "../assets/rkm-6x4.jpg";
import rkm3 from "../assets/rkm-circular-colour.jpg";
import rkm4 from "../assets/rkm-landscape.jpg";
import rkm5 from "../assets/rkm-light.jpg";
import csm from "../assets/shivaji-maharaj.jpg";

// Featured product data with actual images
const products = [
  {
    id: 1,
    name: "Radha Krishna Circular",
    price: "₹12,999",
    image: rkm1,
  },
  {
    id: 2,
    name: "Radha Krishna 6x4",
    price: "₹10,499",
    image: rkm2,
  },
  {
    id: 3,
    name: "Radha Krishna Color",
    price: "₹18,999",
    image: rkm3,
  },
  {
    id: 4,
    name: "Radha Krishna Landscape",
    price: "₹15,299",
    image: rkm4,
  },
  {
    id: 5,
    name: "Radha Krishna Light",
    price: "₹14,599",
    image: rkm5,
  },
  {
    id: 6,
    name: "Chhatrapati Shivaji Maharaj",
    price: "₹19,999",
    image: csm,
  },
];

const Featured = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Featured Products
        </h2>

        {/* Product List */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-md font-medium">{product.price}</p>
                <button className="mt-3 px-4 py-2 bg-[#C39A66] text-white text-sm font-medium rounded-md hover:bg-[#b18350] transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-[#C39A66] text-white text-lg font-semibold rounded-md shadow hover:bg-[#b18350] transition">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
