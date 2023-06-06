import { OrderItemType } from '@/types';
import { Checkbox } from '@mui/material';
import Link from 'next/link';

type Props = {
  item: OrderItemType;
};

function OrderItem({ item }: Props) {
  const { orderId, date, customer, items, salesChannel, destination, status } =
    item;

  return (
    <tr className="text-center font-light" key={item.id}>
      <td className="py-2 px-2 border-y-2 text-md ">
        <Checkbox aria-label="checkBox" />
        <Link href="/orders/"> {orderId}</Link>
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">{date}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{customer}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{salesChannel}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{destination}</td>
      <td className="py-2 px-2 border-y-2 text-md ">
        {items
          .map((x) => x.quantity)
          .reduce((a: number | undefined, b: number | undefined) => a + b, 0)}
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">
        <div className="rounded-full border bg-green-400">{status}</div>
      </td>
    </tr>
  );
}

export default OrderItem;
