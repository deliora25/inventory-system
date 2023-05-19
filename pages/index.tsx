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
          <div className="grid col-1 w-1/3 bg-white h-64 shadow-sm rounded">
            <div>
              <h2 className="px-4 pt-2 pb-0 mb-0 w-auto">
                Top Selling Products
              </h2>
            </div>
            <div>
              <PieChartOne className="items-center relative top-0 left-0" />
            </div>
          </div>
        </div>
        <StockAlert />
      </Layout>
    );

  return <div>Loading...</div>;
};

export default Home;
