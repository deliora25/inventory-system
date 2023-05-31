import { Button } from "@mui/material";
import { MutableRefObject, useEffect, useState } from "react";
import axios from "axios";
import { ProductDataListType, ProductDataType } from "@/types";

type Props = {
  onClose: () => void;
  cancelButtonRef: MutableRefObject<null>;
  data: ProductDataType[];
};

function NewProduct({ onClose, cancelButtonRef, data }: Props) {
  const [productList, setProductList] = useState<ProductDataType[]>(data);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    quantity: "",
  });
  const apiEndPoint = "http://localhost:4000/products";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async () => {
    const productId = Math.random() * 2;
    const product = {
      name: `${newProduct.name}`,
      category: `${newProduct.category}`,
      quantity: `${newProduct.quantity}`,
      id: `${productId}`,
    };
    await axios.post(apiEndPoint, product);
  };

  return (
    <div className="">
      <div className="container ">
        <form
          className="border-2 p-5 rounded-md border-slate-300 flex-col sm:flex-grid gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Product Name.."
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="border-2 mr-3 rounded-md p-1"
          />
          <input
            type="text"
            placeholder="Category..."
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            className="border-2 mr-3 rounded-md p-1"
          />
          <div className="flex flex-col">
            Quantity
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
              className="border-2 mr-3 rounded-md p-1 w-fit"
            />
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 items-center justify-center">
            <Button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-green-800 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
            >
              Confirm
            </Button>
            <Button
              type="button"
              className="mt-3 inline-flex  w-full justify-center rounded-md bg-white px-3 py-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={onClose}
              ref={cancelButtonRef}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
