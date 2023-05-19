import React from "react";
import BarGraph from "./BarGraph";
import PieChartOne from "./PieChartOne";

function Graph() {
  return (
    <div className="grid grid-cols-3  gap-5 mb-8">
      <div className=" col-span-3 md:col-span-2  bg-white h-64 shadow-sm rounded">
        <BarGraph />
      </div>
      <div className=" col-span-3 md:col-span-1 bg-white h-64 shadow-sm rounded">
        <div>
          <h2 className="px-4 pt-2 pb-0 mb-0 font-semibold">
            Top Selling Products
          </h2>
        </div>
        <div>
          <PieChartOne className="items-center relative top-0 left-0" />
        </div>
      </div>
    </div>
  );
}

export default Graph;
