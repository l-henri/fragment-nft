import React, { useState, useEffect } from "react";
import getWeb3 from "#root/getWeb3";
import FragmentClaimerContract from "#contractAbis/FragmentClaimer";

import Header from "../Header";
import Layout from "../Layout";
import Art from "../Art";

export const App = () => {
  const [data, setData] = useState({
    web3: null,
    fragmentClaimer: null,
    accounts: []
  });

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const accounts = await web3.eth.getAccounts();
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = FragmentClaimerContract.networks[networkId];
        const fragmentClaimer = new web3.eth.Contract(
          FragmentClaimerContract.abi,
          deployedNetwork && deployedNetwork.address
        );
        setData({ web3, fragmentClaimer, accounts });
      } catch (e) {
        console.log(e);
      }
    };
    init();
  }, []);

  const { web3, fragmentClaimer, accounts } = data;

  return (
    <React.Fragment>
      <Header />
      <Layout>
        <Art web3={web3} fragmentClaimer={fragmentClaimer} />
      </Layout>
    </React.Fragment>
  );
};
