import { StockAlertType } from '@/types';
import TopSellingProductItem from './TopSellingProductItem';

type Props = {
  data: StockAlertType[];
};

function TopSellingProductItemList({ data }: Props) {
  return (
    <div className="h-auto relative flex flex-col">
      <div className=" bg-transparent m-2 p-8 md:items-center w-full sm:m-0 sm:p-0 overflow-x-auto">
        <table className=" table-auto w-full">
          <thead className=" ">
            <tr>
              <th className="font-semibold px-6 py-1">Order ID</th>
              <th className="font-semibold px-6 py-1">Quantity</th>
              <th className="font-semibold px-6 py-1">Alert Amt.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TopSellingProductItem key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopSellingProductItemList;
