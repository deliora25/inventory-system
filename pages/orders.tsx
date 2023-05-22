import Layout from "@/components/layout/Layout";
import Orders from "@/components/orders/Orders";
import { OrderItem } from "@/types";
import React from "react";

type Props = {
  data: OrderItem;
};

function orders({ data }: Props) {
  console.log(data);

  return (
    <Layout>
      <Orders />
    </Layout>
  );
}

export default orders;

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
