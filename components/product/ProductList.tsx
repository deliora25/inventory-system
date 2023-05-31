//types
import { ProductListType } from "@/types";

//components
import { Button } from "@mui/material";
import ProductItemList from "./ProductItemList";
import { useState } from "react";

type Props = {
  data: ProductListType[];
};

function ProductList({ data }: Props) {
<<<<<<< HEAD
=======
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

>>>>>>> 7953b0441d759d21c85f6a73fcbf3005a57c955c
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
<<<<<<< HEAD
            {/* <Button
=======
            <Button
>>>>>>> 7953b0441d759d21c85f6a73fcbf3005a57c955c
              onClick={handleClick}
              variant="outlined"
              className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500 "
            >
<<<<<<< HEAD
              {!isClicked ? "Update" : "Save"}
            </Button> */}
=======
              {!isClicked ? "Edit" : "Save"}
            </Button>
>>>>>>> 7953b0441d759d21c85f6a73fcbf3005a57c955c
            <Button
              variant="outlined"
              className="text-md font-semibold justify-self-center w-full h-full bg-white text-primary hover:text-white hover:bg-blue-500 "
            >
              + New Product
            </Button>
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
<<<<<<< HEAD
      <ProductItemList data={data} />
=======
      <ProductItemList data={data} isClicked={isClicked} />
>>>>>>> 7953b0441d759d21c85f6a73fcbf3005a57c955c
    </div>
  );
}

export default ProductList;
