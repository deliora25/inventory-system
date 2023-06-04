import Layout from "@/components/layout/Layout";
import NewProductModal from "@/components/product/NewProductModal";
import { ProductDataType } from "@/types";
import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

type Props = {
  products: ProductDataType[];
};

export default function ProductPage({ products }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    setIsClicked(true);
  };

  const onClose = () => {
    setIsClicked(false);
  };
  return (
    <Layout>
      <div>
        <div className="flex">
          <h2>PRODUCT LIST</h2>
          <Button onClick={handleOpen}>+ New Product</Button>
          <NewProductModal onOpen={isClicked} onClose={onClose} />
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <Link href={"/products/" + item.id}>
                      {item.productName}
                    </Link>
                  </td>

                  <td>{item.categoryName}</td>
                  <td>{item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const apiEndPoint = "http://localhost:4000/products";
  const response = await axios.get(apiEndPoint);
  const data = response.data;

  return {
    props: {
      products: data,
    },
  };
}
