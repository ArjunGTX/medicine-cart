import "./App.css";
import { Medicines, MedicineType } from "./components/Medicines";
import { Cart } from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState<Cart>({});

  const handleAddToCart = (itemId: MedicineType) => {
    setCart((cart) => {
      if (cart[itemId]) {
        return {
          ...cart,
          [itemId]: cart[itemId] + 1,
        };
      }
      return {
        ...cart,
        [itemId]: 1,
      };
    });
  };

  const handleRemoveFromCart = (itemId: MedicineType) => {
    setCart((cart) => {
      if (cart[itemId]) {
        return {
          ...cart,
          [itemId]: cart[itemId] - 1,
        };
      }
      return cart;
    });
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Medicines
        cart={cart}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}
      />
      <Cart cart={cart} />
    </main>
  );
}

export default App;
