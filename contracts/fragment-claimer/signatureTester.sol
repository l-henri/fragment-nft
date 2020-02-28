// Permet de tester a quoi ressemble un message empaquete et hashé

contract signatureTester {
  bytes32 public compiledHash;
  bytes public encoded;
    constructor() public
    {
     
    }



    function getHash(address _contractAddress, uint _tokenNumber, string memory _tokenURI) 
    public 
    {
        encoded = abi.encode(_contractAddress, _tokenNumber, _tokenURI);
        compiledHash = keccak256(encoded);
    }

}