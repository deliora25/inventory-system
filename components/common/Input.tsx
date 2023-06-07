import React from 'react';
import { ChangeHandler } from 'react-hook-form/dist/types';

type Props = {
  name: string;
  variant?: string;
  className?: string;
  title: string;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
};

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  <div>
    <label htmlFor={props.name}>{props.title}</label>
    <input
      {...props}
      ref={ref}
      className={`${props.className} ${props.variant}`}
    />
    ;
  </div>;
});

Input.displayName = 'CustomInput';

export default Input;
