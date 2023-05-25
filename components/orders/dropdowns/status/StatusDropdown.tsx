import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { StatusDataType } from "@/types";
import StatusDropdownItem from "./StatusDropdownItem";

type Props = {
  statusData: StatusDataType[];
};

function StatusDropdown({ statusData }: Props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="h-fit w-fit border rounded-md items-center flex flex-col">
      <Button
        className="h-7 w-full px-9 m-1 font-semibold text-lg text-black"
        onClick={() => handleClick()}
      >
        <div className="flex">
          <p className="text-sm">Status</p>
          {isClicked ? (
            <KeyboardArrowUpIcon className="h-5" />
          ) : (
            <KeyboardArrowDownIcon className="h-5" />
          )}
        </div>
      </Button>
      {isClicked && <StatusDropdownItem statusData={statusData} />}
    </div>
  );
}

export default StatusDropdown;
