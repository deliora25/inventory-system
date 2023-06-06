import { ProductDataType } from '@/types';
import React from 'react';
import ProductItem from './ProductItem';

type Props = {
  search: string;
  products: ProductDataType[];
};

function ProductItemsList({ search, products }: Props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Quantity</th>
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
