import { ProductDataType } from '@/types';
import Link from 'next/link';
import React from 'react';

type Props = {
  item: ProductDataType;
};

function ProductItem({ item }: Props) {
  const { id, productName, categoryName, quantity } = item;
  return (
    <tr>
      <td>
        <Link href={`/products/${id}`}>{productName}</Link>
      </td>

      <td>{categoryName}</td>
      <td>{quantity}</td>
    </tr>
  );
}

export default ProductItem;
