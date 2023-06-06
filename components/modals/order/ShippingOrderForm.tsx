import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

type Props = {
  title: string;
};

function ShippingOrderForm({ title }: Props) {
  return (
    <div className="cols-span-1  rounded-md p-2 border-2 w-full flex flex-col gap-y-4">
      <h2 className="pl-4">{title}</h2>
      <div className="px-1 w-full my-1">
        <input
          type="text"
          placeholder="Customers (Autocomplete address below)"
          className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1 focus:placeholder-transparent"
        />
      </div>
      <div className="px-1 w-full grid grid-cols-2 my-1">
        <div className=" pr-4">
          <input
            type="text"
            placeholder="First Name*"
            className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1 cols-span-1  focus:placeholder-transparent"
          />
        </div>

        <div className="pl-4">
          <input
            type="text"
            placeholder="Last Name*"
            className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1 cols-span-1  focus:placeholder-transparent"
          />
        </div>
      </div>
      <div className="px-1 w-full grid grid-cols-2 my-1">
        <div className="pr-4">
          <input
            type="text"
            placeholder="Email"
            className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1 cols-span-1   focus:placeholder-transparent"
          />
        </div>

        <div className="pl-4">
          <input
            type="text"
            placeholder="Company"
            className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1 cols-span-1   focus:placeholder-transparent"
          />
        </div>
      </div>
      <div className="px-1 w-full my-1">
        <input
          type="text"
          placeholder="Street 1 (Google autocomplete api)"
          className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1  focus:placeholder-transparent"
        />
      </div>
      <div className="px-1 w-full my-1">
        <input
          type="text"
          placeholder="Street 2"
          className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1  focus:placeholder-transparent"
        />
      </div>
      <div className="pl-1 w-full grid grid-cols-2  my-1">
        <div className="pr-4">
          <input
            type="text"
            placeholder="City"
            className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1 cols-span-1   focus:placeholder-transparent"
          />
        </div>

        <div className="ml-4 mr-1 ">
          <Menu>
            <Menu.Button className="inline-flex w-full align-middle justify-between gap-x-1.5 rounded-md bg-white px-1 py-1 text-sm font-normal text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              State
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </Menu>
        </div>
      </div>
      <div className="pl-1 w-full grid grid-cols-2 my-1">
        <div className="pr-4">
          <input
            type="text"
            placeholder="State"
            className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1 cols-span-1  focus:placeholder-transparent "
          />
        </div>
        <div className="mr-1 ml-4 ">
          <Menu>
            <Menu.Button className="inline-flex w-full align-middle justify-between gap-x-1.5 rounded-md bg-white px-1 py-1 text-sm font-normal text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Country
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </Menu>
        </div>
      </div>
      <div className="pl-1 w-full my-1">
        <textarea
          placeholder="Paste address information, automatically split address"
          className="rounded-sm border-2 text-sm pl-1 pt-1 w-full my-1 h-28  focus:placeholder-transparent"
        />
      </div>
    </div>
  );
}

export default ShippingOrderForm;
