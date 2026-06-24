import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../api/productApi";

export default function AddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    inStock: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct({
        ...form,
        price: Number(form.price),
      });

      navigate("/");
    } catch {
      alert("Failed to add product");
    }
  };

  return (
    <div className="container">
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <label>
          <input
            name="inStock"
            type="checkbox"
            checked={form.inStock}
            onChange={handleChange}
          />
          In Stock
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}