import { OrderItemType } from '@/types';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<OrderItemType>;
};

function CustomerData({ register }: Props) {
  return (
    <div>
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
    </div>
  );
}

export default CustomerData;
