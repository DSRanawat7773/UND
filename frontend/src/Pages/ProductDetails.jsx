import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const product = products.find((item) => item._id === id);

  const sameCategoryProducts = products.filter(
    (item) => item.category === product?.category && item._id !== product._id
  );

  const whatsappURL = `https://wa.me/919024576893?text=Hi%2C%20I'm%20interested%20in%20this%20product:%0A*${product?.name}*%0ASize:%20${product?.size}%0AMaterial:%20${product?.material}%0APrice:%20₹${product?.price}`;

  if (loading) {
    return <div className="p-20 text-center text-xl font-medium text-gray-500">Loading product...</div>;
  }

  if (error) {
    return <div className="p-20 text-center text-lg text-red-600">Error: {error}</div>;
  }

  if (!product) {
    return <div className="p-20 text-center text-lg text-gray-500">Product not found.</div>;
  }

  return (
    <div className="bg-[#f9f7f2] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-12 flex flex-col lg:flex-row gap-10">
        
        {/* Left Image */}
        <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Right Info */}
        <div className="lg:w-1/2 w-full flex flex-col justify-between">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-700 mb-1">₹{product.price.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mb-6">Shipping calculated at checkout.</p>

            {/* Quantity Control */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
              >
                −
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-lg font-bold"
              >
                +
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => alert("Add to cart feature coming soon!")}
                className="px-7 py-3 border border-black text-black rounded-xl hover:bg-gray-100 transition"
              >
                Add to Cart
              </button>
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition"
              >
                Buy it now
              </a>
            </div>

            {/* Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-12 text-sm text-gray-700 mb-8">
              <div><span className="font-semibold text-gray-800">Size:</span> {product.size}</div>
              <div><span className="font-semibold text-gray-800">Thickness:</span> {product.thickness}</div>
              <div><span className="font-semibold text-gray-800">Material:</span> {product.material}</div>
              <div><span className="font-semibold text-gray-800">Life Span:</span> {product.lifeSpan}</div>
              <div><span className="font-semibold text-gray-800">Shipping:</span> ₹{product.shippingCharge}</div>
              <div><span className="font-semibold text-gray-800">Category:</span> {product.category}</div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* You Might Also Like */}
      {sameCategoryProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">You Might Also Like</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sameCategoryProducts.map((item) => (
              <div key={item._id} className="transition-transform transform hover:-translate-y-1">
                <ProductCard product={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
