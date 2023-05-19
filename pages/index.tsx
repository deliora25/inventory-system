import BarGraph from "@/components/barGraph/BarGraph";
import DataCard from "@/components/dataCard/DataCard";
import DataCardList from "@/components/dataCard/DataCardList";
import Layout from "@/components/layout/Layout";
import StockAlert from "@/components/stockAlert/StockAlert";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";

import { useEffect } from "react";

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

        <div className="flex  gap-5 mb-8">
          <div className="grid col-2 w-2/3 bg-white h-64 shadow-sm rounded">
            <BarGraph />
          </div>
          <div className="grid col-1 w-1/3 bg-white h-64 shadow-sm rounded"></div>
        </div>
        <StockAlert />
      </Layout>
    );

  return <div>Loading...</div>;
};

export default Home;
