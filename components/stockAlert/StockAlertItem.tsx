import { StockAlertType } from '@/types';
import React from 'react';

type Props = {
  item: StockAlertType;
};

function StockAlertItem({ item }: Props) {
  const { alertAmount, status, items, orderId, date } = item;

  return (
    <tr className="font-extralight  text-center">
      <td className="text-center sm:py-0  px-6 py-1">{orderId}</td>
      <td className="text-center sm:py-0  px-6 py-1">{date}</td>
      <td className="text-center  sm:py-0 px-6 py-1">
        {items.map((x) => x.product)}
      </td>
      <td className="text-center sm:py-0  px-6 py-1">{alertAmount}</td>
      <td className="text-center  sm:py-0 px-6 py-1">{status}</td>
    </tr>
  );
}

export default StockAlertItem;
