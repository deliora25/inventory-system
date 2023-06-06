// icons
import DateRangeIcon from '@mui/icons-material/DateRange';

// types
import { StatusDataType, StockType } from '@/types';

// components
import StatusDropdown from '../orders/dropdowns/status/StatusDropdown';
import StockButton from './StockButton';
import StockItemList from './StockItemList';

type Props = {
  data: StockType[];
  statusData: StatusDataType[];
};

function IncomingInvoice({ data, statusData }: Props) {
  return (
    <div className="w-full h-full bg-white p-">
      <div className="grid grid-cols-2 pt-8 pb-4 px-2 border-b-2">
        <div className="col-span-1 w-full">
          <h2 className="grid font-semibold text-lg h-full text-left items-center md:ml-10 sm:ml-2">
            INCOMING INVOICE
          </h2>
        </div>
        <div className="col-span 1 justify-items-end grid">
          <StockButton />
        </div>
      </div>

      <div className="grid grid-cols-2 w-full my-10">
        <div className="cols-span-1 pl-10">
          <input
            type="text"
            placeholder="Search Order ID"
            className="border border-opacity-70 border-solid rounded  min-w-56 max-w-full ml-[10%] font-light h-8 pl-2"
          />
        </div>
        <div className="cols-span-1 flex w-full gap-5 justify-end md:pr-[20%] sm:flex-grid">
          <div className="h-fit w-fit border rounded-md">
            <DateRangeIcon className="items-center justify-center h-7 w-6 m-1" />
          </div>

          <StatusDropdown statusData={statusData} />
        </div>
      </div>
      <StockItemList data={data} />
    </div>
  );
}

export default IncomingInvoice;
