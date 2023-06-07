import { useState } from 'react';
import { OrderItemType } from '@/types';
import NewOrderModal from '../modals/order/NewOrderModal';
import Button from '../common/Button';

type Props = {
  data: OrderItemType[];
};

function OrdersButton({ data }: Props) {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="grid grid-cols-3 gap-2 justify-center pr-4  md:flex-col">
      <Button type="button" variant="submitButton" ariaLabel="exportExcel">
        Export to Excel
      </Button>
      <Button type="button" variant="submitButton" ariaLabel="importOrders">
        Import Orders
      </Button>
      <Button
        type="button"
        onClick={handleClick}
        variant="submitButton"
        ariaLabel="newOrder"
      >
        + New Orders
      </Button>
      <NewOrderModal isOpen={openModal} onClose={handleClose} data={data} />
    </div>
  );
}

export default OrdersButton;
