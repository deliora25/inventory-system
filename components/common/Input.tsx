import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type Props = {
  label: string;
  register: UseFormRegister<FieldValues>;
  required?: string;
  className?: string;
};

const Input = ({ label, register, required, className }: Props) => (
  <>
    <label>{label}</label>
    <input
      {...register(label, {
        required,
      })}
      className={className}
    />
  </>
);

export default Input;
