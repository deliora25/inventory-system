import { OrderItemType } from '@/types';
import { Checkbox } from '@mui/material';

type Props = {
  item: OrderItemType;
};

function OrderItem({ item }: Props) {
  const { orderId, date, customer, salesChannel, destination, status } = item;

  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md ">
        <Checkbox />
        {orderId}
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">{date}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{customer}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{salesChannel}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{destination}</td>
      {/* <td className="py-2 px-2 border-y-2 text-md ">{items}</td> */}
      <td className="py-2 px-2 border-y-2 text-md ">
        <div className="rounded-full border bg-green-400">{status}</div>
      </td>
    </tr>
  );
}

export default OrderItem;
