import { OrderItemType } from '@/types';
import React from 'react';
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';

type Props = {
  fields: FieldArrayWithId<OrderItemType, 'items', 'id'>[];
  append: UseFieldArrayAppend<OrderItemType, 'items'>;
  register: UseFormRegister<OrderItemType>;
  remove: UseFieldArrayRemove;
};

function NewOrderItems({ fields, append, register, remove }: Props) {
  return (
    <div>
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
    </div>
  );
}

export default NewOrderItems;
