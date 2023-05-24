import { OrderItemType } from "@/types";
import { Checkbox } from "@mui/material";

type Props = {
  item: OrderItemType;
};

function OrderItem({ item }: Props) {
  const { orderId, date, customer, salesChannel, destination, items, status } =
    item;

  return (
    <tr className="text-center font-light text-sm md:text-md sm:text-md">
      <td className="py-2 px-2 border-y-2  ">
        <Checkbox />
        {orderId}
      </td>
      <td className="py-2 px-2 border-y-2  ">{date}</td>
      <td className="py-2 px-2 border-y-2  ">{customer}</td>
      <td className="py-2 px-2 border-y-2  ">{salesChannel}</td>
      <td className="py-2 px-2 border-y-2  ">{destination}</td>
      <td className="py-2 px-2 border-y-2  ">{items}</td>
      <td className="py-2 px-2 border-y-2  ">
        <div className="rounded-full border bg-green-400">{status}</div>
      </td>
    </tr>
  );
}

export default OrderItem;
