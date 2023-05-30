import Layout from "@/components/layout/Layout";
import ProductItem from "@/components/product/ProductItem";
import { ProductListType } from "@/types";
import axios from "axios";
import type { GetStaticPropsContext } from "next";

type Props = {
  data: ProductListType[];
};

export default function ProductList({ data }: Props) {
  return (
    <Layout>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {data.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const response = await axios.get("http://localhost:4000/products");
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}
