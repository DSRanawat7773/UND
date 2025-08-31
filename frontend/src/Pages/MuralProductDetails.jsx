import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LuxuryFAQ from "../Components/LuxuryFAQ"; // ✅ import your FAQ component

const API = import.meta.env.VITE_API_URL;

const MuralProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API}/api/products/${id}`);
        setProduct(res.data);
        setSelectedImage(res.data.images?.[0] || null);

        const relatedRes = await axios.get(`${API}/api/products/category/mural`);
        const others = relatedRes.data.filter((p) => p._id !== id);
        setRelatedProducts(others.slice(0, 4));
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleWhatsAppQuote = () => {
    const message = `Hi, I'm interested in this mural: ${product.name}`;
    const phoneNumber = "919024576893";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (loading)
    return (
      <div className="text-center py-16 text-lg font-medium">Loading...</div>
    );
  if (!product)
    return (
      <div className="text-center py-16 text-lg text-red-600">
        Product not found
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-600 hover:text-black font-medium text-sm"
      >
        ← Back to Products
      </button>

      {/* Product Main Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          {selectedImage && (
            <div className="w-full h-[500px] border rounded-2xl shadow-lg overflow-hidden">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Thumbnails */}
          <div className="flex gap-3 mt-2 overflow-x-auto">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition-transform duration-200 
                  ${
                    selectedImage === img
                      ? "border-yellow-500 scale-105"
                      : "border-gray-200"
                  }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Video Preview */}
          {product.video && (
            <video controls className="w-full rounded-2xl shadow-lg mt-4 h-60">
              <source src={product.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {product.name}
          </h1>

          {/* Price Badge */}
          {product.muralPrice && (
            <span className="inline-block mb-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full text-lg shadow-lg">
              Starting from ₹{product.muralPrice}/-
            </span>
          )}

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="text-gray-600 space-y-2 text-sm md:text-base mb-6">
            {product.size && (
              <p>
                <span className="font-semibold">Size:</span> {product.size}
              </p>
            )}
            {product.material && (
              <p>
                <span className="font-semibold">Material:</span>{" "}
                {product.material}
              </p>
            )}
            {product.lifeSpan && (
              <p>
                <span className="font-semibold">Life Span:</span>{" "}
                {product.lifeSpan}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <button
              onClick={handleWhatsAppQuote}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-5 py-2 rounded-xl shadow-md transition duration-300 text-sm md:text-base"
            >
              💬 Get a Quote on WhatsApp
            </button>

            {/* Why Choose Us Button */}
          <button
            onClick={() => navigate("/whyUs")} // 👈 or open a modal if you prefer
            className="bg-white border border-yellow-500 text-yellow-600 font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-yellow-50 transition duration-300 text-sm md:text-base"
          >
            ❤️ Why Choose Us? (See what makes us different)
          </button>

          </div>
        </div>
      </div>

      

  
      {/* <div className="mt-16 border-t pt-12">
        <LuxuryFAQ />
      </div> */}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Related Murals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/mural/${item._id}`)}
                className="cursor-pointer border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-3 bg-white">
                  <h3 className="text-gray-900 font-semibold text-base md:text-lg line-clamp-1">
                    {item.name}
                  </h3>
                  {item.muralPrice && (
                    <p className="text-yellow-600 font-bold mt-1 text-sm md:text-base">
                      ₹{item.muralPrice}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MuralProductDetails;
