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
  <>
    <label>{title}</label>
    <input
      {...register(label)}
      className={`rounded-sm border-2 p-1 ${className}`}
      type={type}
    />
  </>
);

export default Input;
