var ERC721 = artifacts.require("./token/ERC721/ERC721Mintable.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721);

};
