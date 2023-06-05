import DataCardList from '@/components/dataCard/DataCardList';
import Layout from '@/components/layout/Layout';
import StockAlert from '@/components/stockAlert/StockAlert';
import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Router from 'next/router';

import React, { useEffect } from 'react';
import Graph from '@/components/graph/Graph';

const Home: NextPage = ({ graphData }: any): React.JSX.Element => {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/auth/signin');
  }, [status]);

  if (status === 'authenticated') {
    return (
      <Layout>
        <DataCardList data={graphData} />
        <Graph data={graphData} />
        <StockAlert />
      </Layout>
    );
  }

  return <div>Loading...</div>;
};

export default Home;

export async function getStaticProps() {
  const graphResponse = await fetch('http:localhost:4000/dataAmount');
  const graphData = await graphResponse.json();
  return {
    props: {
      graphData,
    },
  };
}
