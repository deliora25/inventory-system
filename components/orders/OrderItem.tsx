import { OrderItemType } from '@/types';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';

type Props = {
  item: OrderItemType;
};

function OrderItem({ item }: Props) {
  const { id, date, items, salesChannel, destination, status } = item;

  let salesChannelBranch = '';
  if (salesChannel === 1) {
    salesChannelBranch = 'Main Branch';
  } else if (salesChannel === 2) {
    salesChannelBranch = 'Secondary Branch';
  } else if (salesChannel === 3) {
    salesChannelBranch = 'Online Sales';
  }

  let bgClr = '';
  if (status === 'Pending') {
    bgClr = 'bg-yellow-400';
  } else if (status === 'Success') {
    bgClr = 'bg-green-400';
  } else {
    bgClr = 'bg-red-500';
  }

  return (
    <tr className="text-center font-light" key={item.id}>
      <td className="py-2 px-2 border-y-2 text-md ">
        <Checkbox />

        <Link
          href={`/orders/${item.id}`}
          className="text-slate-500 font-semibold rounded-md hover:bg-slate-200 p-1 py-2  "
        >
          {id}
        </Link>
      </td>
      <td className="py-2 px-2  border-y-2 text-md ">{date}</td>
      <td className="py-2 px-2 border-y-2 text-md ">
        {item.customer.firstName}
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">{salesChannelBranch}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{destination}</td>
      <td className="py-2 px-2 border-y-2 text-md ">
        {items
          .map((x) => Number(x.quantity))
          .reduce((a: number | null, b: number | null) => a + b, 0)}
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">
        <div className={`rounded-full border ${bgClr}`}>{status}</div>
      </td>
    </tr>
  );
}

export default OrderItem;
