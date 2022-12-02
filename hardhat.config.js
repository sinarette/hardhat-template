require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1,
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY],
    },
    matic: {
      url: "https://polygon-rpc.com/",
      chainId: 137,
      accounts: [process.env.PRIVATE_KEY],
    },
    op: {
      url: "https://mainnet.optimism.io/",
      chainId: 10,
      accounts: [process.env.PRIVATE_KEY],
    },
    arbi: {
      url: "https://arb1.arbitrum.io/rpc/",
      chainId: 42161,
      accounts: [process.env.PRIVATE_KEY],
    },
    celo: {
      url: `https://celo-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      chainId: 42220,
      accounts: [process.env.PRIVATE_KEY],
    },
    aurora: {
      url: "https://mainnet.aurora.dev/",
      chainId: 1313161554,
      accounts: [process.env.PRIVATE_KEY],
    },
    ftm: {
      url: "https://rpc3.fantom.network/",
      chainId: 250,
      accounts: [process.env.PRIVATE_KEY],
    },
    avax: {
      url: "https://api.avax.network/ext/bc/C/rpc/",
      chainId: 43114,
      accounts: [process.env.PRIVATE_KEY],
    },
    localhost: {
      url: `127.0.0.1:8545`,
      accounts: [process.env.PRIVATE_KEY],
    }
  }
};