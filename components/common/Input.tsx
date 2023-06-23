import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  className?: string;
  type: string;
  label: any;
  register: UseFormRegister<any>;
  title: string;
};

const Input = ({ className, type, register, title, label }: Props) => (
  <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1 mb-0 sm:my-2">
    <label>{title}</label>
    <input
      {...register(label)}
      className={`rounded-sm border-2 p-1 ${className}`}
      type={type}
    />
  </div>
);

export default Input;
