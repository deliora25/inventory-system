import Layout from "@/components/layout/Layout";
import InStock from "@/components/stock/InStock";
import { OrderItemType, StatusDataType } from "@/types";
import axios from "axios";
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
  const response = await axios.get("http://localhost:4000/stockalert");
  const data = response.data;

  const statusList = await axios.get("http://localhost:4000/statusList");
  const statusData = statusList.data;

  return {
    props: {
      data,
      statusData,
    },
  };
}
