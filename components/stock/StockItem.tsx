import { StockItemType } from '@/types';
import { Checkbox } from '@mui/material';

type Props = {
  item: StockItemType;
};

function StockItem({ item }: Props) {
  const { id, date, salesChannel, items, status, instruction } = item;

  let salesChannelBranch = '';
  if (salesChannel === 1) {
    salesChannelBranch = 'Main Branch';
  }
  if (salesChannel === 2) {
    salesChannelBranch = 'Secondary Branch';
  }
  if (salesChannel === 3) {
    salesChannelBranch = 'Online Sales';
  }

  let bgClr = '';

  let stockStatus = '';

  if (status === 1) {
    stockStatus = 'Pending';
    bgClr = 'bg-yellow-400';
  }
  if (status === 2) {
    stockStatus = 'Success';
    bgClr = 'bg-green-400';
  }
  if (status === 3) {
    stockStatus = 'Cancelled';
    bgClr = 'bg-red-500';
  }

  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md bg-yellow-">
        <Checkbox />
        <Link href={`stock/${id}`}>{id}</Link>
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">{date}</td>

      <td className="py-2 px-2 border-y-2 text-md ">{salesChannelBranch}</td>
      <td className="py-2 px-2 border-y-2 text-md ">{instruction}</td>
      <td className="py-2 px-2 border-y-2 text-md ">
        {items
          .map((x) => Number(x.quantity))
          .reduce((a: number | null, b: number | null) => a + b, 0)}
      </td>
      <td className="py-2 px-2 border-y-2 text-md ">
        <div className={`rounded-full border ${bgClr}`}>{stockStatus}</div>
      </td>
    </tr>
  );
}

export default StockItem;
