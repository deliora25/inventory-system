// types
import { StatusDataType, StockItemType } from '@/types';

// components
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StatusDropdown from '../orders/dropdowns/status/StatusDropdown';
import StockButton from './StockButton';
import StockItemList from './StockItemList';

type Props = {
  data: StockItemType[];
  statusData: StatusDataType[];
};

function IncomingInvoice({ data, statusData }: Props) {
  const [search, setSearch] = useState('');

  const { register, watch } = useForm({
    defaultValues: {
      statusOption: '',
    },
  });

  const statusOption = watch('statusOption');

  const statusOptions = statusData.map((item) => item.name);

  return (
    <div className="w-full h-full bg-white p-">
      <div className="grid grid-cols-2 pt-8 pb-4 px-2 border-b-2">
        <div className="col-span-1 w-full">
          <h2 className="grid font-semibold sm:text-lg text-sm h-full text-left items-center md:ml-10 sm:ml-2 ">
            INCOMING INVOICE
          </h2>
        </div>
        <div className="col-span 1 justify-items-end grid">
          <StockButton />
        </div>
      </div>

      <div className="grid grid-cols-2 w-full my-1 sm:my-8 ">
        <div className="col-span-2 sm:col-span-1 sm:pl-10 pl-0 pt-1 ">
          <input
            type="text"
            placeholder="Search Order ID"
            className="border border-opacity-70 border-solid rounded  min-w-56 max-w-full ml-[10%] font-light h-8 pl-2 "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-span-2 sm:col-span-1  w-full sm:w-fit gap-5 ml-10 justify-end md:pr-[20%] sm:flex-grid ">
          <StatusDropdown
            statusData={statusData}
            register={register}
            statusOption={statusOption}
            statusOptions={statusOptions}
            search={search}
          />
        </div>
      </div>
      <StockItemList data={data} search={search} statusOption={statusOption} />
    </div>
  );
}

export default IncomingInvoice;
