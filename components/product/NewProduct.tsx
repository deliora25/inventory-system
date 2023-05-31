import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductDataType } from "@/types";

function NewProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState<ProductDataType>({
    name: "",
    category: "",
    quantity: 0,
  });

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:4000/product/${id}`);
      setProductData(data);
    };
    fetchData();
  }, []);
  console.log(productData);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const productClone: ProductDataType = { ...productData };
    // productClone[e.target.name] = e.target.value;
    // setProductData(productClone);
    const { name, value } = e.target;
    setProductData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="">
      <div className="container ">
        <form className="border-2 p-5 rounded-md border-slate-300 flex-col sm:flex-grid gap-2">
          <input
            type="text"
            placeholder="Product Name.."
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="border-2 mr-3 rounded-md p-1"
          />
          <input
            type="text"
            placeholder="Category..."
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="border-2 mr-3 rounded-md p-1"
          />
          <div className="flex flex-col">
            Quantity
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              className="border-2 mr-3 rounded-md p-1 w-fit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
