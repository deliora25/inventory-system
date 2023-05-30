import { SalesDataType } from "@/types";
import { Menu } from "@headlessui/react";
import React from "react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  item: SalesDataType;
};

function SalesDropdownItem({ item }: Props) {
  const { name } = item;
  return (
    <Menu.Item key={item.id}>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          {name}
        </a>
      )}
    </Menu.Item>
  );
}

export default SalesDropdownItem;
