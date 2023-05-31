import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductDataType } from "@/types";

function UpdateProduct() {
  const { id } = useParams();
  const [productData, setProductData] = useState<ProductDataType>({
    name: "",
    category: "",
  });

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:4000/product/${id}`);
      setProductData(data);
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const productClone = { ...productData };
    productClone[e.target.name] = e.target.value;
  };

  console.log(productData);
  return (
    <div className="">
      <div className="container">
        <form className="">
          <input type="text" placeholder="Title..." name="title" value="test" />
          <input type="text" placeholder="Content..." name="content" />
          <Button> {id === "new" ? "Post" : "Update"}</Button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
