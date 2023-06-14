import { StockItemType } from '@/types';
import { Checkbox } from '@mui/material';
import Link from 'next/link';

type Props = {
  item: StockItemType;
};

function StockItem({ item }: Props) {
  const { id, date, salesChannel, items, instruction, status } = item;
  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md ">
        <Checkbox />
        <Link href={`stock/${id}`}>{id}</Link>
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">{date}</td>

      <td className="py-2 px-2 border-y-2 text-md ">{salesChannel}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{instruction}</td>
      <td className="py-2 px-2 border-y-2 text-md ">
        {items
          .map((x) => Number(x.quantity))
          .reduce((a: number | null, b: number | null) => a + b, 0)}
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">
        <div className="rounded-full border bg-green-400">{status}</div>
      </td>
    </tr>
  );
}

export default StockItem;
