import { ProductDataType } from '@/types';
import React from 'react';
import ProductItem from './ProductItem';

type Props = {
  search: string;
  products: ProductDataType[];
};

function ProductItemsList({ search, products }: Props) {
  return (
    <div className="w-fit bg-transparent m-2 p-8 md:items-center sm:m-0 sm:p-0 overflow-x-auto">
      <table className="border rounded-xl w-full table-auto">
        <thead>
          <tr className="text-md md:text-lg sm:text-md">
            <th className="font-semibold px-6 py-1 border-r-2">Product Name</th>
            <th className="font-semibold px-6 py-1 border-r-2">Category</th>
            <th className="font-semibold px-6 py-1 border-r-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((item) => {
              if (search === '') {
                return item;
              }
              if (
                item.productName
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return item;
              }
              return null;
            })
            .map((item) => (
              <ProductItem item={item} key={item.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductItemsList;
