import Layout from "@/components/layout/Layout";
import { ProductListType } from "@/types";
import axios from "axios";

type Props = {
  data: ProductListType[];
};

export default function ProductList({ data }: Props) {
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
