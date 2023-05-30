import { OrderItemType } from "@/types";
import { Checkbox } from "@mui/material";

type Props = {
  item: OrderItemType;
};

function StockItem({ item }: Props) {
  const { orderId, date, salesChannel, category, instruction, items, status } =
    item;
  console.log(items);
  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md ">
        <Checkbox />
        {orderId}
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">{date}</td>
      <td className="py-2 px-2 border-y-2 text-md ">test</td>
      <td className="py-2 px-2 border-y-2 text-md ">{category}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{salesChannel}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{instruction}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{items.length}</td>
      <td className="py-2 px-2 border-y-2 text-md ">
        <div className="rounded-full border bg-green-400">{status}</div>
      </td>
    </tr>
  );
}

export default StockItem;
