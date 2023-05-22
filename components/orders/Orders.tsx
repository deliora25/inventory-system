import React from "react";

import Button from "@mui/material/Button";

function Orders() {
  return (
    <div className="w-full h-screen bg-white p-4">
      <div className="grid grid-cols-2">
        <h2 className="col-span-1">Orders</h2>
        <div className="col-span 1">
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outlined" className="">
              Outlined
            </Button>
            <Button variant="outlined" className="">
              Outlined
            </Button>
            <Button variant="outlined" className="">
              Outlined
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
