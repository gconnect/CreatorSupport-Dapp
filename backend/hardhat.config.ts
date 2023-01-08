import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config()
// require('dotenv').config()
const { MUMBAI_URL, METAMASK_PRIVATE_KEY, ALCHEMY_MUMBAI_PRIVATE_KEY } = process.env;
// const MUMBAI_URL : string | undefined  = process.env.MUMBAI_URL
// const METAMASK_PRIVATE_KEY : string  = (process.env.METAMASK_MUMBAI_PRIVATE_KEY as string)


const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    // Polygon mumbai testnet
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_MUMBAI_PRIVATE_KEY}`,
      accounts: [METAMASK_PRIVATE_KEY!],
    },
    // Celo Alfajores testnet
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [METAMASK_PRIVATE_KEY!],
      chainId: 44787
    }
  }
}
export default config;
