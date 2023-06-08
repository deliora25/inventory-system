import { OrderItemType } from '@/types';
import Modal from '../../common/Modal';
import NewOrderForm from './NewOrderForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  data: OrderItemType[];
};

export default function NewOrderModal({ data, isOpen, onClose }: Props) {
  return (
    <Modal
      onOpen={isOpen}
      onClose={onClose}
      title="New Order"
      className="flex gap-5 w-fit h-full"
    >
      {/* <ShippingOrderForm title="Ship From" /> */}
      {/* <ShippingOrderForm title="Ship To" onClose={onClose} /> */}
      <NewOrderForm data={data} onClose={onClose} />
    </Modal>
  );
}
