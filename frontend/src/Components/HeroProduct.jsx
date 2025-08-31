import React from "react";
import rkm from "../assets/RKM-main.jpg";

const HeroProduct = () => {
  return (
    <section className="bg-gradient-to-br from-[#fdfcfb] via-[#f7f2e9] to-[#fdfcfb] py-15 font-sans">
      <div className="max-w-7.5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-15">
        
        {/* Image with Scarcity & Trust Labels */}
        <div className="w-full md:w-2/5 relative">
          <img
            src={rkm}
            alt="Radha Krishna Mural"
            className="w-full rounded-2xl shadow-2xl border border-gray-200"
          />

          {/* Scarcity Badge */}
          <span className="absolute top-4 left-4 bg-red-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
            🔥 Limited to 10 pcs / month
          </span>

          {/* Social Proof Badge */}
          <span className="absolute bottom-4 right-4 bg-yellow-500 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full shadow-md">
            ⭐ Trusted by 250+ Families
          </span>
        </div>

        {/* Content */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-['Playfair Display'] font-bold text-gray-900 leading-snug">
            Experience Divine Luxury –{" "}
            <span className="text-[#C39A66]">श्री Radha Krishna Ji Mural</span>
          </h1>

          {/* Divider for Premium Touch */}
          <div className="h-1 w-24 bg-gradient-to-r from-[#C39A66] to-[#b18350] rounded-full my-6 mx-auto md:mx-0"></div>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Elevate your interiors with our{" "}
            <span className="font-semibold text-gray-900">
              handcrafted 3D Radha Krishna Wall Mural
            </span>
            —a rare blend of{" "}
            <span className="text-[#C39A66] font-semibold">
              devotion, elegance & timeless artistry
            </span>
            . Every mural radiates{" "}
            <span className="font-medium">peace and divine charm</span>, making
            your home feel like a temple of love.
          </p>

          {/* Price + Scarcity */}
          <div className="mt-8 bg-white rounded-xl shadow-lg border border-yellow-200 p-6 text-center md:text-left">
            <p className="text-2xl font-bold text-[#C39A66]">
              ✨ Starting at just ₹55,000/-
            </p>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              Produced in{" "}
              <span className="font-semibold text-red-600">only 10 pieces</span>{" "}
              each month – true exclusivity.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 gap-3 mt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-green-800 shadow-sm text-sm md:text-base">
              🚚 <span className="font-semibold">Free Shipping</span> Pan India
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-yellow-800 shadow-sm text-sm md:text-base">
              🛡 100% Damage-Free <span className="font-semibold">Safe Delivery</span>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-700 shadow-sm text-sm md:text-base">
              🏆 Lifetime Finish Guarantee | 🇮🇳 Made with Love in India
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="https://wa.me/919024576893?text=Hi%2C%20I'm%20interested%20for%20your%20HERO%20product!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative px-8 py-4 bg-gradient-to-r from-[#C39A66] to-[#a67842] text-white text-lg font-bold rounded-xl shadow-2xl hover:scale-105 transition-transform overflow-hidden">
                <span className="relative z-10">❤️ Own This Masterpiece Now</span>
                {/* Shine Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent translate-x-[-100%] hover:translate-x-[200%] transition-transform duration-700"></span>
              </button>
            </a>
            {/* <p className="mt-2 text-xs text-gray-600 italic">
              Delivered & Installed in 7-10 days
            </p> */}
          </div>

          {/* Scarcity Trigger */}
          <p className="mt-4 text-sm text-red-600 font-medium italic">
            ⚡ Hurry! Orders close once monthly quota is sold out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroProduct;
