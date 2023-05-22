import { useEffect, useState } from "react";
import DataCard from "./DataCard";
import { DataAmount } from "@/types";
import axios from "axios";

function DataCardList() {
  const [data, setData] = useState<DataAmount[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/dataAmount")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:flex-col gap-5 mb-8">
      {data.map((item: any) => {
        return (
          <div key={item.id} className="rounded bg-white h-32 shadow-sm">
            <DataCard item={item} />
          </div>
        );
      })}
    </div>
  );
}

export default DataCardList;
