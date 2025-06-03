import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col h-[370px]">
      <div className="h-40 w-full overflow-hidden rounded">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-grow flex flex-col justify-between mt-3">
        <div>
          <h4 className="text-lg font-semibold">{product.name}</h4>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>

        <div className="mt-2">
          <p className="text-gray-700 font-bold">₹{product.price}</p>
          <button
            onClick={() => navigate(`/product/${product._id}`)}
            className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded w-full"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
