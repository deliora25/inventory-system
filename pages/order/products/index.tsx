import Layout from "@/components/layout/Layout";
import { ProductListType } from "@/types";
import axios from "axios";
import type {
  GetStaticPropsContext,
  GetStaticPaths,
  GetStaticProps,
} from "next";

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
              <a key={item.id} href={item.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {item.price}
                </p>
              </a>
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
