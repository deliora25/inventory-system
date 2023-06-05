import { Button } from '@mui/material';
import { useState } from 'react';
import NewStockModal from '../modals/NewStockModal';

function StockButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="grid grid-cols-1 pr-[10%]">
      <Button
        onClick={handleClick}
        variant="outlined"
        className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500"
      >
        + New Stock
      </Button>
      <NewStockModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
}

export default StockButton;
