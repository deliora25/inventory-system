import Button from '@/components/common/Button';

import { CustomerType, ItemsType, OrderItemType } from '@/types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import { useRouter } from 'next/router';

type Props = {
  data: OrderItemType[];
  onClose: () => void;
};

type OrderData = {
  date: string;
  alertAmount: string;
  customer: CustomerType;
  salesChannel: string;
  destination: string;
  items: ItemsType[];
  instruction: string;
  status: string;
};

function NewOrderForm({ data, onClose }: Props) {
  const form = useForm<OrderData>({
    defaultValues: {
      date: new Date().toUTCString().slice(5, 16),
      alertAmount: `Alert Amount ${Math.floor(Math.random() * 10)}`,
      customer: {
        firstName: '',
        lastName: '',
        contact: 0,
        email: '',
      },
      salesChannel: `Sales channel ${Math.floor(Math.random() * 10)}`,
      destination: `Sample Destination ${Math.floor(Math.random() * 10)}`,
      items: [
        {
          category: '',
          product: '',
          quantity: 0,
        },
      ],
      instruction: 'Insert Instruction',
      status: 'Pending',
    },
  });
  const { register, control, handleSubmit } = form;

  const router = useRouter();

  const onSubmit = async (value: OrderData) => {
    try {
      await axios.post('http://localhost:4000/orders', value);
    } catch (error) {
      console.log(error);
    }
    router.push('/orders');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              {...register('customer.firstName', {
                required: 'Full name required.',
              })}
              className="rounded-sm border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lasttName">Last Name</label>
            <input
              {...register('customer.lastName', {
                required: 'Full name required.',
              })}
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
              {...register('customer.contact', {
                required: 'Contact number is required.',
              })}
              className="rounded-sm border-2"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <select {...register('items.0.category')} className="h-fit">
              <option value="">Select...</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>
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
              {...register('items.0.quantity')}
              className="rounded-sm border-2"
              type="number"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <Button variant="submitButton" type="submit" onClick={onClose}>
            Next
          </Button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default NewOrderForm;
