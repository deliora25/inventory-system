// types
import { OrderItemType, SalesDataType, StatusDataType } from '@/types';

// components
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import Dropdowns from './dropdowns/orders/Dropdowns';
import OrdersButton from './OrdersButton';
import OrderItemList from './OrderItemList';

type Props = {
  data: OrderItemType[];
  salesData: SalesDataType[];
  statusData: StatusDataType[];
};

function Orders({ data, salesData, statusData }: Props) {
  const [search, setSearch] = useState('');

  const { register, watch } = useForm({
    defaultValues: {
      salesOption: '',
      statusOption: '',
    },
  });

  const salesOption = watch('salesOption');
  const statusOption = watch('statusOption');

  const salesOptions = salesData.map((item) => item.name);

  const statusOptions = statusData.map((item) => item.name);

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
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Order ID"
            value={search}
            className="!w-auto"
          />
        </div>
        <div className="cols-span-1 flex w-full gap-5 justify-end md:pr-[20%] sm:flex-grid">
          <Dropdowns
            salesData={salesData}
            statusData={statusData}
            search={search}
            register={register}
            salesOptions={salesOptions}
            statusOptions={statusOptions}
            salesOption={salesOption}
            statusOption={statusOption}
          />
        </div>
      </div>
      <div className="h-auto">
        <OrderItemList
          data={data}
          search={search}
          salesOption={salesOption}
          statusOption={statusOption}
        />
      </div>
    </div>
  );
}

export default Orders;
