import Modal from '@/components/common/Modal';
import NewStockForm from './NewStockForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function NewStockModal({ isOpen, onClose }: Props) {
  return (
    <Modal onOpen={isOpen} onClose={onClose} title="New Stock">
      <NewStockForm />
    </Modal>
  );
}
