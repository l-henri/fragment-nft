const path = require("path");
/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const mnemonic =
  "final pig trigger hood spin tissue mercy universe capital hub play sunny";
const mnemonic2 =
  "snake mouse tail profit dash phone whisper number prize reform supply capable";
const infura_apikey = "2cce1f049fc04dac8240247dfbcbeff3";

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
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
      gasPrice: 2000000000
    }
    // rinkebyinfura: {
    //   provider: new HDWalletProvider(mnemonic2, "https://rinkeby.infura.io/v3/"+infura_apikey),
    //   network_id: 4,
    //   gasPrice: 2000000000,

    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.0" // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
