import { ProductListType } from "@/types";

type Props = {
  item: ProductListType;
  isClicked: boolean;
};

function ProductItem({ item, isClicked }: Props) {
  const { name, category, quantity } = item;

  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md border-r-2">
        {!isClicked ? (
          `${name}`
        ) : (
          <input
            type="text"
            placeholder="Product"
            className="font-thin items-center text-center"
          />
        )}
      </td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">
        {!isClicked ? (
          `${category}`
        ) : (
          <input
            type="text"
            placeholder="Category"
            className="font-thin items-center text-center"
          />
        )}
      </td>
      <td className="py-2 px-2 border-y-2 text-md">{quantity}</td>
    </tr>
  );
}

export default ProductItem;
