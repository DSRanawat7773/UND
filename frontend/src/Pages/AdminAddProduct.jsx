import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productSlice";

const AdminAddProduct = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    thickness: "",
    category: "",
    price: "",
    shippingCharge: "free",
    description: "",
    material: "",
    lifeSpan: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.entries(formData).forEach(([key, value]) => fd.append(key, value));
    dispatch(addProduct(fd));
    alert("Product added successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          "name",
          "size",
          "thickness",
          "category",
          "price",
          "description",
          "material",
          "lifeSpan",
        ].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        ))}
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
