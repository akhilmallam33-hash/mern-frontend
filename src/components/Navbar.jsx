import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Product CRUD App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link>
      </div>
    </nav>
  );
}