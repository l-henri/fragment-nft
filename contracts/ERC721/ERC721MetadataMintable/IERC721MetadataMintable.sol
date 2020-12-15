pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

/**
 * @title ERC721MetadataMintable
 * @dev ERC721 minting logic with metadata.
 */
interface IERC721MetadataMintable is IERC721Metadata {
    function mintWithTokenURI(address to, uint256 tokenId, string calldata tokenURI) external returns (bool);
}
