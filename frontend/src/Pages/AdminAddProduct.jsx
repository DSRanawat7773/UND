import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productSlice";

const AdminAddProduct = () => {
  const dispatch = useDispatch();

  const [productType, setProductType] = useState("mural"); // mural or home-decor
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
    images: [],
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "images") {
      setFormData({ ...formData, images: Array.from(files) });
    } else if (name === "video") {
      setFormData({ ...formData, video: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();

    fd.append("name", formData.name);
    fd.append("description", formData.description);

    // Add common and optional fields
    ["size", "thickness", "category", "price", "shippingCharge", "material", "lifeSpan"].forEach((field) => {
      if (formData[field]) fd.append(field, formData[field]);
    });

    // Append video for all product types if available
    if (formData.video) fd.append("video", formData.video);

    // Append all images
    formData.images.forEach((file) => fd.append("images", file));

    dispatch(addProduct({ formData: fd, type: productType }));
    alert("Product uploaded successfully!");

    // Reset form
    setFormData({
      name: "",
      size: "",
      thickness: "",
      category: "",
      price: "",
      shippingCharge: "free",
      description: "",
      material: "",
      lifeSpan: "",
      images: [],
      video: null,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Product</h2>

      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            value="mural"
            checked={productType === "mural"}
            onChange={(e) => setProductType(e.target.value)}
          />{" "}
          Mural
        </label>
        <label>
          <input
            type="radio"
            value="home-decor"
            checked={productType === "home-decor"}
            onChange={(e) => setProductType(e.target.value)}
          />{" "}
          Home Decor
        </label>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        {/* Optional fields for home-decor */}
        {productType === "home-decor" && (
          <>
            {["size", "thickness", "category", "price", "material", "lifeSpan"].map((field) => (
              <input
                key={field}
                type="text"
                name={field}
                placeholder={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ))}
            <input
              type="text"
              name="shippingCharge"
              placeholder="Shipping Charge"
              value={formData.shippingCharge}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </>
        )}

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        {/* Video upload available for both types */}
        <input
          type="file"
          name="video"
          accept="video/*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Upload {productType === "mural" ? "Mural" : "Home Decor"}
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
