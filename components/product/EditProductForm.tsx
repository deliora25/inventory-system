import { ProductDataType } from '@/types';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import Button from '../common/Button';

type Props = {
  onClose: () => void;
  product: ProductDataType;
};

function EditProductForm({ onClose, product }: Props) {
  const [editProduct, setEditProduct] = useState<ProductDataType>({
    productName: product.productName,
    categoryName: product.categoryName,
    quantity: product.quantity,
    id: product.id,
  });
  const cancelButtonRef = useRef(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (id: number | string) => {
    const updateProduct = {
      productName: editProduct.productName,
      categoryName: editProduct.categoryName,
      id,
      quantity: editProduct.quantity,
    };

    try {
      await axios.put(`http://localhost:4000/products/${id}`, updateProduct);

      setEditProduct({
        ...editProduct,
        productName: '',
        categoryName: '',
        quantity: updateProduct.quantity,
      });
      router.push('/products');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-4 ">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2">
                <input
                  value={editProduct.productName}
                  onChange={handleChange}
                  name="productName"
                  type="text"
                  placeholder="Product Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div>
                <label>Category</label>
                <input
                  value={editProduct.categoryName}
                  onChange={handleChange}
                  name="categoryName"
                  type="text"
                  placeholder="Category Name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button
          onClick={onClose}
          ref={cancelButtonRef}
          type="button"
          className="bg-slate-100 text-black hover:bg-slate-200"
        >
          Cancel
        </Button>

        <Button onClick={() => handleUpdate(product.id)} type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}

export default EditProductForm;
