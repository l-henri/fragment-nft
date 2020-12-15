const Web3 = require("web3");
const fs = require('fs');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const dotenv = require('dotenv')
const config = dotenv.config("..")
var mnemonic3 = config.parsed.mnemonic3
var infura_apikey = config.parsed.infura_apikey


///// A remplir
const ERC721ContractAddres = "0xf90304bDB5916a5eC436bFf286d7160DAf4169d6"
const baseRetrieveUrl = "http://localhost:1234/claim/"




let provider = new HDWalletProvider(mnemonic3, "https://rinkeby.infura.io/v3/"+infura_apikey)
var web3 = new Web3(provider)

let rawdata = fs.readFileSync('./token-emitter/IPFS_URIs.json');
let tokenJson = JSON.parse(rawdata);
// console.log(tokenJson)

async function signAllTokens() {
  // console.log(provider)
  // ERC721 contract address
  
  let signaturesDictionnary = []
  for (i = 0; i < tokenJson.length; i++)
    {
    // Loading token number and associated URIs
  	var tokenURI = tokenJson[i].Hash
  	var parametersEncoded = web3.eth.abi.encodeParameters(['address', 'uint256', 'string'], [ERC721ContractAddres, tokenJson[i].tokenNumber, tokenURI]);
  	var hashToSign = web3.utils.keccak256(parametersEncoded)
  	var signature = await web3.eth.sign(hashToSign,provider.addresses[0])
  	let singleToken = {}
    singleToken.tokenNumber = tokenJson[i].tokenNumber
    singleToken.uri = tokenURI
    singleToken.signature = signature
    singleToken.retrieveUrl = baseRetrieveUrl + singleToken.tokenNumber + "?uri=" + tokenURI + "&sig=" + signature
    signaturesDictionnary.push(singleToken)
  }
  // console.log(signaturesDictionnary)
  var json = JSON.stringify(signaturesDictionnary);
  fs.writeFile ("output-sig.json", json, function(err) {
    if (err) throw err;
    console.log('complete');
    }
);
 //  	await fragmentClaimerContract.claimAToken(tokenNumber, tokenURI, signature)

}

signAllTokens();
