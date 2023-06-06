import React from 'react';

type Props = {
  onClick?: () => void;
  ref?: React.LegacyRef<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  variant?: string;
  children: React.ReactNode;
};

function Button({ onClick, ref, type, className, variant, children }: Props) {
  return (
    <button
      onClick={onClick}
      ref={ref}
      type={type}
      className={`rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
      ${className} ${variant}`}
    >
      {children}
    </button>
  );
}

export default Button;
