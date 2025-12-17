import api from "../api/axiosConfig";

export default function Checkout() {

  const placeOrder = async () => {
    await api.post("/api/orders", {
      userId: 1,
      totalAmount: 499
    });
    alert("Order placed successfully");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
