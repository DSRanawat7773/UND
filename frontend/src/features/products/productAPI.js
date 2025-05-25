import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/products/productSlice";
import ProductCard from "../../Components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Our Products</h2>
        {loading ? (
          <p className="text-center mt-10 text-gray-500">Loading...</p>
        ) : (
          <>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <div className="flex justify-center items-center mt-8 space-x-3">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 bg-blue-500 rounded text-white"
              >
                <ChevronLeft />
              </button>
              <span>{currentPage} / {totalPages}</span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 bg-blue-500 rounded text-white"
              >
                <ChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductPage;
