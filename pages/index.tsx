import BarGraph from "@/components/graph/BarGraph";
import PieChartOne from "@/components/graph/PieChartOne";
import DataCard from "@/components/dataCard/DataCard";
import DataCardList from "@/components/dataCard/DataCardList";
import Layout from "@/components/layout/Layout";
import StockAlert from "@/components/stockAlert/StockAlert";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";

import { useEffect } from "react";
import Graph from "@/components/graph/Graph";

const Home: NextPage = (): JSX.Element => {
  const { status, data } = useSession();
  const session = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);
  // console.log(session);

  if (status === "authenticated")
    return (
      <Layout>
        <DataCardList />
        <Graph />
        <StockAlert />
      </Layout>
    );

  return <div>Loading...</div>;
};

export default Home;
