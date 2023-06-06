import Layout from '@/components/layout/Layout';
import EditProductModal from '@/components/modals/product/EditProductModal';

import { ProductDataType, ProductType } from '@/types';
import { Button } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Props = {
  product: ProductDataType;
  productId: number | string;
};

function ProductDetail({ product, productId }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:4000/products/${id}`);

      router.push('/products');
    } catch (error) {
      console.error(error);
    }
  };

  const onClose = () => {
    setIsClicked(false);
  };

  const onOpen = () => {
    setIsClicked(true);
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

      <Button onClick={onOpen}>Update</Button>
      {productId && (
        <EditProductModal
          onOpen={isClicked}
          onClose={onClose}
          product={product}
        />
      )}

      <Button onClick={() => handleDelete(product.id)}>Delete</Button>
    </Layout>
  );
}

export default ProductDetail;

export const getStaticPaths = async () => {
  const response = await axios.get('http://localhost:4000/products');
  const { data } = response;

  const paths = data.map((product: ProductType) => ({
    params: {
      productId: product.id.toString(),
    },
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.productId;
  const product = await axios.get(`http://localhost:4000/products/${id}`);
  const { data } = product;

  return {
    props: {
      product: data,
      productId: id,
    },
  };
};
