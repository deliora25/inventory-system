import OrderItemList from "./OrderItemList";
import OrdersButton from "./OrdersButton";

import DateRangeIcon from "@mui/icons-material/DateRange";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";

import { OrderItemType, SalesDataType, StatusDataType } from "@/types";
import { useState } from "react";

type Props = {
  data: OrderItemType[];
  salesData: SalesDataType[];
  statusData: StatusDataType[];
};

function Orders({ data, salesData, statusData }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  console.log(salesData);
  console.log(statusData);

  return (
    <div className="w-full h-full bg-white p-">
      <div className="grid grid-cols-2 pt-8 pb-4 px-2 border-b-2">
        <div className="col-span-1 w-full">
          <h2 className="grid font-semibold text-lg h-full text-center items-center">
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
        <div className="cols-span-1 flex w-full gap-5 justify-end md:pr-[20%] sm:flex-grid">
          <div className="h-fit w-fit border rounded-md">
            <DateRangeIcon className="items-center justify-center h-7 w-6 m-1" />
          </div>
          <div className="h-fit w-fit border rounded-md flex items-center">
            <Button
              className="h-7 w-auto m-1 font-semibold text-lg text-black"
              onClick={() => handleClick()}
            >
              <div className="flex">
                <p className="text-sm">Sales</p>
                {isClicked ? (
                  <KeyboardArrowUpIcon className="h-5" />
                ) : (
                  <KeyboardArrowDownIcon className="h-5" />
                )}
              </div>
            </Button>
          </div>
          {/* <div className="h-fit w-fit border rounded-md flex items-center">
            <Button
              className="h-7 w-auto m-1 font-semibold text-lg text-black"
              onClick={() => handleClick()}
            >
              <div className="flex">
                <p className="text-sm">Status</p>
                {isClicked ? (
                  <KeyboardArrowUpIcon className="h-5" />
                ) : (
                  <KeyboardArrowDownIcon className="h-5" />
                )}
              </div>
            </Button>
          </div>
          <div className="h-fit w-fit border rounded-md flex items-center">
            <Button
              className="h-7 w-auto m-1 font-semibold text-lg text-black"
              onClick={() => handleClick()}
            >
              <div className="flex">
                <p className="text-sm">Filter</p>
                {isClicked ? (
                  <KeyboardArrowUpIcon className="h-5" />
                ) : (
                  <KeyboardArrowDownIcon className="h-5" />
                )}
              </div>
            </Button>
          </div> */}
        </div>
      </div>
      <OrderItemList data={data} />
    </div>
  );
}

export default Orders;
