import { ProductDataType } from "@/types";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import NewProductModal from "./NewProductModal";
import axios from "axios";

type Props = {
  item: ProductDataType;
};

function ProductItem({ item }: Props) {
  const { name, category, quantity } = item;
  const [isClicked, setIsClicked] = useState(false);
  const [productList, setProductList] = useState<ProductDataType[]>([]);

  const apiEndPoint = "http://localhost:4000/products";

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(apiEndPoint);
      setProductList(data);
    };
  });

  const handleClick = () => {
    setIsClicked(true);
    return;
  };

  const handleUpdate = async (product: ProductDataType) => {
    product.name = "Updating";
    await axios.put(apiEndPoint + "/" + product.id);
    const productsClone = [...productList];
    const index = productsClone.indexOf(product);
    productsClone[index] = { ...product };
    setProductList(productsClone);
  };

  const handleDelete = async (product: ProductDataType) => {
    await axios.delete(apiEndPoint + "/" + product.id);
    setProductList(productList.filter((item) => item.id !== product.id));
  };

  return (
    <tr className="text-center font-light">
      <td className="py-2 px-2 border-y-2 text-md border-r-2">{name}</td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">{category}</td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">{quantity}</td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">
        <Button
          onClick={() => handleUpdate(item)}
          variant="outlined"
          className="text-md font-light justify-self-center w-fit h-fit bg-white text-primary hover:text-white hover:bg-blue-500 "
        >
          Update
        </Button>
      </td>
      <td className="py-2 px-2 border-y-2 text-md border-r-2">
        <Button
          onClick={() => handleDelete(item)}
          variant="outlined"
          className="text-md font-light justify-self-center w-fit h-fit bg-white text-primary hover:text-white hover:bg-blue-500 "
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default ProductItem;
