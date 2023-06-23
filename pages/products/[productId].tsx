import Layout from '@/components/layout/Layout';
import EditProductModal from '@/components/modals/product/EditProductModal';

import { ProductDataType, ProductType } from '@/types';
import Button from '@/components/common/Button';
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
      <div className="w-fit  bg-transparent sm:items-center items-center  overflow-x-auto text-center">
        <h2>Product detail of Order ID {productId}</h2>
        <table className=" border rounded-xl w-full table-auto sm:table:fixed text-center">
          <thead>
            <tr>
              <th className="font-semibold px-6 py-1 border-r-2">
                Product Name
              </th>
              <th className="font-semibold px-6 py-1 border-r-2">Category</th>
              <th className="font-semibold px-6 py-1 border-r-2">Quantity</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            <tr>
              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                {product.productName}
              </td>
              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                {product.categoryName}
              </td>
              <td className="py-2 px-2  border-y-2 border-r-2 text-md">
                {product.quantity}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center space-x-4 my-3">
          <Button
            type="button"
            variant="cancelButton"
            className="border-2 border-slate-200 hover:border-2 hover:bg-slate-400 hover:text-slate-100 hover:border-slate-700"
            onClick={() => router.back()}
          >
            Back
          </Button>
          <Button variant="submitButton" type="button" onClick={onOpen}>
            Update
          </Button>
          {productId && (
            <EditProductModal
              onOpen={isClicked}
              onClose={onClose}
              product={product}
            />
          )}
          <Button
            type="button"
            variant="cancelButton"
            className="border-2 border-slate-200 hover:border-2 hover:bg-red-600 hover:text-slate-100 hover:border-slate-700"
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </Button>
        </div>
      </div>
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
