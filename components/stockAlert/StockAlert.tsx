import React, { useEffect, useState } from "react";
import StockAlertItem from "./StockAlertItem";
import { StockAlert } from "@/types";
import TopSellingProducts from "../topSelling/TopSellingProducts";

function StockAlert() {
  const [data, setData] = useState<StockAlert[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/stockalert")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="flex gap-4 mb-8">
      <div className=" col-2 w-2/3 bg-white h-auto shadow-sm rounded ">
        <h2 className="text-left font-semibold m-2 pl-4 md:pl-1 md:ml-0 sm:ml-0">
          Stock Alert
        </h2>
        <hr />
        <div className="relative top-0 h-auto mb-1 w-full bg-white grid grid-cols-5 gap-3 pt-1 justify-items-center  md:pl-1 md:ml-0">
          <StockAlertItem title="Order ID" item="orderId" />
          {/* <StockAlertItem title="Date" item="date" id={2} />
          <StockAlertItem title="Quantity" item="quantity" id={3} />
          <StockAlertItem title="Alert Amt." item="alertAmount" id={4} />
          <StockAlertItem title="Status" item="status" id={5} /> */}
        </div>
      </div>
      <TopSellingProducts />
    </div>
  );
}

export default StockAlert;
