
// example of switching or adding network with Mumbai Testnet
export const switchNetwork = async(library : any) => {

   try {
     await library.provider.request({
       method: "wallet_switchEthereumChain",
       params: [{ chainId: "0x13881" }],
     });
   } catch (switchError) {
     // 4902 error code indicates the chain is missing on the wallet
     if (switchError.code === 4902) {
       try {
         await library.provider.request({
           method: "wallet_addEthereumChain",
           params: [
             {
               chainId: "0x13881",
               rpcUrls: [`https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_MUMBAI_API_KEY}`],
               chainName: "Mumbai",
               nativeCurrency: { name: "MATIC", decimals: 18, symbol: "MATIC" },
               blockExplorerUrls: ["https://mumbai.polygonscan.com"],
               iconUrls: [""]
             }
           ],
         });
       } catch (error) {
          console.error(error)
       }
     }
   }
 };

