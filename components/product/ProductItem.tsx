import { ProductListType } from "@/types";
<<<<<<< HEAD
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
=======

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
>>>>>>> 7953b0441d759d21c85f6a73fcbf3005a57c955c
    </tr>
  );
}

export default ProductItem;
