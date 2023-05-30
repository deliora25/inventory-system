import { Checkbox } from "@mui/material";

import { ProductListType, StockType } from "@/types";
import ProductItem from "./ProductItem";

type Props = {
  data: ProductListType[];
};

function ProductItemList({ data }: Props) {
  return (
    <div className="h-auto">
      <div className="w-full bg-transparent m-2 p-8 md:items-center sm:m-0 sm:p-0 overflow-x-auto">
        <table className="border rounded-xl w-full table-auto">
          <thead>
            <tr className="text-md md:text-lg sm:text-md">
              <th className="font-semibold px-6 py-1">
                <Checkbox />
                Order Id
              </th>
              <th className="font-semibold px-6 py-1">Date</th>
              <th className="font-semibold px-6 py-1">Product</th>
              <th className="font-semibold px-6 py-1">Category</th>
              <th className="font-semibold px-6 py-1">Sales Channel</th>
              <th className="font-semibold px-6 py-1">Instruction</th>
              <th className="font-semibold px-6 py-1">Items</th>
              <th className="font-semibold px-6 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return <ProductItem item={item} key={item.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductItemList;
