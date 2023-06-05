import { FaFacebookF } from 'react-icons/fa';

type Props = {
  className?: string;
};

function Facebook({ className }: Props) {
  return (
    <div className="flex justify-center items-center border-4 border-blue-500 rounded-full h-10 w-10">
      <FaFacebookF className={className} />
    </div>
  );
}

export default Facebook;
