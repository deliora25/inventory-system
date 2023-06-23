import React from 'react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/solid';

type Props = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navbar({ showNav, setShowNav }: Props) {
  const handleClick = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? 'pl-56' : ''
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Navbar;
