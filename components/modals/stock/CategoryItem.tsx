import { ProductType } from '@/types';

type Props = {
  data: ProductType[];
};

function CategoryItem({ data }: Props) {
  return (
    <select
      id="category"
      name="category"
      autoComplete="category-name"
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
    >
      {data.map((item) => (
        <option key={item.id}>{item.category}</option>
      ))}
    </select>
  );
}

export default CategoryItem;
