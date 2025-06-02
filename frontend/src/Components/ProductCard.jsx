import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.images[0]} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h4 className="text-lg font-semibold mt-2">{product.name}</h4>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-gray-700 font-bold">₹{product.price}</p>
      <button
        onClick={() => navigate(`/product/${product._id}`)}
        className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
      >
        More Details
      </button>
    </div>
  );
};

export default ProductCard;
