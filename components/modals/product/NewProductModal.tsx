import NewProductForm from './NewProductForm';
import Modal from '../../common/Modal';

type Props = {
  onOpen: boolean;
  onClose: () => void;
};

export default function NewProductModal({ onOpen, onClose }: Props) {
  return (
    <Modal onOpen={onOpen} onClose={onClose} title="New Product">
      <NewProductForm onClose={onClose} />
    </Modal>
  );
}
