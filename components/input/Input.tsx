import React from "react";

type Props = {
  title: string;
  value: string;
  name: string;
  className?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ title, value, name, className, type, onChange }: Props) {
  return (
    <div>
      <label className="inline-block w-full">
        <p>{title}</p>
        <input
          type={type}
          className={className}
          value={value}
          name={name}
          onChange={(e) => onChange}
        />
      </label>
    </div>
  );
}

export default Input;
