import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeDecorProduct = ({ product, index }) => {
  const isEven = index % 2 === 0;
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  const handleToggleOverlay = () => {
    // Toggle overlay on mobile, navigate on desktop
    if (window.innerWidth < 768) {
      setShowOverlay(!showOverlay);
    } else {
      navigate(`/homedecor/${product._id}`);
    }
  };

  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-2xl group transform transition duration-300 cursor-pointer ${
        isEven ? "mt-4" : "mb-4"
      }`}
      onClick={handleToggleOverlay}
    >
      {/* Image */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-[260px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Name and brief on bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3 sm:px-6 sm:py-4 z-10">
        <h3 className="text-white text-lg sm:text-xl font-semibold">{product.name}</h3>
        <p className="text-white text-xs sm:text-sm">
          {product.size} | {product.material}
        </p>
      </div>

      {/* Description overlay */}
      <div
        className={`absolute inset-0 bg-black/30 backdrop-blur-[3px] flex items-center justify-center px-4 sm:px-8 z-20 transition-opacity duration-300 ${
          showOverlay ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <p className="text-white text-sm sm:text-base text-center leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default HomeDecorProduct;
