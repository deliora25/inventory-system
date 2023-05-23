import React from "react";

import Button from "@mui/material/Button";

function Orders() {
  return (
    <div className="w-full h-screen bg-white p-">
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
    </div>
  );
}

export default Orders;
