import { ProductListType } from "@/types";
import { useState } from "react";
import { Button } from "@mui/material";
import NewProductModal from "./NewProductModal";

type Props = {
  item: ProductListType;
};

function ProductItem({ item }: Props) {
  const { name, category, quantity } = item;
  const [isClicked, setIsClicked] = useState(false);

  const onClose = () => {
    setIsClicked(false);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md border-r-2">{name}</td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">{category}</td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">{quantity}</td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">
        <Button
          onClick={handleClick}
          variant="outlined"
          className="text-md font-light justify-self-center w-fit h-fit bg-white text-primary hover:text-white hover:bg-blue-500 "
        >
          Update
          <NewProductModal isOpen={isClicked} onClose={onClose} />
        </Button>
      </td>
    </tr>
  );
}

export default ProductItem;
