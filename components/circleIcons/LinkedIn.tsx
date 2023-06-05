import { FaLinkedinIn } from 'react-icons/fa';

type Props = {
  className?: string;
};

function LinkedIn({ className }: Props) {
  return (
    <div className="flex justify-center items-center border-4 border-blue-900 rounded-full h-10 w-10">
      <FaLinkedinIn className={className} />
    </div>
  );
}

export default LinkedIn;
