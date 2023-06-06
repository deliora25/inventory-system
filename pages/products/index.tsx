import Layout from '@/components/layout/Layout';
import Products from '@/components/products/Products';
import { ProductDataType } from '@/types';
import axios from 'axios';

type Props = {
  products: ProductDataType[];
};

export default function ProductPage({ products }: Props) {
  return (
    <Layout>
      <Products products={products} />
    </Layout>
  );
}

export async function getStaticProps() {
  const apiEndPoint = 'http://localhost:4000/products';
  const response = await axios.get(apiEndPoint);
  const { data } = response;

  return {
    props: {
      products: data,
    },
  };
}
