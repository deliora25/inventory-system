import { StockAlert } from "@/types";
import React from "react";

type Props = {
  item: StockAlert;
};

function StockAlertItem({ item }: Props) {
  const { orderId, date } = item;
  return (
    <div className="col-span-1 items-center justify-center">
      <h2 className="font-semibold text-base">{date}</h2>
    </div>
  );
}

export default StockAlertItem;
