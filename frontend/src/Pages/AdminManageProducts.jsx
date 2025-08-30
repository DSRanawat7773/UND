import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL;

const AdminManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({});

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/api/products`);
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`${API}/api/products/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  // Handle edit
  const handleEdit = (product) => {
    setEditingProduct(product._id);
    setFormData(product);
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${API}/api/products/${editingProduct}`, formData);
      setProducts(products.map((p) => (p._id === editingProduct ? res.data : p)));
      setEditingProduct(null);
      setFormData({});
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Manage Products</h2>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Type</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Material</th>
              <th className="p-3 border">Life Span</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="hover:bg-gray-50">
                <td className="p-3 border">
                  <img
                    src={product.images?.[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="p-3 border font-medium">{product.name}</td>
                <td className="p-3 border capitalize">{product.type}</td>
                <td className="p-3 border">
                  ₹{product.type === "mural" ? product.muralPrice : product.price}
                </td>
                <td className="p-3 border">{product.category || "—"}</td>
                <td className="p-3 border">{product.material || "—"}</td>
                <td className="p-3 border">{product.lifeSpan || "—"}</td>
                <td className="p-3 border">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 bg-blue-600 text-white rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={formData.type || ""}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                placeholder="Type"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={formData.price || formData.muralPrice || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    [formData.type === "mural" ? "muralPrice" : "price"]: e.target.value,
                  })
                }
                placeholder="Price"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={formData.category || ""}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="Category"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={formData.material || ""}
                onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                placeholder="Material"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                value={formData.lifeSpan || ""}
                onChange={(e) => setFormData({ ...formData, lifeSpan: e.target.value })}
                placeholder="Life Span"
                className="w-full p-2 border rounded"
              />
              <textarea
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Description"
                className="w-full p-2 border rounded"
              />
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManageProducts;
