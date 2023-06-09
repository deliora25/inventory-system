import Button from '@/components/common/Button';

import { OrderItemType } from '@/types';
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import { useRouter } from 'next/router';
import CustomerData from '@/components/modals/order/CustomerData';
import NewOrderItems from './NewOrderItems';

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
        <CustomerData register={register} />
        <NewOrderItems
          fields={fields}
          append={append}
          register={register}
          remove={remove}
        />
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
