import Layout from '@/components/layout/Layout';
import Orders from '@/components/orders/Orders';
import { OrderItemType, SalesDataType, StatusDataType } from '@/types';
import axios from 'axios';
import React from 'react';

type Props = {
  data: OrderItemType[];
  salesData: SalesDataType[];
  statusData: StatusDataType[];
};

function OrdersPage({ data, salesData, statusData }: Props) {
  return (
    <Layout>
      <Orders data={data} salesData={salesData} statusData={statusData} />
    </Layout>
  );
}

export default OrdersPage;

export async function getStaticProps() {
  const response = await axios.get('http://localhost:4000/stockalert');
  const { data } = response;

  const salesList = await axios.get('http://localhost:4000/salesList');
  const salesData = salesList.data;

  const statusList = await axios.get('http://localhost:4000/statusList');
  const statusData = statusList.data;

  return {
    props: {
      data,
      salesData,
      statusData,
    },
  };
}
