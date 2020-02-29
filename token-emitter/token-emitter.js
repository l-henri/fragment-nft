const Web3 = require("web3");
const fs = require('fs');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const dotenv = require('dotenv')
const config = dotenv.config("..")
// console.log(config)


var mnemonic3 = config.parsed.mnemonic3
// console.log(mnemonic3)
var infura_apikey = config.parsed.infura_apikey
const ERC721ContractAddres = "0xf90304bDB5916a5eC436bFf286d7160DAf4169d6"

let provider = new HDWalletProvider(mnemonic3, "https://rinkeby.infura.io/v3/"+infura_apikey)
var web3 = new Web3(provider)


async function signAllTokens() {
  // console.log(provider)
  // ERC721 contract address
  
  let signaturesDictionnary = []
  for (tokenNumber = 0; tokenNumber < 432; tokenNumber++)
    {
    // Loading token number and associated URIs
  	var tokenURI = "http://www.mescouilles.com/" + tokenNumber
  	var parametersEncoded = web3.eth.abi.encodeParameters(['address', 'uint256', 'string'], [ERC721ContractAddres, tokenNumber, tokenURI]);
  	var hashToSign = web3.utils.keccak256(parametersEncoded)
  	var signature = await web3.eth.sign(hashToSign,provider.addresses[0])
  	let singleToken = {}
    singleToken.tokenNumber = tokenNumber
    singleToken.uri = tokenURI
    singleToken.signature = signature
    signaturesDictionnary.push(singleToken)
  }
  // console.log(signaturesDictionnary)
  var json = JSON.stringify(signaturesDictionnary);
  fs.writeFile ("myjsonfile.json", json, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
 //  	await fragmentClaimerContract.claimAToken(tokenNumber, tokenURI, signature)

}

signAllTokens();
