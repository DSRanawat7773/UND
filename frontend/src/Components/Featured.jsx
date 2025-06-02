import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Show only first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Featured Products
        </h2>

        {/* Product List */}
        {loading ? (
          <p className="text-center mt-10 text-gray-500">Loading...</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product._id}
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
        )}

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/product")}
            className="px-6 py-3 bg-[#C39A66] text-white text-lg font-semibold rounded-md shadow hover:bg-[#b18350] transition"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
