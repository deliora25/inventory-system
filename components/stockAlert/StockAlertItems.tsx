import { StockAlert, Title } from "@/types";
import React from "react";
import StockAlertItem from "./StockAlertItem";

type Props = {
  data: StockAlert[];
  title: Title[];
};

function StockAlertItems({ data }: Props) {
  return (
    <div className="h-auto relative flex flex-col">
      <div className=" bg-transparent m-2 p-8 md:items-center w-full sm:m-0 sm:p-0 overflow-x-auto">
        <table className=" table-auto w-full">
          <thead className="  w-full">
            <th className="font-semibold px-6 py-1">Order ID</th>
            <th className="font-semibold px-6 py-1">Date</th>
            <th className="font-semibold px-6 py-1">Quantity</th>
            <th className="font-semibold px-6 py-1">Alert Amt.</th>
            <th className="font-semibold px-6 py-1">Status</th>
          </thead>
          <tbody>
            {data.map((item) => {
              return <StockAlertItem key={item.id} item={item} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockAlertItems;
