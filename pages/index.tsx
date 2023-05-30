import DataCardList from "@/components/dataCard/DataCardList";
import Layout from "@/components/layout/Layout";
import StockAlert from "@/components/stockAlert/StockAlert";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";

import { useEffect } from "react";
import Graph from "@/components/graph/Graph";

const Home: NextPage = ({ graphData }: any): JSX.Element => {
  const { status, data } = useSession();
  const session = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);
  // console.log(session);

  if (status === "authenticated")
    return (
      <Layout>
        <DataCardList data={graphData} />
        <Graph data={graphData} />
        <StockAlert />
      </Layout>
    );

  return <div>Loading...</div>;
};

export default Home;

export async function getStaticProps() {
  const graphResponse = await fetch("http:localhost:4000/dataAmount");
  const graphData = await graphResponse.json();
  console.log(graphData);
  return {
    props: {
      graphData,
    },
  };
}
