import { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductType } from '@/types';
import Product from './Product';
import CategoryItem from './CategoryItem';

export default function NewStockModal() {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('http://localhost:4000/stockitems');
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-2 ">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-3 ">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2">
                <CategoryItem data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {data.map((item) => (
        <div key={item.id}>
          <Product item={item} />
        </div>
      ))}
    </form>
  );
}
