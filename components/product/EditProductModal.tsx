import { ProductDataType } from '@/types';
import EditProductForm from './EditProductForm';
import Modal from '../common/Modal';

type Props = {
  onOpen: boolean;
  onClose: () => void;
  product: ProductDataType;
};

export default function EditProductModal({ onOpen, onClose, product }: Props) {
  return (
    <Modal onOpen={onOpen} onClose={onClose}>
      <EditProductForm onClose={onClose} product={product} />
    </Modal>
  );
}
