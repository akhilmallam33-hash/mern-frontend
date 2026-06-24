import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../api/productApi";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProducts = async () => {
    try {
      setLoading(true);
      const res = await getProducts();
      setProducts(res.data);
    } catch  {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await deleteProduct(id);
      loadProducts();
    } catch {
      alert("Failed to delete product");
    }
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    loadProducts();
  }, 0);

  return () => clearTimeout(timer);
}, []);

  if (loading) return <h3>Loading products...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div className="container">
      <h1>All Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <div className="card" key={product._id}>
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Category: {product.category}</p>
              <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

              <Link to={`/edit/${product._id}`}>
                <button>Edit</button>
              </Link>

              <button onClick={() => handleDelete(product._id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}