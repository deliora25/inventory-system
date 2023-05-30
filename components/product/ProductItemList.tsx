import { ProductListType, StockType } from "@/types";
import ProductItem from "./ProductItem";

type Props = {
  data: ProductListType[];
  isClicked: boolean;
};

function ProductItemList({ data, isClicked }: Props) {
  return (
    <div className="h-auto pb-5 px-8">
      <div className="w-full bg-transparent m-2 p-8 md:items-center sm:m-0 sm:p-0 overflow-x-auto">
        <table className="border rounded-xl w-full table-fixed">
          <thead>
            <tr className="text-md md:text-lg sm:text-md">
              <th className="font-semibold px-6 py-1 border-r-2">
                Product Name
              </th>
              <th className="font-semibold px-6 py-1 border-r-2">Category</th>
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

export default ProductItemList;
