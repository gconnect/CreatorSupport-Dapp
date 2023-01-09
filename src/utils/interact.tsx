import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { BigNumber } from "ethers";
import { AbiItem } from 'web3-utils'
import contractABI from "../Donation.json"
const alchemyUrl = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_MUMBAI_API_KEY}`;
const web3 = createAlchemyWeb3(alchemyUrl);
const contractAddress = "0x4f5a57e61f011e7dEc0a999d0AAe5B58033251e3";

 export const donationContract = new web3.eth.Contract(
  contractABI.abi as AbiItem[],
  contractAddress
);

 /*
    * Save the new feed to the blockchain
    */
export const createCreator = async (address: string | null | undefined, username: string,
  profilePixUrl: string, userBio: string, network: string) => {
  const txHash = await donationContract.methods.setCreatorDetail(
    username, profilePixUrl, userBio, network
  ).send({
    from: address,
    gasLimit:'2100000'
  })
  console.log(txHash)
}

export const sendTip = async (address: string | null | undefined, message: string, index : number, amount: BigNumber) => {
  const txHash = await donationContract.methods.sendTip(message, index).send({
    from: address,
    value: amount,
    gasLimit: '2100000'
  })
  console.log(txHash)
}
// get all creators
export const getAllCreators = async () => {
  const creators  = []
  const creatorCount = await donationContract.methods.getAllCreators().call()
  for (let i = 0; i <= creatorCount.length; i++){
    const creatorIndex = await donationContract.methods.getCreatorInfo(i).call()
    creators.push(creatorIndex)
  }
  console.log(creators)
  return creators;
}

// Use this
export const getCreators = async () => {
  const creatorCount = await donationContract.methods.getCreatorList().call()
  // console.log(creatorCount)
  return creatorCount;

  // Working with event
  // await donationContract.events.CreatorEvent({}, (error: Error, data: any) => {
  //   if (error) {
  //     console.log(error)
  //   } else {
  //    return data.returnValues[1]
  //   }
  // }) 
}


export const getCreator = async (index: number) => {
  const creatorObj = await donationContract.methods.getCreatorObj(index).call() 
  console.log(creatorObj)
  return creatorObj;
}

export const getCreatorSupporterCount = async () => {
  const supportersCount = await donationContract.methods.getSupporters().call()
  console.log(supportersCount)
  return supportersCount
}

export const creatorWithdrawTip = async(address: string | null | undefined, index: number, amount: number, receipient: string) => {
  const txHash = await donationContract.methods.creatorWithdrawTip(index, amount, receipient).send({
     from: address,
    gasLimit:'2100000'
  })
  console.log(txHash)
}

export const getCreatorBal = async (index : number) => {
  const earnings = await donationContract.methods.getCreatorBal(index).call()
  console.log(earnings)
  return earnings
}

/*
   * A function to check if a user wallet is connected.
   */
  // export const checkIfWalletIsConnected = async () => {
  //   try {
  //     const { ethereum } = window;

  //     /*
  //      * Check if we're authorized to access the user's wallet
  //      */
  //     const accounts = await ethereum.request({ method: "eth_accounts" });

  //     if (accounts.length !== 0) {
  //       const account = accounts[0];
  //     const obj = {
  //       currentAccount: account,
  //       status: "🦄 Wallet is Connected!",
  //     };
  //       return obj;
  //     } else {
  //       return "To create a feed, Ensure your wallet Connected!"
  //     }
  //   } catch (err) {
  //     return err;
  //   }
  // };

//   export const getCurrentWalletConnected = async () => {
//   if (window.ethereum) {
//     try {
//       const addressArray = await window.ethereum.request({
//         method: "eth_accounts",
//       });
//       if (addressArray.length > 0) {
//         return {
//           address: addressArray[0],
//           status: "👆🏽 Write a message in the text-field above.",
//         };
//       } else {
//         return {
//           address: "",
//           status: "🦊 Connect to Metamask using the top right button.",
//         };
//       }
//     } catch (err) {
//       return {
//         address: "",
//         status: "😥 " + err,
//       };
//     }
//   } else {
//     return {
//       address: "",
//       status: (
//         <span>
//           <p>
//             {" "}
//             🦊{" "}
//             <a target="_blank" href={`https://metamask.io/download.html`}>
//               You must install Metamask, a virtual Ethereum wallet, in your
//               browser.
//             </a>
//           </p>
//         </span>
//       ),
//     };
//   }
// };