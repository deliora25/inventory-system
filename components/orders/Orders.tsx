import OrderItemList from "./OrderItemList";
import OrdersButton from "./OrdersButton";

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
            placeholder="Search order ID"
            className="border border-opacity-70 border-solid rounded  min-w-56 max-w-full ml-[10%] font-light"
          />
        </div>
        <div className="cols-span-1">test</div>
      </div>
      <OrderItemList data={data} />
    </div>
  );
}

export default Orders;
