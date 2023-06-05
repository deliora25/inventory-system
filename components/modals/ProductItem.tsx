import { ProductType } from '@/types';

type Props = {
  item: ProductType;
  key?: number;
};

function ProductItem({ item }: Props) {
  const { name } = item;

  return <option>{name}</option>;
}

export default ProductItem;
