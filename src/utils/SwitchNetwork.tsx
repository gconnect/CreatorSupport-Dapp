// import React from 'react';
// import { useWeb3React } from '@web3-react/core' 
//   const { library } = useWeb3React();

// // example of switching or adding network with Harmony Mainnet
// const switchNetwork = async () => {

//    try {
//      await library.provider.request({
//        method: "wallet_switchEthereumChain",
//        params: [{ chainId: "0x63564c40" }],
//      });
//    } catch (switchError) {
//      // 4902 error code indicates the chain is missing on the wallet
//      if (switchError.code === 4902) {
//        try {
//          await library.provider.request({
//            method: "wallet_addEthereumChain",
//            params: [
//              {
//                chainId: "0x63564c40",
//                rpcUrls: ["https://api.harmony.one"],
//                chainName: "Harmony Mainnet",
//                nativeCurrency: { name: "ONE", decimals: 18, symbol: "ONE" },
//                blockExplorerUrls: ["https://explorer.harmony.one"],
//                iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]
//              }
//            ],
//          });
//        } catch (error) {
//           console.error(error)
//        }
//      }
//    }
//  };

import React from 'react'

export default function SwitchNetwork() {
  return (
    <div>SwitchNetwork</div>
  )
}
