import { Button } from "@mui/material";

function OrdersButton() {
  return (
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
  );
}

export default OrdersButton;
