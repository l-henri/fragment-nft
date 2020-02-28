const web3 = require("web3");

const ERC721 = artifacts.require(
  "./ERC721/ERC721MetadataMintable/ERC721MetadataMintable.sol"
);
const fragmentClaimer = artifacts.require(
  "./fragment-claimer/fragmentClaimer.sol"
);

async function doDeploy(deployer, network, accounts) {
  const ERC721Contract = await deployer.deploy(ERC721, "jsp", "gro");
  const fragmentClaimerContract = await deployer.deploy(
    fragmentClaimer,
    500,
    ERC721Contract.address
  );
  // Declare fragmentClaimer as minter for ERC721
  await ERC721Contract.addMinter(fragmentClaimerContract.address);

  /*
  await fragmentClaimerContract.claimAToken(
    10,
    "uri",
    web3.utils.fromAscii("1234")
  );
  */
}

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    await doDeploy(deployer, network, accounts);
  });
};
/*
module.exports = deployer => {
  deployer.deploy(ERC721, "jsp", "gro");
};
*/
