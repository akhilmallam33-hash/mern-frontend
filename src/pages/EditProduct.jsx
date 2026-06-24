import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../api/productApi";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    inStock: true,
  });

  useEffect(() => {
    const loadProduct = async () => {
      const res = await getProductById(id);
      setForm(res.data);
    };

    loadProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateProduct(id, {
      ...form,
      price: Number(form.price),
    });

    navigate("/");
  };

  return (
    <div className="container">
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="category"
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

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}