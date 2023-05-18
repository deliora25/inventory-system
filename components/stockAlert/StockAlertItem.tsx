import { StockAlert } from "@/types";
import React from "react";

type Props = {
  item: StockAlert;
};

function StockAlertItem({ item }: Props) {
  const { alertAmount, status, quantity, orderId, date } = item;
  return (
    <tr className="font-extralight justify-center ">
      <td className="text-center sm:py-0  px-6 py-1">{orderId}</td>
      <td className="text-center sm:py-0  px-6 py-1">{date}</td>
      <td className="text-center  sm:py-0 px-6 py-1">{quantity}</td>
      <td className="text-center sm:py-0  px-6 py-1">{alertAmount}</td>
      <td className="text-center  sm:py-0 px-6 py-1">{status}</td>
    </tr>
  );
}

export default StockAlertItem;
