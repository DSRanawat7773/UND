import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../features/products/productSlice";
import MuralProduct from "../Components/MuralProduct";
import HomeDecorProduct from "../Components/HomeDecorProduct";

const ProductCategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { items: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts(category)); // ✅ Ensure category is passed
  }, [dispatch, category]);

  const validCategories = ["mural", "home-decor"];
  if (!validCategories.includes(category)) {
    return <div className="text-center py-20 text-xl text-red-500">Invalid category.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category.replace("-", " ")} Products
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>Coming Soon</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) =>
            category === "mural" ? (
              <MuralProduct key={product._id} product={product} index={index} />
            ) : (
              <HomeDecorProduct key={product._id} product={product} index={index} />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCategoryPage;
