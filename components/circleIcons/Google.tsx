import GoogleIcon from '@mui/icons-material/Google';

type Props = {
  className?: string;
};

function Google({ className }: Props) {
  return (
    <div className="flex justify-center items-center border-4 border-red-500 rounded-full h-10 w-10">
      <GoogleIcon className={className} />
    </div>
  );
}

export default Google;
