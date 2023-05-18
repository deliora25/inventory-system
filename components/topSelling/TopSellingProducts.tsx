import { StockAlert } from "@/types";
import React from "react";
import TopSellingProductItem from "./TopSellingProductItem";

type Props = {
  data: StockAlert[];
};

function TopSellingProducts({ data }: Props) {
  return (
    <div className="h-0">
      <h2 className="text-left font-semibold m-2 md:pl-1 md:ml-1 ">
        Top Selling Products
      </h2>
      <hr />
      <div>
        <table>
          <thead>
            <th className="font-semibold">
              <tr>
                <td>Order ID</td>
                <td>Quantity</td>
                <td>Alert Amt.</td>
              </tr>
            </th>
          </thead>
          <tbody>
            {data.map((item) => {
              return <TopSellingProductItem key={item.id} item={item} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingProducts;

// <div className="flex gap-4 mb-8">
//       <div className=" col-1 w-1/3 bg-white h-auto shadow-sm rounded ">
//         <h2 className="text-left font-semibold my-2 mx-2 pl-4 md:pl-1 md:ml-1 sm:ml-1">
//           Top Selling Products
//         </h2>
//         <hr />
//       </div>
//     </div>
