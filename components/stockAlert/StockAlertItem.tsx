import { StockAlert } from "@/types";
import React from "react";

type Props = {
  item: StockAlert;
};

function StockAlertItem({ item }: Props) {
  const { alertAmount, status, quantity, orderId, date } = item;
  return (
    <tr>
      <td>{orderId}</td>
      <td>{date}</td>
      <td>{quantity}</td>
      <td>{alertAmount}</td>
      <td>{status}</td>
    </tr>
  );
}

export default StockAlertItem;
