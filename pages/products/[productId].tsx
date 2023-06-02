import Layout from "@/components/layout/Layout";

import { ProductDataType, ProductType } from "@/types";
import { Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  product: ProductDataType;
  productsList: ProductDataType[];
};

function ProductDetail({ product, productsList }: Props) {
  const [productList, setProductList] = useState(productsList);

  const router = useRouter();
  const productId = router.query.productId;

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);
      const products = productList.filter((product) => product.id !== id);
      setProductList(products);
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2>test for {productId}</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{product.productName}</td>
            <td>{product.categoryName}</td>
            <td>{product.quantity}</td>
          </tr>
        </tbody>
      </table>

      <Button>Update</Button>
      <Button onClick={() => handleDelete(product.id)}>Delete</Button>
    </Layout>
  );
}

export default ProductDetail;

export const getStaticPaths = async () => {
  const response = await axios.get("http://localhost:4000/products");
  const data = await response.data;
  //map data to an array of path obhects with params(id)
  const paths = data.map((product: ProductType) => {
    return {
      params: { productId: product.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.productId;
  const product = await axios.get("http://localhost:4000/products/" + id);
  const data = await product.data;

  const products = await axios.get("http://localhost:4000/products");
  const productsData = await products.data;
  return {
    props: {
      product: data,
      productsList: productsData,
    },
  };
};
