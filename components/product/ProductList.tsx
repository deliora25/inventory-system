import React from "react";
import ProductItem from "./ProductItem";
import { ProductType } from "@/types";

type Props = {
  data: ProductType[];
  isClicked: boolean;
};

function ProductList({ data, isClicked }: Props) {
  return (
    <div className="h-auto">
      <div className="w-full bg-transparent m-2 p-8 md:items-center sm:m-0 sm:p-0 overflow-x-auto">
        <table className="border rounded-xl w-full table-auto">
          <thead>
            <tr className="text-md md:text-lg sm:text-md">
              <th className="font-semibold px-6 py-1">Product Name </th>
              <th className="font-semibold px-6 py-1">Category</th>
              <th className="font-semibold px-6 py-1">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <ProductItem item={item} key={item.id} isClicked={isClicked} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductList;
