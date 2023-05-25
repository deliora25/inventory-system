import { Button } from "@mui/material";

function StockButton() {
  return (
    <div className="grid grid-cols-1 pr-[10%]">
      <Button
        variant="outlined"
        className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500"
      >
        + New Stock
      </Button>
    </div>
  );
}

export default StockButton;
