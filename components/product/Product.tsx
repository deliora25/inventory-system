import { ProductType } from "@/types";
import { Button } from "@mui/material";
import ProductList from "./ProductList";
import { useState } from "react";

type Props = {
  data: ProductType[];
};

function Product({ data }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="w-full h-full bg-white p-">
      <div className="grid grid-cols-2 pt-8 pb-4 px-2 border-b-2">
        <div className="col-span-1 w-full">
          <h2 className="grid font-semibold text-lg h-full text-center items-center">
            Product List
          </h2>
        </div>
        <div className="col-span 1 sm:flex sm:flex-grid sm:gap-5">
          <Button
            variant="outlined"
            className="text-md w-full sm:w-fit col-span-1 sm: font-semibold justify-self-center  h-fit bg-white text-primary hover:text-white hover:bg-blue-500"
          >
            + New Product
          </Button>
          <Button
            onClick={handleClick}
            variant="outlined"
            className="text-md w-full col-span-1 font-semibold justify-self-center sm:w-fit h-fit bg-white text-primary hover:text-white hover:bg-blue-500"
          >
            {!isClicked ? "Edit" : "Save"}
          </Button>
        </div>
      </div>

      <ProductList data={data} isClicked={isClicked} />
    </div>
  );
}

export default Product;
