import { ProductDataType } from '@/types';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../../common/Button';
import Input from '../../common/Input';

type Props = {
  onClose: () => void;
};

function NewProductForm({ onClose }: Props) {
  const [productList, setProductList] = useState<ProductDataType[]>([]);
  const [newProduct, setNewProduct] = useState<ProductDataType>({
    productName: '',
    categoryName: '',
    quantity: 0,
    id: 0,
  });

  const cancelButtonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        const data = await response.data;
        setProductList(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.UIEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = productList.length
      ? productList[productList.length - 1].id + 1
      : 1;
    const newProductItem = {
      productName: newProduct.productName,
      categoryName: newProduct.categoryName,
      quantity: newProduct.quantity,
      id,
    };
    try {
      const response = await axios.post(
        'http://localhost:4000/products',
        newProductItem
      );
      const allProducts = [...productList, response.data];
      setProductList(allProducts);
      setNewProduct({
        productName: '',
        categoryName: '',
        quantity: 0,
        id: 0,
      });
      router.push('/products');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4 ">
              <Input
                title="Product Name"
                value={newProduct.productName}
                onChange={handleChange}
                name="productName"
                type="text"
                placeholder="Product Name"
              />
              <Input
                value={newProduct.categoryName}
                onChange={handleChange}
                name="categoryName"
                type="text"
                placeholder="Category Name"
                title="Category"
              />
              <Input
                value={newProduct.quantity}
                onChange={handleChange}
                name="quantity"
                type="number"
                placeholder="Quantity"
                title="Quantity"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button
          onClick={onClose}
          type="button"
          ref={cancelButtonRef}
          variant="cancelButton"
        >
          Cancel
        </Button>
        <Button onClick={onClose} type="submit" variant="submitButton">
          Save
        </Button>
      </div>
    </form>
  );
}

export default NewProductForm;
