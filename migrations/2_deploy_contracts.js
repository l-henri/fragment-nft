var ERC721 = artifacts.require("./token/ERC721/ERC721Mintable.sol");
var fragmentClaimer = artifacts.require(
  "./fragment-claimer/fragmentClaimer.sol"
);

async function doDeploy(deployer, network, accounts) {
  // Deployer ERC721
  ERC721Contract = await deployer.deploy(ERC721);
  // Deploy fragmentClaimer
  fragmentClaimerContract = await deployer.deploy(
    fragmentClaimer,
    500,
    ERC721Contract.address
  );
  // Declare fragmentClaimer as minter for ERC721
  await ERC721Contract.addMinter(fragmentClaimerContract.address);
}
module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    await doDeploy(deployer, network, accounts);
  });
};
