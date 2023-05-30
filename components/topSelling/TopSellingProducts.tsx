import { StockAlert } from "@/types";
import React from "react";
import TopSellingProductItem from "./TopSellingProductItem";

type Props = {
  data: StockAlert[];
};

function TopSellingProducts({ data }: Props) {
  return (
    <div className="h-auto relative flex flex-col">
      <h2 className="text-left font-semibold m-2 md:pl-1 md:ml-1  ">
        Top Selling Products
      </h2>
      <hr />
      <div className="h-auto relative flex flex-col">
        <div className=" bg-transparent m-2 p-8 md:items-center w-full sm:m-0 sm:p-0 overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="font-semibold px-6 py-1">Order ID</th>
                <th className="font-semibold px-6 py-1">Quantity</th>
                <th className="font-semibold px-6 py-1">Alert Amt.</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return <TopSellingProductItem key={item.id} item={item} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TopSellingProducts;
