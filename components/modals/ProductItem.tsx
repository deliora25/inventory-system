import { ProductType } from "@/types";

type Props = {
  item: ProductType;
  key?: number;
};

function ProductItem({ item }: Props) {
  const { product } = item;
  return <div>{product}</div>;
}

export default ProductItem;
