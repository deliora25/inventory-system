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
      className={`${className} ${variant}`}
    >
      {children}
    </button>
  );
}

export default Button;
