import React from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  defaultValues: any;
  children: React.ReactNode;
  onSubmit: (e: React.UIEvent<HTMLFormElement>) => Promise<void>;
};

function Form({ defaultValues, children, onSubmit }: Props) {
  const methods = useForm({
    defaultValues,
  });
  const { handleSubmit } = methods;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child: any) =>
        child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child
      )}
    </form>
  );
}

export default Form;
