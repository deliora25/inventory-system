import { StockAlert, StockAlertList } from "@/types";
import React, { useEffect, useState } from "react";

type Props = {
  title: string;
  item: string;
  id?: number;
};

function StockAlertItem({ item, id, title }: Props) {
  const [data, setData] = useState<StockAlert[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/stockalert")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);
  console.log(item);
  return (
    <div className="col-span-1">
      <h2 className="font-semibold text-base">{title}</h2>
      {data.map((x: StockAlert, index: any) => {
        const name = item;
        console.log(x);
        return (
          <div className="font-light text-slate-400 text-sm my-1" key={index}>
            {x.orderId}
          </div>
        );
      })}
    </div>
  );
}

export default StockAlertItem;
