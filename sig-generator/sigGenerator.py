from web3 import Web3
from web3.auto import w3
from eth_account.messages import encode_defunct
from eth-abi import encode_abi

message = "hello"
hash = Web3.solidityKeccak(['address'],['0xCae68CB461c5a8f7d78EdafEf344c989e709AB18'])
print(hash)
print(Web3.toHex(hash))
encodableMessage = encode_defunct(text=Web3.toHex(hash))
private_key = "29AB5D2BA501856F6792FD01F6186D873D7143443BCB8F727EC6ADD0F2597886"
signed_message = w3.eth.account.sign_message(encodableMessage, private_key=private_key)