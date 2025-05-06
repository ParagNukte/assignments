// src/components/AddProductForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/productsSlice";

const AddProductForm: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock_quantity: 0,
    price: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "stock_quantity" || name === "price" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.category || formData.price <= 0) {
      alert("Please fill all required fields with valid values.");
      return;
    }

    dispatch(addProduct(formData));
    setFormData({
      name: "",
      category: "",
      stock_quantity: 0,
      price: 0,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-4 max-w-md"
    >
      <h2 className="text-lg font-semibold">Add New Product</h2>

      <div>
        <label className="block font-medium">Product Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-medium">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full border rounded p-2"
        >
          <option value="">-- Select Category --</option>
          <option value="Electronics">Electronics</option>
          <option value="Apparel">Apparel</option>
          <option value="Food">Food</option>
          <option value="Toys">Toys</option>
          <option value="Beauty">Beauty</option>
          <option value="Books">Books</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Stock Quantity</label>
        <input
          type="number"
          name="stock_quantity"
          value={formData.stock_quantity}
          onChange={handleChange}
          min={0}
          className="w-full border rounded p-2"
        />
      </div>

      <div>
        <label className="block font-medium">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min={0}
          step="0.01"
          className="w-full border rounded p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
