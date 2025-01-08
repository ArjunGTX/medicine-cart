import React from "react";
import { MedicineType } from "./Medicines";

type Props = {
  itemId: MedicineType;
  count: number;
};

export const CartCard: React.FC<Props> = ({ itemId, count }) => {
  return (
    <div key={itemId}>
      {itemId} {count}
    </div>
  );
};
