import React from "react";
import { FaShieldAlt, FaPalette, FaHome } from "react-icons/fa";

const Speciality = () => {
  const specialities = [
    {
      id: 1,
      icon: <FaShieldAlt className="text-[#C39A66] text-4xl" />,
      title: "Unmatched Durability",
      points: [
        "Unbreakable & Dust Resistant",
        "Premium materials ensure 20-25 years of life",
        "Low maintenance & long-lasting shine",
      ],
    },
    {
      id: 2,
      icon: <FaPalette className="text-[#C39A66] text-4xl" />,
      title: "Exquisite Craftsmanship",
      points: [
        "Handcrafted with intricate detailing",
        "Expert artisans bring every mural to life",
        "Perfect blend of tradition & modern artistry",
      ],
    },
    {
      id: 3,
      icon: <FaHome className="text-[#C39A66] text-4xl" />,
      title: "Tailored for Your Space",
      points: [
        "Custom designs to match your interiors",
        "Spiritual and aesthetic appeal for any setting",
        "Ideal for homes, temples & meditation areas",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Speciality</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialities.map((speciality) => (
            <div
              key={speciality.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center h-full"
            >
              <div className="mb-4">{speciality.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{speciality.title}</h3>
              <ul className="text-gray-600 text-sm space-y-2 flex flex-col items-center">
                {speciality.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                     {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality;
