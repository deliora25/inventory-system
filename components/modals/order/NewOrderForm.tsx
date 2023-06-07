import Button from '@/components/common/Button';

import { CustomerType, ItemsType, OrderItemType } from '@/types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import { useRouter } from 'next/router';

type Props = {
  data: OrderItemType[];
};

type OrderData = {
  date: string;
  customer: CustomerType;
  items: ItemsType[];
};

function NewOrderForm({ data }: Props) {
  const form = useForm<OrderData>();
  const { register, control, handleSubmit } = form;

  const router = useRouter();

  const onSubmit = async (value: OrderData) => {
    await axios.post('http://localhost:4000/orders', value);
    router.push('/orders');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              {...register('customer.firstName')}
              className="rounded-sm border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lasttName">Last Name</label>
            <input
              {...register('customer.lastName')}
              className="rounded-sm border-2"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              {...register('customer.email')}
              className="rounded-sm border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="contact">Contact</label>
            <input
              {...register('customer.contact')}
              className="rounded-sm border-2"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <input
              {...register('items.0.category')}
              className="rounded-sm border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="productName">Product Name</label>
            <input
              {...register('items.0.product')}
              className="rounded-sm border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              {...register(items[0].quantity)}
              className="rounded-sm border-2"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <Button variant="submitButton" type="submit">
            Next
          </Button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default NewOrderForm;
