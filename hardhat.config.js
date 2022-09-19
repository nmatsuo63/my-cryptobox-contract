require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
const { secret_key } = process.env
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "goerli",
  solidity: "0.8.9",//solidityに合わせる
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/2jIrhgw1ylF0v5mWmBkVcL14N88Vmom4",//AlchemyのHTTPS
      accounts: [
        secret_key,//秘密鍵
        // "1efede927d2e2c5c83e12a99dab9a72931bada78d005f3eb2d2bf03fad47a590"
      ],
    },
  },
};
