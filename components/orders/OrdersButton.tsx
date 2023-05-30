import { Button } from "@mui/material";
import { useState } from "react";
import NewOrderModal from "../modals/NewOrderModal";

function OrdersButton() {
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
        onClick={handleClick}
        variant="outlined"
        data-te-toggle="modal"
        aria-hidden="true"
        className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500"
      >
        + New Orders
      </Button>
      <NewOrderModal isOpen={openModal} onClose={handleClose} />
    </div>
  );
}

export default OrdersButton;
