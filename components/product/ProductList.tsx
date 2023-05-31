//types
import { ProductDataType } from "@/types";

//components
import { Button } from "@mui/material";
import ProductItemList from "./ProductItemList";
import { useState } from "react";
import NewProductModal from "./NewProductModal";

type Props = {
  data: ProductDataType[];
};

function ProductList({ data }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const onOpen = () => {
    setIsClicked(true);
  };

  const onClose = () => {
    setIsClicked(false);
  };

  return (
    <div className="w-full h-full bg-white p-2">
      <div className="grid grid-cols-2 pt-8 pb-4 px-2 border-b-2">
        <div className="col-span-1 w-full">
          <h2 className="grid font-semibold text-lg h-full text-left items-center md:ml-10 sm:ml-2">
            PRODUCT LIST
          </h2>
        </div>
        <div className="sm:col-span 1 justify-items-center grid ">
          <div className=" justify-center  md:flex-col grid grid-cols-2 gap-5">
            <Button
              onClick={onOpen}
              variant="outlined"
              className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500 "
            >
              + New Product
            </Button>
            <NewProductModal isOpen={isClicked} onClose={onClose} data={data} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full my-10">
        <div className="cols-span-1 pl-10">
          <input
            type="text"
            placeholder="Search Product"
            className="border border-opacity-70 border-solid rounded  min-w-56 max-w-full ml-[10%] font-light h-8 pl-2"
          />
        </div>
      </div>
      <ProductItemList data={data} />
    </div>
  );
}

export default ProductList;
