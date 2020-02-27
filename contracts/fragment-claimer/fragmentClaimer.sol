pragma solidity ^0.5.0;

import "../token/ERC721/ERC721Mintable.sol";

/**
 * @title ERC721 Non-Fungible Token Standard basic implementation
 * @dev see https://eips.ethereum.org/EIPS/eip-721
 */
contract fragmentClaimer {
    address public authorizedSigner; 
    mapping(uint => bool) public tokensThatWereClaimed;
    uint maxTokenId;

    constructor(address _authorizedSigner, uint _maxTokenId) public
    {
        authorizedSigner = _authorizedSigner;
        maxTokenId = _maxTokenId;
    }

    function claimAToken(uint _tokenToClaim) 
    public 
    returns (bool)
    {
        require(!tokensThatWereClaimed[_tokenToClaim]);
        require(_tokenToClaim <= maxTokenId);

    }
}
