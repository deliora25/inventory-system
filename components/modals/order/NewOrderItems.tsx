import Select from '@/components/common/Select';
import { OrderItemType } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    const getCategoryOptions = async () => {
      try {
        const response = await axios.get('http://localhost:4000/stockItems');
        setCategoryOptions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryOptions();
  }, []);
  const category = categoryOptions.map((item) => item.name);
  const products = categoryOptions.map((item) => item.products);
  console.log(products);
  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <div className="grid grid-cols-2 gap-4 items-center my-2 ">
            <Select
              title="Category"
              register={register}
              name={`items.${index}.category`}
              options={category}
            />
          </div>
          <div className="grid grid-col grid-cols-2 items-center gap-4">
            <Select
              title="Product"
              register={register}
              name={`items.${index}.product`}
              options={products}
            />

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
