import { OrderItemType } from '@/types';
import { useState } from 'react';
import OrderItem from './OrderItem';

type Props = {
  data: OrderItemType[];
  search: string;
  salesOption: string;
  statusOption: string;
};

function OrderItemList({ data, search, salesOption, statusOption }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    setIsChecked(true);
  };

  return (
    <div className="w-full bg-transparent m-2 p-8 md:items-center sm:m-0 sm:p-0 overflow-x-auto">
      <table className="border rounded-xl w-full table-auto">
        <thead>
          <tr className="text-md md:text-lg sm:text-md">
            <th className="font-semibold px-6 py-1">
              <input
                type="checkbox"
                className="place-items-end rounded-sm border-2 m-1 cursor-pointer"
                checked={isChecked}
                onClick={handleClick}
              />
              Order Id
            </th>
            <th className="font-semibold px-6 py-1">Date</th>
            <th className="font-semibold px-6 py-1">Customer</th>
            <th className="font-semibold px-6 py-1">Sales Channel</th>
            <th className="font-semibold px-6 py-1">Destination</th>
            <th className="font-semibold px-6 py-1">Items</th>
            <th className="font-semibold px-6 py-1">Status</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              const { salesChannel, status } = item;
              let salesChannelBranch = '';
              if (salesChannel === 1) {
                salesChannelBranch = 'Main Branch';
              } else if (salesChannel === 2) {
                salesChannelBranch = 'Secondary Branch';
              } else if (salesChannel === 3) {
                salesChannelBranch = 'Online Sales';
              }

              let orderStatus = '';

              if (status === 1) {
                orderStatus = 'Pending';
              }
              if (status === 2) {
                orderStatus = 'Success';
              }
              if (status === 3) {
                orderStatus = 'Cancelled';
              }
              if (salesOption === '' && search === '' && statusOption === '') {
                return item;
              }
              if (
                salesChannelBranch.includes(salesOption) &&
                item.id.toString().includes(search) &&
                orderStatus.toString().includes(statusOption)
              ) {
                return item;
              }
              if (
                search === '' &&
                salesChannelBranch.includes(salesOption) &&
                orderStatus.includes(statusOption)
              ) {
                return item;
              }

              return null;
            })
            .map((item) => (
              <OrderItem item={item} key={item.id} isChecked={isChecked} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderItemList;
