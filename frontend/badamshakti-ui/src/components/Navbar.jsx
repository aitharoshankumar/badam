import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#5c4033", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "15px", color: "white" }}>Products</Link>
      <Link to="/about" style={{ marginRight: "15px", color: "white" }}>About</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
    </nav>
  );
}
