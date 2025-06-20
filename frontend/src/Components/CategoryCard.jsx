import { useNavigate } from "react-router-dom";

const CategoryCard = ({ title, image, route }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/products/${route}`)}
      className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      {/* Image with zoom effect */}
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/60 transition duration-300" />

      {/* Title & CTA */}
      <div className="absolute bottom-6 left-6">
        <h3 className="text-white text-2xl md:text-3xl font-semibold drop-shadow-md">{title}</h3>
        <div className="mt-2 inline-block bg-white text-black font-medium px-4 py-1.5 rounded-full text-sm shadow hover:bg-gray-100 transition">
          Explore
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
