import React from "react";
import { Cart } from "./Cart";
import { MedicineCard } from "./MedicineCard";
import { medicines } from "../constants/medicines";

export type MedicineType = "dollo" | "dollo1" | "doll2";

export type Medicine = {
  id: MedicineType;
  price: number;
  name: string;
};

type Props = {
  onAdd: (id: MedicineType) => void;
  onRemove: (id: MedicineType) => void;
  cart: Cart;
};

export const Medicines: React.FC<Props> = ({ cart, onAdd, onRemove }) => {
  return (
    <div>
      {medicines.map((item) => (
        <MedicineCard
          cart={cart}
          medicine={item}
          onAdd={onAdd}
          onRemove={onRemove}
          key={item.id}
        />
      ))}
    </div>
  );
};
