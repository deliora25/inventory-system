import React from 'react';

type Props = {
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  name: string;
  type: string;
  placeholder?: string;
  variant?: string;
  className?: string;
  title: string;
};

function Input({
  value,
  onChange,
  name,
  type,
  placeholder,
  variant,
  className,
  title,
}: Props) {
  return (
    <div className="mb-2">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {title}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={`${name}`}
        type={`${type}`}
        placeholder={`${placeholder}`}
        className={`${className} block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 !${variant}`}
      />
    </div>
  );
}

export default Input;
