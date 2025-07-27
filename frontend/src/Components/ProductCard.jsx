import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Price Calculation
  const cleanPrice = product?.price?.toString().replace(/[^\d.]/g, "") || "0";
  const basePrice = parseFloat(cleanPrice);
  const calculatedOldPrice = Math.round(basePrice * 1.15);
  console.log("Base Price:", basePrice);
  console.log("Base Price:", cleanPrice);
  console.log("Base Price:", calculatedOldPrice);

  // Determine thumbnails to show
  const thumbnailsToShow =
    product.images.length >= 1 ? product.images.slice(0, 3) : [product.images[0]];

  return (
    <div className="bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition flex flex-col h-[460px]">
      {/* Main Image */}
      <div onClick={() => navigate(`/product/${product._id}`)} className="cursor-pointer">
        <div className="w-full h-[290px] overflow-hidden bg-white rounded-lg">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-3 justify-center">
          {thumbnailsToShow.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumb ${index + 1}`}
              className="w-9 h-9 rounded-md object-cover border border-gray-300"
            />
          ))}
          {product.images.length > 3 && (
            <div className="w-9 h-9 flex items-center justify-center text-xs font-medium bg-gray-200 rounded-md border border-gray-300">
              +{product.images.length - 3}
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col justify-between flex-grow mt-3">
        <div className="text-center">
          <h3 className="text-xs font-semibold text-gray-800 truncate">
            {product.code || product.name}
          </h3>
          <p className="text-[11px] text-gray-500 mt-1 truncate">{product.name}</p>

          {/* Price */}
          <div className="mt-1 flex justify-center items-center gap-2">
            <span className="text-red-600 font-semibold text-sm">
              ₹{basePrice.toLocaleString()}
            </span>
            <span className="line-through text-xs text-gray-500">
              ₹{calculatedOldPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* View Details Button */}
        <button
          onClick={() => navigate(`/product/${product._id}`)}
          className="mt-3 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs font-medium py-1.5 rounded-full shadow-sm transition-all duration-200 ease-in-out"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
