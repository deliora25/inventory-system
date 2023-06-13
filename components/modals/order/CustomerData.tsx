import Input from '@/components/common/Input';
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
        <Input
          type="text"
          register={register}
          title="First Name"
          label="customer.firstName"
        />
        <Input
          type="text"
          register={register}
          title="Last Name"
          label="customer.lastName"
        />
      </div>
      <div className="grid grid-col grid-cols-2 gap-4">
        <Input
          type="text"
          register={register}
          title="Email"
          label="customer.email"
        />
        <Input
          type="text"
          register={register}
          title="Contact Number"
          label="customer.contact"
        />
      </div>
    </div>
  );
}

export default CustomerData;
