import { StatusDataType } from "@/types";
import React from "react";

type Props = {
  statusData: StatusDataType[];
};
function StatusDropdownItem({ statusData }: Props) {
  return (
    <div className="w-full bg-slate-50 rounded-md border-slate-300 border-2 p-1">
      {statusData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col w-full bg-transparent rounded-md px-2 col-span-1 cursor-pointer hover:bg-primary hover:text-white  font-md "
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default StatusDropdownItem;
