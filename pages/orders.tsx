import Layout from "@/components/layout/Layout";
import Orders from "@/components/orders/Orders";
import { OrderItemType, SalesDataType, StatusDataType } from "@/types";
import React from "react";

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
  const response = await fetch("http://localhost:4000/stockalert");
  const data = await response.json();

  const salesList = await fetch("http://localhost:4000/salesList");
  const salesData = await salesList.json();

  const statusList = await fetch("http://localhost:4000/statusList");
  const statusData = await statusList.json();

  return {
    props: {
      data,
      salesData,
      statusData,
    },
  };
}
