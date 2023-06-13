import Input from '@/components/common/Input';
import Select from '@/components/common/Select';
import { CategoryType, ItemsType, OrderItemType } from '@/types';
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
  items: ItemsType[];
};

function NewOrderItems({ items, fields, append, register, remove }: Props) {
  const [categoryOptions, setCategoryOptions] = useState<CategoryType[]>([]);

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

  const categoryNameOptions = categoryOptions.map((item) => item.name);

  return (
    <div>
      {fields.map((field, index) => {
        const { category } = items[index];
        const selectedCategory = categoryOptions.find(
          (x) => x.name === category
        );
        let productOptions: string | string[] = [];
        if (selectedCategory && selectedCategory.products) {
          productOptions = selectedCategory.products;
        }

        return (
          <div key={field.id}>
            <div className="grid grid-cols-2 gap-4 items-center my-2 ">
              <Select
                title="Category"
                register={register}
                name={`items.${index}.category`}
                options={categoryNameOptions}
              />
            </div>
            <div className="grid grid-col grid-cols-2 items-center gap-4">
              <Select
                title="Product"
                register={register}
                name={`items.${index}.product`}
                options={productOptions}
              />

              <div className=" grid grid-cols col-span-2 sm:col-span-1 ">
                <div className="sm:flex space-x-2 items-center ">
                  <Input
                    type="number"
                    register={register}
                    title="Quantity"
                    label={`items.${index}.quantity`}
                  />
                  <div className="p-2 mt-6 ">
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
        );
      })}
    </div>
  );
}

export default NewOrderItems;
