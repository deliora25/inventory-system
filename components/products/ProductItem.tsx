import { ProductDataType } from '@/types';
import Link from 'next/link';
import React from 'react';

type Props = {
  item: ProductDataType;
};

function ProductItem({ item }: Props) {
  const { id, productName, categoryName, quantity } = item;
  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md border-r-2 ">
        <Link
          href={`/products/${id}`}
          className="text-slate-500 font-semibold rounded-md hover:bg-slate-200 p-1 py-2  "
        >
          {productName}
        </Link>
      </td>

      <td className="py-2 px-2 border-y-2 text-md border-r-2 ">
        {categoryName}
      </td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2 ">{quantity}</td>
    </tr>
  );
}

export default ProductItem;
