const ERC721 = artifacts.require(
  "./ERC721/ERC721MetadataMintable/ERC721MetadataMintable.sol"
);
const fragmentClaimer = artifacts.require(
  "./fragment-claimer/fragmentClaimer.sol"
);

const tokenNumber1 = 10;
const tokenNumber2 = 20;
const uri1 = "http://www.mescouilles.com";
const uri2 = "http://www.mesboules.com";

async function sign(web3, contractAddress, number, uri, account) {
  const encoded = web3.eth.abi.encodeParameters(
    ["address", "uint256", "string"],
    [contractAddress, number, uri]
  );
  const hashToSign = web3.utils.keccak256(encoded);
  return web3.eth.sign(hashToSign, account);
}

async function doDeploy(deployer, network, accounts) {
  if (network === "ganache") {
    const ERC721Contract = await deployer.deploy(ERC721, "jsp", "gro");
    const fragmentClaimerContract = await deployer.deploy(
      fragmentClaimer,
      500,
      ERC721Contract.address
    );
    // Declare fragmentClaimer as minter for ERC721
    await ERC721Contract.addMinter(fragmentClaimerContract.address);
    // claim tokens
    const signature1 = await sign(
      web3,
      ERC721.address,
      tokenNumber1,
      uri1,
      accounts[0]
    );
    const signature2 = await sign(
      web3,
      ERC721.address,
      tokenNumber2,
      uri2,
      accounts[0]
    );
    await fragmentClaimerContract.claimAToken(tokenNumber1, uri1, signature1);
    await fragmentClaimerContract.claimAToken(tokenNumber2, uri2, signature2);
  } else {
    console.log("not ganache network");
  }
}

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    await doDeploy(deployer, network, accounts);
  });
};
