# Claimer V2
This the signatures for fragmentClaimer V2 contract are generated. 
* Each fragment has a number and an IPFS hash
* Each hash corresponds to the json containing path data for a fragment; the image itself is just a representation of the actual path taken to draw the image
* The token-emitter script signs a combination of the ERC721 address, the token number and the hash (like for claimer V1). I used another address than the one used for fragment V1, since I want to let V1 up.
* The address-authorizer script signs a combination of the ERC721 address and a recipient address. V2 will let anyone who claimed a POAP token claim a fragment.
