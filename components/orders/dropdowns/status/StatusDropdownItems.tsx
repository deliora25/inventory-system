import { StatusDataType } from '@/types';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import StatusDropdownItem from './StatusDropdownItem';

type Props = {
  statusData: StatusDataType[];
};

function StatusDropdownItems({ statusData }: Props) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {statusData.map((item) => (
            <StatusDropdownItem item={item} key={item.id} />
          ))}
        </div>
      </Menu.Items>
    </Transition>
  );
}

export default StatusDropdownItems;
