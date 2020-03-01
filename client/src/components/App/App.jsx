import React, { useState, useEffect } from "react";
import getWeb3 from "#root/getWeb3";
import FragmentClaimerContract from "#contractAbis/FragmentClaimer";

import Header from "../Header";
import Drawer from "../Drawer";
import Home from "../Home";

export const App = () => {
  const [data, setData] = useState({
    web3: null,
    fragmentClaimer: null,
    accounts: []
  });
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => {
    setOpen(!open);
  };

  const { web3, fragmentClaimer } = data;

  return (
    <React.Fragment>
      <Header />
      <Drawer open={open} handleOpen={handleOpen} />
      <Home web={web3} fragmentClaimer={fragmentClaimer} />
    </React.Fragment>
  );
};
