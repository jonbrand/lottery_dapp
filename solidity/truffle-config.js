const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');

const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    bscscan: '95BNZC82VFB77TCV6AAFRUNPUSGIS46WJ5'
  },
  networks: {
    plugins: ['truffle-plugin-verify'],
    bsctest: {
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: mnemonic,
          },
          providerOrUrl: "https://data-seed-prebsc-1-s1.binance.org:8545",
        }),
      skipDryRun: true,
      network_id: "97", // match any network
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
