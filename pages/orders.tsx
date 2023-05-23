import Layout from "@/components/layout/Layout";
import Orders from "@/components/orders/Orders";
import { OrderItemType } from "@/types";
import { NextPage } from "next";
import React from "react";

type Props = {
  data: OrderItemType[];
};

function OrdersPage({ data }: Props) {
  console.log(data);

  return (
    <Layout>
      <Orders data={data} />
    </Layout>
  );
}

export default OrdersPage;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/stockalert");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
