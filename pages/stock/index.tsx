import Layout from "@/components/layout/Layout";
import InStock from "@/components/stock/IncomingInvoice";
import { StatusDataType, StockType } from "@/types";
import axios from "axios";
import React from "react";

type Props = {
  data: StockType[];
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
  const response = await axios.get("http://localhost:4000/stock");
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
