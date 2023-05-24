import OrderItemList from "./OrderItemList";
import OrdersButton from "./OrdersButton";

import DateRangeIcon from "@mui/icons-material/DateRange";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { OrderItemType } from "@/types";

type Props = {
  data: OrderItemType[];
};

function Orders({ data }: Props) {
  return (
    <div className="w-full h-full bg-white p-">
      <div className="grid grid-cols-2 py-4 px-2 ">
        <div className="col-span-1 w-full">
          <h2 className="grid font-semibold text-lg h-full text-center">
            ORDERS
          </h2>
        </div>
        <div className="col-span 1">
          <OrdersButton />
        </div>
      </div>

      {/* to do dropdowns*/}
      <div className="grid grid-cols-2 w-full my-10">
        <div className="cols-span-1 pl-10">
          <input
            type="text"
            placeholder="Search Order ID"
            className="border border-opacity-70 border-solid rounded  min-w-56 max-w-full ml-[10%] font-light h-8 pl-2"
          />
        </div>
        <div className="cols-span-1 flex flex-grid w-full gap-5">
          <div className="h-fit w-fit border rounded-md ">
            <DateRangeIcon className="items-center justify-center h-6 w-6 m-1" />
          </div>
          <div className="h-fit w-fit border rounded-md flex items-center">
            <h2 className="items-center justify-center h-6 w-auto m-1">
              Sales
            </h2>
            <KeyboardArrowDownIcon />
          </div>
          <div className="h-fit w-fit border rounded-md flex items-center">
            <h2 className="items-center justify-center h-6 w-auto m-1">
              Status
            </h2>
            <KeyboardArrowDownIcon />
          </div>
          <div className="h-fit w-fit border rounded-md flex items-center">
            <h2 className="items-center justify-center h-6 w-auto m-1">
              Filter
            </h2>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <OrderItemList data={data} />
    </div>
  );
}

export default Orders;
