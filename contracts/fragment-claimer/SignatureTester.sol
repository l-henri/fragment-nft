pragma solidity ^0.5.0;

contract SignatureTester {
    bytes32 public compiledHash;
    bytes public encoded;

    constructor() public {}

    function getHash(address _contractAddress, uint _tokenNumber, string memory _tokenURI) public {
        encoded = abi.encode(_contractAddress, _tokenNumber, _tokenURI);
        compiledHash = keccak256(encoded);
    }
}
