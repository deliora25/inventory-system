import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import OrderItem from "./OrderItem";

import { OrderItemType } from "@/types";

type Props = {
  data: OrderItemType[];
};

function Orders({ data }: Props) {
  console.log(data);
  return (
    <div className="w-full h-full bg-white p-">
      <div className="grid grid-cols-2 py-4 px-2 ">
        <div className="col-span-1 w-full">
          <h2 className="grid font-semibold text-lg h-full text-center">
            ORDERS
          </h2>
        </div>
        <div className="col-span 1">
          <div className="grid grid-cols-3 gap-2 justify-center pr-4  md:flex-col">
            <Button
              variant="outlined"
              className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500"
            >
              Export to Excel
            </Button>
            <Button
              variant="outlined"
              className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500 "
            >
              Import Orders
            </Button>
            <Button
              variant="outlined"
              className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500"
            >
              + New Orders
            </Button>
          </div>
        </div>
      </div>
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
                <th className="font-semibold px-6 py-1">Customer</th>
                <th className="font-semibold px-6 py-1">Sales Channel</th>
                <th className="font-semibold px-6 py-1">Destination</th>
                <th className="font-semibold px-6 py-1">Items</th>
                <th className="font-semibold px-6 py-1">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return <OrderItem item={item} key={item.id} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
