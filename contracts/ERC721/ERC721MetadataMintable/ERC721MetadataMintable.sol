pragma solidity ^0.5.0;

import "../ERC721/ERC721.sol";
import "../ERC721Metadata/ERC721Metadata.sol";
import "../../access/roles/MinterRole.sol";

/**
 * @title ERC721MetadataMintable
 * @dev ERC721 minting logic with metadata.
 */
contract ERC721MetadataMintable is ERC721, ERC721Metadata, MinterRole {
    constructor(string memory name, string memory symbol) ERC721Metadata(name, symbol) public {}
    /**
     * @dev Function to mint tokens.
     * @param to The address that will receive the minted tokens.
     * @param tokenId The token id to mint.
     * @param tokenURI The token URI of the minted token.
     * @return A boolean that indicates if the operation was successful.
     */
    function mintWithTokenURI(address to, uint256 tokenId, string memory tokenURI) public onlyMinter returns (bool) {
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        return true;
    }
}
