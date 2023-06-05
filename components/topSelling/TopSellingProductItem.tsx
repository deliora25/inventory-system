import { StockAlert } from "@/types";
import React from "react";

type Props = {
  item: StockAlert;
};

function TopSellingProductItem({ item }: Props) {
  const { orderId, quantity, alertAmount } = item;
  console.log(quantity);
  return (
    <tr className="text-center font-extralight">
      <td className="sm:py-0  px-6 py-1">{orderId}</td>
      <td className="sm:py-0 px-6 py-1">test</td>
      <td className="sm:py-0  px-6 py-1">{alertAmount}</td>
    </tr>
  );
}

export default TopSellingProductItem;
