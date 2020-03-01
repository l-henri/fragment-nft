import React from "react";
import Layout from "../Layout";
import Art from "../Art";

export const Home = ({ web3, fragmentClaimer }) => {
  return (
    <Layout>
      <Art web3={web3} fragmentClaimer={fragmentClaimer} />
    </Layout>
  );
};
