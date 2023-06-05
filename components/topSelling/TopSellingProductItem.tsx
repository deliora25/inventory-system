import { StockAlertType } from '@/types';
import React from 'react';

type Props = {
  item: StockAlertType;
};

function TopSellingProductItem({ item }: Props) {
  const { orderId, quantity, alertAmount } = item;
  return (
    <tr className="text-center font-extralight">
      <td className="sm:py-0  px-6 py-1">{orderId}</td>
      <td className="sm:py-0 px-6 py-1">{quantity}</td>
      <td className="sm:py-0  px-6 py-1">{alertAmount}</td>
    </tr>
  );
}

export default TopSellingProductItem;
