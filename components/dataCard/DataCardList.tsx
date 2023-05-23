import { useEffect, useState } from "react";
import DataCard from "./DataCard";
import { DataAmount } from "@/types";
import axios from "axios";

function DataCardList() {
  const [data, setData] = useState<DataAmount[]>([]);

  useEffect(() => {
    const getDataAmount = async () => {
      const response = await axios.get("http://localhost:4000/dataAmount");
      setData(response.data);
    };

    getDataAmount();
  }, []);

  console.log(data);
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
