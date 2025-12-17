import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Our Products</h2>
      {products.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
          <p>{p.description}</p>
          <strong>₹{p.price}</strong>
        </div>
      ))}
    </div>
  );
}
