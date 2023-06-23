import Button from '@/components/common/Button';

import { StockItemType } from '@/types';
import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';
import { useRouter } from 'next/router';
import NewStockItem from './NewStockItem';

type Props = {
  onClose: () => void;
};

function NewOrderForm({ onClose }: Props) {
  const { register, control, handleSubmit, watch } = useForm<StockItemType>({
    defaultValues: {
      date: new Date().toUTCString().slice(5, 16),
      salesChannel: Math.floor(Math.random() * 3) + 1,
      items: [
        {
          category: '',
          product: '',
          quantity: null,
        },
      ],
      instruction: 'Insert Instruction',
      status: Math.floor(Math.random() * 3) + 1,
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'items',
    control,
  });
  const router = useRouter();

  const items = watch('items');

  const onSubmit = async (value: StockItemType) => {
    try {
      await axios.post('http://localhost:4000/incomingInvoice', value);
    } catch (error) {
      console.log(error);
    }
    router.push('/stock');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <NewStockItem
          fields={fields}
          append={append}
          register={register}
          remove={remove}
          items={items}
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
