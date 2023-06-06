import { useState } from 'react';
import NewOrderModal from '../modals/order/NewOrderModal';
import Button from '../common/Button';

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
      <Button variant="submitButton" ariaLabel="exportExcel">
        Export to Excel
      </Button>
      <Button variant="submitButton" ariaLabel="importOrders">
        Import Orders
      </Button>
      <Button onClick={handleClick} variant="submitButton" ariaLabel="newOrder">
        + New Orders
      </Button>
      <NewOrderModal isOpen={openModal} onClose={handleClose} />
    </div>
  );
}

export default OrdersButton;
