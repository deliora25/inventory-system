import Button from '@/components/common/Button';

import { OrderItemType } from '@/types';
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import { useRouter } from 'next/router';

type Props = {
  data: OrderItemType[];
  onClose: () => void;
};

function NewOrderForm({ onClose }: Props) {
  const form = useForm<OrderItemType>({
    defaultValues: {
      date: new Date().toUTCString().slice(5, 16),
      alertAmount: `Alert Amount ${Math.floor(Math.random() * 10)}`,
      customer: {
        firstName: '',
        lastName: '',
        contact: null,
        email: '',
      },
      salesChannel: `Sales channel ${Math.floor(Math.random() * 10) + 1}`,
      destination: `Sample Destination ${Math.floor(Math.random() * 10) + 1}`,
      items: [
        {
          category: '',
          product: '',
          quantity: null,
        },
      ],
      instruction: 'Insert Instruction',
      status: 'Pending',
    },
  });
  const { register, control, handleSubmit } = form;
  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control,
  });
  const router = useRouter();

  const onSubmit = async (value: OrderItemType) => {
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
        <div className="grid grid-col grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1 mb-0 sm:my-2">
            <label htmlFor="firstName">First Name</label>
            <input
              {...register('customer.firstName', {
                required: 'Full name required.',
              })}
              className="rounded-sm border-2 p-1"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1 mb-0 sm:my-2">
            <label htmlFor="lasttName">Last Name</label>
            <input
              {...register('customer.lastName', {
                required: 'Full name required.',
              })}
              className="rounded-sm border-2 p-1"
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-col grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1 mb-0 sm:my-2">
            <label htmlFor="email">Email</label>
            <input
              {...register('customer.email')}
              className="rounded-sm border-2 p-1"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1 mb-0 sm:my-2">
            <label htmlFor="contact">Contact</label>
            <input
              {...register('customer.contact', {
                required: 'Contact number is required.',
              })}
              className="rounded-sm border-2 p-1"
              type="text"
              placeholder="#"
            />
          </div>
        </div>
        {fields.map((field, index) => (
          <div key={field.id}>
            <div className="grid grid-cols-2 gap-4 items-center my-2 ">
              <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1 text-center sm:text-left">
                <label htmlFor="category">Category</label>

                <select
                  {...register(`items.${index}.category` as const)}
                  className="p-1 text-md font-extralight"
                >
                  <option value="">Select Category...</option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </select>
              </div>
            </div>
            <div className="grid grid-col grid-cols-2 items-center gap-4">
              <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1">
                <label htmlFor="productName">Product</label>
                <select
                  {...register(`items.${index}.category` as const)}
                  className="p-1 text-md font-extralight"
                >
                  <option value="">Select Product...</option>
                  <option value="Category 1">Product 1</option>
                  <option value="Category 2">Product 2</option>
                  <option value="Category 3">Product 3</option>
                </select>
              </div>
              <div>
                <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1">
                  <label htmlFor="quantity">Quantity</label>
                  <div className="flex space-x-2 items-center">
                    <input
                      {...register(`items.${index}.quantity` as const)}
                      className="rounded-sm border-2 p-1"
                      type="number"
                    />
                    {index >= 0 && (
                      <div className="space-x-1">
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="border-2 rounded px-2 hover:border-slate-400 hover:bg-slate-200 hover:border-2"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            append({
                              category: '',
                              product: '',
                              quantity: null,
                            })
                          }
                          className="border-2 rounded px-2 hover:border-slate-400 hover:bg-slate-200 hover:border-2"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center mt-4 space-x-3 ">
          <Button variant="cancelButton" type="button" onClick={onClose}>
            Cancel
          </Button>

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
