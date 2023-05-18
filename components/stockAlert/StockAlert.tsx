import React, { useEffect, useState } from "react";

import { StockAlert } from "@/types";
import TopSellingProducts from "../topSelling/TopSellingProducts";
import StockAlertItems from "./StockAlertItems";

function StockAlert() {
  const [data, setData] = useState<StockAlert[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/stockalert/")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="flex gap-4 mb-8">
      <div className=" col-2 w-2/3 bg-white h-auto shadow-sm rounded ">
        <h2 className="text-left font-semibold my-2 mx-2 pl-4 md:pl-1 md:ml-1 sm:ml-1">
          Stock Alert
        </h2>
        <hr />
        <StockAlertItems data={data} />
      </div>
      <div className="col-1 w-1/3 bg-white h-auto shadow-sm rounded">
        <TopSellingProducts data={data} />
      </div>
    </div>
  );
}

export default StockAlert;
