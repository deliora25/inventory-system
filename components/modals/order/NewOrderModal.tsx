import Button from '@/components/common/Button';
import ShippingOrderForm from './ShippingOrderForm';
import Modal from '../../common/Modal';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function NewOrderModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      onOpen={isOpen}
      onClose={onClose}
      title="New Order"
      className="flex gap-5 w-full mb-10"
    >
      <ShippingOrderForm title="Ship From" />
      <ShippingOrderForm title="Ship To" />
      <div className="absolute bottom-0 right-[40%] mb-3 space-x-5 flex flex-grid sm:col-span-3 col-span-1">
        <Button
          variant="cancelButton"
          ariaLabel="cancel"
          type="button"
          onClick={() => onClose()}
        >
          Cancel
        </Button>
        <Button
          variant="submitButton"
          ariaLabel="submit"
          type="submit"
          onClick={() => onClose()}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
}
