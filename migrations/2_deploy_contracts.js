const Web3 = require("web3");


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

  // Testing to claim a token
	const tokenNumber = 10
	// const tokenURI = "http://www.mescouilles.com"
	// const parametersEncoded = web3.eth.abi.encodeParameters(['address', 'uint256', 'string'], [ERC721.address, tokenNumber, tokenURI]);
	const parametersEncoded = web3.eth.abi.encodeParameters(['address', 'uint256'], [ERC721.address, tokenNumber]);
	const hashToSign = web3.utils.keccak256(parametersEncoded)
	const signature = await web3.eth.sign(hashToSign,accounts[0])
	console.log(signature)
  	// await fragmentClaimerContract.claimAToken(tokenNumber, tokenURI, signature)
  	await fragmentClaimerContract.claimAToken(tokenNumber, signature)

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
