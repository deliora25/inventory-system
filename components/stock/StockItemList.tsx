import { Checkbox } from '@mui/material';

import { StockItemType } from '@/types';

import StockItem from './StockItem';

type Props = {
  data: StockItemType[];
  search: string;
  statusOption: string;
};

function StockItemList({ data, search, statusOption }: Props) {
  return (
    <div className="h-auto">
      <div className="w-full bg-transparent m-2 p-8 md:items-center sm:m-0 sm:p-0 overflow-x-auto">
        <table className="border rounded-xl w-full table-auto">
          <thead>
            <tr className="text-md md:text-lg sm:text-md">
              <th className="font-semibold px-6 py-1">
                <Checkbox />
                Order Id
              </th>
              <th className="font-semibold px-6 py-1">Date</th>
              <th className="font-semibold px-6 py-1">Sales Channel</th>
              <th className="font-semibold px-6 py-1">Instruction</th>
              <th className="font-semibold px-6 py-1">Items</th>
              <th className="font-semibold px-6 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                let stockStatus = '';

                if (item.status === 1) {
                  stockStatus = 'Pending';
                }
                if (item.status === 2) {
                  stockStatus = 'Success';
                }
                if (item.status === 3) {
                  stockStatus = 'Cancelled';
                }
                if (statusOption === '' && search === '') {
                  return item;
                }
                if (
                  item.id.toString().includes(search) &&
                  stockStatus.toString().includes(statusOption)
                ) {
                  return item;
                }
                return null;
              })
              .map((item) => (
                <StockItem item={item} key={item.id} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StockItemList;
