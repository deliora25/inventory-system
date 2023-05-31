import Layout from "@/components/layout/Layout";
import ProductList from "@/components/product/ProductList";
import { ProductDataType } from "@/types";
import axios from "axios";

type Props = {
  data: ProductDataType[];
};

export default function ProductPage({ data }: Props) {
  return (
    <Layout>
      <ProductList data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get("http://localhost:4000/products");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}
