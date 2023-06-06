import React, { forwardRef } from 'react';

type Props = {
  onClick?: () => void;
  ref?: React.ForwardedRef<HTMLButtonElement>;
  type: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  variant?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => (
  <button
    {...props}
    ref={ref}
    className={`${props.className} ${props.variant}`}
  >
    {props.children}
  </button>
));

Button.displayName = 'CustomButton';

export default Button;
