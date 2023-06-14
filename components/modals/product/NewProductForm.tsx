import { ProductDataType } from '@/types';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Button from '../../common/Button';
import Input from '../../common/Input';

type Props = {
  onClose: () => void;
};

function NewProductForm({ onClose }: Props) {
  const cancelButtonRef = useRef(null);
  const router = useRouter();

  const { register, handleSubmit } = useForm<ProductDataType>({
    defaultValues: {
      productName: '',
      categoryName: '',
      quantity: null,
      id: null,
    },
  });

  const onSubmit = async (value: ProductDataType) => {
    try {
      await axios.post('http://localhost:4000/products', value);
    } catch (error) {
      console.log(error);
    }
    router.push('/products');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="bg-red-200">
      <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
        <div className="sm:col-span-4 ">
          <Input
            type="text"
            register={register}
            title="Category Name"
            label="categoryName"
          />
          <Input
            type="text"
            register={register}
            title="Product Name"
            label="productName"
          />

          <Input
            type="text"
            register={register}
            title="Quantity"
            label="quantity"
          />
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
