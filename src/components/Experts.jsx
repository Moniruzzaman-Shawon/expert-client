// src/components/Experts.jsx
import { useEffect, useState } from "react";
import Card from "./Card";
import Cart from "./Cart";

export default function Experts() {
  const [experts, setExperts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("/experts.json") 
      .then((res) => res.json())
      .then((data) => setExperts(data))
      .catch((err) => console.error(err));
  }, []);

  const addToCart = (expert) => {
    if (!cartItems.find((item) => item.id === expert.id)) {
      setCartItems([...cartItems, expert]);
    }
  };

  return (
    <div className="p-6 lg:flex lg:gap-6">
      {/* Expert list */}
      <div className="lg:flex-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:overflow-auto">
        {experts.map((expert) => (
          <Card key={expert.id} expert={expert} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Height */}
      <div className="lg:flex-1 lg:h-[33vh] mt-6 lg:mt-0">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}
