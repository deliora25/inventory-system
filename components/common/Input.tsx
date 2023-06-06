type Props = {
  value: string;
  onChange: () => void;
  name: string;
  type: string;
  placeholder: string;
  variant: string;
  className?: string;
};

function Input({
  value,
  onChange,
  name,
  type,
  placeholder,
  variant,
  className,
}: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      name={`${name}`}
      type={`${type}`}
      placeholder={`${placeholder}`}
      className={`${className} block w-full rounded-md  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 !${variant}`}
    />
  );
}

export default Input;
