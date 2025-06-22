import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const MuralProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API}/api/products/${id}`);
        setProduct(res.data);

        // Fetch related products
        const relatedRes = await axios.get(`${API}/api/products/category/mural`);
        const others = relatedRes.data.filter(p => p._id !== id);
        setRelatedProducts(others.slice(0, 4)); // Show up to 4 related
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
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleBrochureDownload = () => {
    window.open("/brochures/sample-brochure.pdf", "_blank"); // replace with real path
  };

  if (loading) return <div className="text-center py-16 text-lg font-medium">Loading...</div>;
  if (!product) return <div className="text-center py-16 text-lg text-red-600">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-600 hover:text-black font-medium text-sm"
      >
        ← Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-6">
          {product.images && product.images.map((img, idx) => (
  <div key={idx} className="w-full overflow-hidden rounded-2xl shadow-lg border">
    <img
      src={img}
      alt={`${product.name} ${idx + 1}`}
      className="w-full h-auto"
      style={{ maxHeight: "600px", objectFit: "contain" }}
    />
  </div>
))}


          {/* Video Preview */}
          {product.video && (
            <video controls className="w-full rounded-2xl shadow-lg">
              <source src={product.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="text-gray-600 space-y-2 text-base mb-8">
            {product.size && <p><span className="font-semibold">Size:</span> {product.size}</p>}
            {product.material && <p><span className="font-semibold">Material:</span> {product.material}</p>}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleWhatsAppQuote}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-medium px-6 py-3 rounded-xl shadow-lg transition duration-300"
            >
              💬 Get a Quote on WhatsApp
            </button>

            <button
              onClick={handleBrochureDownload}
              className="border border-gray-700 text-gray-800 hover:bg-gray-100 px-5 py-3 rounded-xl transition"
            >
              📄 Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Related Murals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/mural/${item._id}`)}
                className="cursor-pointer border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-3">
                  <h3 className="text-gray-800 font-medium text-lg line-clamp-1">{item.name}</h3>
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
