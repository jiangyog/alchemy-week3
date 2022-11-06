require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/yZ3kArQKHA__TNss-iVluK-jxCFkHO9u",// process.env.TESTNET_RPC
      accounts: ["065ebcdd980df35ef8ec1b1753ad8be51c63042f8c15dcd305d682c7502dfeba"]//[process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};

