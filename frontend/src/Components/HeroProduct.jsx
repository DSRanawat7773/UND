import React from "react";
import rkm from "../assets/RKM-main.jpg";

const HeroProduct = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Image (Reduced Size) */}
        <img
          src={rkm}
          alt="Radha Krishna Mural"
          className="w-full md:w-2/5 rounded-lg shadow-md"
        />

        {/* Content (Larger Text) */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Hero Product -{" "}
            <span className="text-[#C39A66]">श्री Radha Krishna Mural</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-xl leading-relaxed">
          Introducing our exquisite Radha Krishna 3D Wall Mural Art—a masterpiece that embodies divine love and artistic elegance. Crafted with intricate details, this stunning mural brings a serene and spiritual ambiance to any space. Perfect for homes, temples, or meditation areas, it enhances your interiors with timeless beauty and devotion.
          </p>


          {/* CTA Button */}
          <button className="mt-6 px-6 py-3 bg-[#C39A66] text-white text-lg font-semibold rounded-md shadow hover:bg-[#b18350] transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;
