import { StockAlert } from "@/types";
import React from "react";
type Props = {
  item: StockAlert;
};

function TopSellingProductItem({ item }: Props) {
  const { orderId, quantity, alertAmount } = item;

  return (
    <div
      key={item.id}
      className="flex gap-2 text-center font-extralight items-center"
    >
      <tr>{orderId}</tr>
      <tr>{quantity}</tr>
      <tr>{alertAmount}</tr>
    </div>
  );
}

export default TopSellingProductItem;
