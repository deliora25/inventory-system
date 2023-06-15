import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<any>;
  name: string;
  options: any;
  className?: string;
  title: string;
  placeholder: string;
};

const Select = ({
  title,
  register,
  name,
  options,
  className,
  placeholder,
}: Props) => (
  <div className="flex flex-col gap-y-1 col-span-2 sm:col-span-1 text-center sm:text-left">
    <label>{title}</label>
    <select {...register(name)} className={`h-9 p-1 ${className}`}>
      <option value="" disabled selected hidden>
        {placeholder}
      </option>
      {options.map((value: any, index: any) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
