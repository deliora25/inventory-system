import Layout from "@/components/layout/Layout";
import Product from "@/components/product/Product";
import { ProductType } from "@/types";
import axios from "axios";
import React from "react";

type Props = {
  data: ProductType[];
};

function Stock({ data }: Props) {
  return (
    <Layout>
      <Product data={data} />
    </Layout>
  );
}

export default Stock;

export async function getStaticProps() {
  const response = await axios.get("http://localhost:4000/stock");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}
