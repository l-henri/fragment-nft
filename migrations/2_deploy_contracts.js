const ERC721 = artifacts.require(
  "./ERC721/ERC721MetadataMintable/ERC721MetadataMintable.sol"
);
const fragmentClaimer = artifacts.require(
  "./FragmentClaimer/FragmentClaimer.sol"
);

async function doDeploy(deployer, network, accounts) {
  masterAddress = "0x87400bCd1c90cf0BDFD5C7178f533E4b1D976272";

  const ERC721Contract = await deployer.deploy(
    ERC721,
    "ETHCC Memorabilia 2019",
    "ETHCC-2019-FTW"
  );

  const fragmentClaimerContract = await deployer.deploy(
    fragmentClaimer,
    431,
    ERC721Contract.address
  );
  // Declare fragmentClaimer as minter for ERC721
  await ERC721Contract.addMinter(fragmentClaimerContract.address);

  // Declare master adress as minter in order to be able to switch minters later on
  await ERC721Contract.addMinter(masterAddress);

  // Removing deployment address as minter from ERC721
  await ERC721Contract.renounceMinter();

  // Add master address as minter in fragmentClaimer, for admin purposes
  await fragmentClaimerContract.updateWhitelist(masterAddress, true);

  // Testing to claim a token
  // const tokenNumber = 10
  // const tokenURI = "http://www.mescouilles.com"
  // const parametersEncoded = web3.eth.abi.encodeParameters(['address', 'uint256', 'string'], [ERC721.address, tokenNumber, tokenURI]);
  // const hashToSign = web3.utils.keccak256(parametersEncoded)
  // const signature = await web3.eth.sign(hashToSign,accounts[0])
  // console.log(signature)
  //  	await fragmentClaimerContract.claimAToken(tokenNumber, tokenURI, signature)
}

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    await doDeploy(deployer, network, accounts);
  });
};
