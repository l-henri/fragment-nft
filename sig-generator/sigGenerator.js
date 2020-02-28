var Web3 = require('web3')

const contractAddress = "0xCae68CB461c5a8f7d78EdafEf344c989e709AB18"
const tokenNumber = 10
const tokenURI = "http://www.mescouilles.com"

var web3 = new Web3()
myTest = web3.eth.abi.encodeParameters(['address', 'uint256', 'string'], [contractAddress, tokenNumber, tokenURI]);
console.log(myTest)
myTestHash = web3.utils.keccak256(myTest)
console.log(myTestHash)
