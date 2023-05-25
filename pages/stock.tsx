import Layout from "@/components/layout/Layout";
import InStock from "@/components/stock/InStock";
import { OrderItemType, StatusDataType } from "@/types";
import React from "react";

type Props = {
  data: OrderItemType[];
  statusData: StatusDataType[];
};

function Stock({ data, statusData }: Props) {
  return (
    <Layout>
      <InStock data={data} statusData={statusData} />
    </Layout>
  );
}

export default Stock;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/stockalert");
  const data = await response.json();

  const statusList = await fetch("http://localhost:4000/statusList");
  const statusData = await statusList.json();

  return {
    props: {
      data,
      statusData,
    },
  };
}
