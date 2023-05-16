import React, { useEffect, useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

type Props = {
  title: string;
  icon?: string;
  url: string;
};

function DataCard({ title, icon, url }: Props) {
  const [value, setValue] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:4000/${url}`)
      .then((res) => res.json())
      .then((data) => setValue(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="flex flex-col sm:max-w-sm md:max-w-screen-xl ">
      <div className="text-left text-lg font-normal m-2">
        <h2>{title}</h2>
      </div>
      <hr />
      <div className="grid font-semibold text-2xl ">
        <div className="flex flex-grid ">
          <AttachMoneyIcon className="ml-2 mt-1 " />
          <p className="justify-self-center">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default DataCard;
