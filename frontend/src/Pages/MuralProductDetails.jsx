import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Ruler, Gem, ShieldCheck } from "lucide-react";

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
        className="mb-6 text-gray-500 hover:text-gray-900 font-medium text-sm transition"
      >
        ← Back to Products
      </button>

      {/* Product Main Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          {selectedImage && (
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-lg border border-gray-200">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          {/* Thumbnails */}
          <div className="flex flex-wrap gap-3 mt-3">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} ${idx + 1}`}
                className={`w-20 h-20 object-cover rounded-xl border cursor-pointer transition-transform duration-300 shadow-sm
                  ${
                    selectedImage === img
                      ? "border-yellow-500 scale-105 shadow-md"
                      : "border-gray-200 hover:scale-105"
                  }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Video Preview */}
          {product.video && (
            <video
              controls
              className="w-full rounded-2xl shadow-lg mt-4 h-60 border border-gray-200"
            >
              <source src={product.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {product.name}
          </h1>

          {/* Price Badge */}
          {product.muralPrice && (
            <div className="mb-6">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full text-xl shadow-md">
                Starting from ₹{product.muralPrice}/-
              </span>
            </div>
          )}

          {/* Description */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Product Specs */}
          <div className="grid gap-4 mb-10">
            {product.size && (
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm border border-gray-200">
                <Ruler className="w-6 h-6 text-yellow-600" />
                <p className="text-gray-800">
                  <span className="font-semibold">Size:</span> {product.size}
                </p>
              </div>
            )}
            {product.material && (
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm border border-gray-200">
                <Gem className="w-6 h-6 text-yellow-600" />
                <p className="text-gray-800">
                  <span className="font-semibold">Material:</span>{" "}
                  {product.material}
                </p>
              </div>
            )}
            {product.lifeSpan && (
              <div className="flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-3 rounded-xl shadow-sm border border-gray-200">
                <ShieldCheck className="w-6 h-6 text-yellow-600" />
                <p className="text-gray-800">
                  <span className="font-semibold">Life Span:</span>{" "}
                  {product.lifeSpan}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleWhatsAppQuote}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 text-base"
            >
              💬 Get a Quote on WhatsApp
            </button>

            <button
              onClick={() => navigate("/whyUs")}
              className="bg-white border border-yellow-500 text-yellow-600 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-50 transition-transform duration-300 hover:scale-105 text-base"
            >
              ❤️ Why Choose Us?
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 tracking-tight">
            Related Murals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/mural/${item._id}`)}
                className="cursor-pointer group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md shadow-md border border-gray-200 transition transform hover:-translate-y-2 hover:shadow-xl duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-gray-900 font-semibold text-lg line-clamp-1">
                    {item.name}
                  </h3>
                  {item.muralPrice && (
                    <p className="text-yellow-600 font-bold mt-2 text-base">
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
