import React from "react";
import { Medicine, MedicineType } from "./Medicines";
import { Cart } from "./Cart";

type Props = {
  onAdd: (id: MedicineType) => void;
  onRemove: (id: MedicineType) => void;
  cart: Cart;
  medicine: Medicine;
};

export const MedicineCard: React.FC<Props> = ({
  cart,
  onAdd,
  onRemove,
  medicine,
}) => {
  const itemCount = cart[medicine.id];
  return (
    <div key={medicine.id}>
      {medicine.name} ${medicine.price}
      <button onClick={() => onAdd(medicine.id)}>
        {itemCount ? "Add more" : "Add to Cart"}
      </button>
      {!!itemCount && (
        <button onClick={() => onRemove(medicine.id)}>Remove from Cart</button>
      )}
    </div>
  );
};
