import { ProductType } from "@/types";
import { useState } from "react";

type Props = {
  item: ProductType;
  isClicked: boolean;
};

function ProductItem({ item, isClicked }: Props) {
  const { name, category, quantity } = item;
  const [product, setProduct] = useState(name);
  const [categoryName, setCategoryName] = useState(category);

  const handleChangeProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct(value);
  };

  const handleChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCategoryName(value);
  };

  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md border-r-2">
        {!isClicked ? (
          `${product}`
        ) : (
          <input
            type="text"
            placeholder="Product"
            className="font-thin items-center text-center"
            onChange={handleChangeProduct}
            value={product}
          />
        )}
      </td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">
        {!isClicked ? (
          `${categoryName}`
        ) : (
          <input
            type="text"
            placeholder="Category"
            className="font-thin items-center text-center"
            onChange={handleChangeCategory}
            value={categoryName}
          />
        )}
      </td>
      <td className="py-2 px-2 border-y-2 text-md">{quantity}</td>
    </tr>
  );
}

export default ProductItem;
