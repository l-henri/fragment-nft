import requests
import json
openseaBaseUrl = 'https://api.opensea.io/api/v1/assets?order_direction=asc&limit=50&collection=poap-v2&offset='

# &offset=0

offset = 6250
areThereStillAssetsToScrap = True
ethCCV3HoldersBook = []

while areThereStillAssetsToScrap:
	urlToQuery = openseaBaseUrl + str(offset)

	req = requests.get(urlToQuery)
	#print req.text
	data_json = json.loads(req.text)
	# if data_json == []:
	# 	break

	for asset in data_json['assets']:
		if asset['name'] == "EthCC 3":
			print("Found one!")
			ethCCV3HoldersBook.append(asset['owner']['address'])

	offset += 1*50
	print(offset)
	if offset > 8200:
		areThereStillAssetsToScrap = False

ethCCV3HoldersBook = list(dict.fromkeys(ethCCV3HoldersBook))

print(ethCCV3HoldersBook)
print("Found %s holders of EthCC v3 POAP token" % len(ethCCV3HoldersBook))
