/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

// var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = "final pig trigger hood spin tissue mercy universe capital hub play sunny"
var mnemonic2 = "snake mouse tail profit dash phone whisper number prize reform supply capable"
var infura_apikey = "2cce1f049fc04dac8240247dfbcbeff3"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
  	ganache: {
  		host: "127.0.0.1",
  		port: 7545,
  		network_id: "*",
  		gasPrice: 11000000000
  	},
    // rinkebywallet: {
    //   provider: new HDWalletProvider(mnemonic, "http://172.24.32.70:8545"),
    //   from: "0x6e5329026eb58d6242a2633871a063464b098c7a",
    //   network_id: 4,
    //   gasPrice: 1000000000,
    //   gas: 4704588
    // },
    rinkeby: {
      host: "127.0.0.1",
      port: 8545,
      from: "0xa1c70389cb93a02d9a6609b4a9a1e80b85b61ffd",
      network_id: "*",
      gas: 3704588,
      gasPrice: 2000000000,

    },
    // rinkebyinfura: {
    //   provider: new HDWalletProvider(mnemonic2, "https://rinkeby.infura.io/v3/"+infura_apikey),
    //   network_id: 4,
    //   gasPrice: 2000000000,


    // }
  }
};
