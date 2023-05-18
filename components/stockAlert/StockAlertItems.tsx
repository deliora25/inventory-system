import { StockAlert, Title } from "@/types";
import React from "react";
import StockAlertItem from "./StockAlertItem";

type Props = {
  data: StockAlert[];
  title: Title[];
};

function StockAlertItems({ data, title }: Props) {
  return (
    <div className="relative top-0 h-auto mb-1 w-full bg-white  gap-3 pt-1 justify-items-center  md:pl-1 md:ml-0">
      <div>
        <div>
          <table>
            <thead>
              <th>Order ID</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Alert Amt.</th>
              <th>Status</th>
            </thead>
            <tbody>
              {data.map((item) => {
                return <StockAlertItem key={item.id} item={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StockAlertItems;
