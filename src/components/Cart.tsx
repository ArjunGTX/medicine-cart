import React from "react";
import { CartCard } from "./CartCard";
import { MedicineType } from "./Medicines";
import { medicines } from "../constants/medicines";

export type Cart = Partial<Record<MedicineType, number>>;

type Props = {
  cart: Cart;
};

export const Cart: React.FC<Props> = ({ cart }) => {
  const totalPrice = Object.entries(cart).reduce<number>(
    (acc, [itemId, count]) => {
      const medicine = medicines.find((item) => item.id === itemId);
      if (medicine) {
        return (acc += medicine.price * count);
      }
      return acc;
    },
    0
  );
  return (
    <>
      <div>
        {Object.entries(cart).map(([itemId, count]) => (
          <CartCard itemId={itemId as MedicineType} count={count} />
        ))}
      </div>
      <div>${totalPrice}</div>
    </>
  );
};
