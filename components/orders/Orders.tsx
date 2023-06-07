// icons
import DateRangeIcon from '@mui/icons-material/DateRange';

// types
import { OrderItemType, SalesDataType, StatusDataType } from '@/types';

// components
import { useState } from 'react';

import SalesDropdown from './dropdowns/sales/SalesDropdown';
import StatusDropdown from './dropdowns/status/StatusDropdown';
import OrdersButton from './OrdersButton';
import Input from '../common/Input';
import OrderItemList from './OrderItemList';

type Props = {
  data: OrderItemType[];
  salesData: SalesDataType[];
  statusData: StatusDataType[];
};

function Orders({ data, salesData, statusData }: Props) {
  const [search, setSearch] = useState('');
  return (
    <div className="w-full h-full bg-white p-">
      <div className="grid grid-cols-2 pt-8 pb-4 px-2 border-b-2">
        <div className="col-span-1 w-full">
          <h2 className="grid font-semibold text-lg h-full text-center items-center">
            ORDERS
          </h2>
        </div>
        <div className="col-span 1">
          <OrdersButton data={data} />
        </div>
      </div>
      {/* to do dropdowns */}
      <div className="grid grid-cols-2 w-full my-10">
        <div className="cols-span-1 pl-10">
          <Input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Order ID"
            value={search}
            className="!w-auto"
          />
        </div>
        <div className="cols-span-1 flex w-full gap-5 justify-end md:pr-[20%] sm:flex-grid">
          <div className="h-fit w-fit border rounded-md">
            <DateRangeIcon className="items-center justify-center h-7 w-6 m-1" />
          </div>
          <SalesDropdown salesData={salesData} />

          <StatusDropdown statusData={statusData} />
        </div>
      </div>
      <div className="h-auto">
        <OrderItemList data={data} search={search} />
      </div>
    </div>
  );
}

export default Orders;
