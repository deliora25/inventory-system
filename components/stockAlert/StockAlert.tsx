import React, { useEffect, useState } from 'react';

import { StockAlertType } from '@/types';
import axios from 'axios';
import TopSellingProducts from '../topSelling/TopSellingProducts';
import StockAlertItems from './StockAlertItems';

function StockAlert() {
  const [data, setData] = useState<StockAlertType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/stockalert');
        if (response && response.data) {
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mb-8  ">
      <div className=" col-span-3 md:col-span-2 bg-white shadow-sm rounded ">
        <h2 className="text-left font-semibold m-2 md:pl-1 md:ml-1  ">
          Stock Alert
        </h2>
        <hr />
        <StockAlertItems data={data} />
      </div>
      <div className="col-span-3 md:col-span-1 bg-white shadow-sm rounded">
        <TopSellingProducts data={data} />
      </div>
    </div>
  );
}

export default StockAlert;
