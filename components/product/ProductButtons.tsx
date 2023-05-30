import { Button } from "@mui/material";
import { useState } from "react";
import NewOrderModal from "../modals/NewOrderModal";

function ProductButtons() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="grid grid-cols-3 gap-2 justify-center pr-4  md:flex-col">
      <Button
        variant="outlined"
        className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500 "
      >
        Add new Product
      </Button>
    </div>
  );
}

export default ProductButtons;
