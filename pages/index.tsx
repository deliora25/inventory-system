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
  console.log(session);

  if (status === "authenticated") return <div>{status}</div>;

  return <div>Loading...</div>;
};

export default Home;
