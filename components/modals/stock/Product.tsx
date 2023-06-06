import { ProductType } from '@/types';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

type Props = {
  item: ProductType;
};

function Product({ item }: Props) {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:4000/stock');
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div className="border-b border-gray-900/10 pb-2  col-span-4 ">
      <div className="mt-2 grid sm:flex gap-x-6 gap-y-8   w-full">
        <div className="sm:grid-cols-1 col-span-1 grid-cols-2  w-full sm:w-32  ">
          <div className="mt-0  ">
            <label
              htmlFor="product"
              className="block text-sm font-medium leading-6 text-gray-900 pb-2"
            >
              Product
            </label>
            <select
              id="product"
              name="product"
              autoComplete="product-name"
              placeholder="Select Product"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 pr-10"
            >
              {data.map((product) => (
                <ProductItem key={product.id} item={item} />
              ))}
            </select>
          </div>
        </div>
        <div className="sm:grid-cols-1 col-span-1 grid-cols-1 w-full sm:w-20 ">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Quantity
          </label>
          <div className="mt-2">
            <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-full sm:text-sm sm:leading-6 h-8" />
          </div>
        </div>
        <div className="sm:grid-cols-1 col-span-1 grid-cols-1sm:col-span-2 sm:w-20 w-full">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-8" />
          </div>
        </div>
        <div className="sm:grid-cols-1 col-span-1 grid-cols-1 sm:w-20 w-full">
          <label
            htmlFor="orderId"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            OrderId
          </label>
          <div className="mt-2">
            <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
