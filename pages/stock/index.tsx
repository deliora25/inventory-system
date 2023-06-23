import Layout from '@/components/layout/Layout';
import IncomingInvoice from '@/components/stock/IncomingInvoice';
import { StatusDataType, StockItemType } from '@/types';
import axios from 'axios';
import React from 'react';

type Props = {
  statusData: StatusDataType[];
  stockData: StockItemType[];
};

function Stock({ statusData, stockData }: Props) {
  return (
    <Layout>
      <IncomingInvoice data={stockData} statusData={statusData} />
    </Layout>
  );
}

export default Stock;

export async function getStaticProps() {
  const statusList = await axios.get('http://localhost:4000/statusList');
  const statusData = statusList.data;

  const stockList = await axios.get('http://localhost:4000/incomingInvoice');
  const stockData = stockList.data;
  return {
    props: {
      statusData,
      stockData,
    },
  };
}
