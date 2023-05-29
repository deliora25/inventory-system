import { useState } from "react";
import Product from "./Product";
type Props = {
  title: string;
};

export default function NewStockModal({ title }: Props) {
  const [category, setCategory] = useState(false);

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
                <select
                  id="category"
                  name="category"
                  autoComplete="category-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Category 1</option>
                  <option>Category 2</option>
                  <option>Category 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Product />
      <Product />
      <Product />
    </form>
  );
}
