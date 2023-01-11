import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { BigNumber } from "ethers";
import { AbiItem } from 'web3-utils'
import contractABI from "../Donation.json"
import { ethers } from "ethers";

const alchemyUrl = `https://polygon-mumbai.g.alchemy.com/v2/${process.env.REACT_APP_ALCHEMY_MUMBAI_API_KEY}`;
const web3 = createAlchemyWeb3(alchemyUrl);
const contractAddress = "0x8A5E7B981F418e4db93a7aC2421CBF75502FfA67";

 export const donationContract = new web3.eth.Contract(
  contractABI.abi as AbiItem[],
  contractAddress
 );

//  export default function donationContract() {
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner(
//     "0x65645067615CAFCc37AB63ADEe2bc1231Fb257f3" // wallet address of signer
//   );
//   let contract = new ethers.Contract(
//     contractAddress, // Our contract adress
//     contractABI.abi,
//     signer
//   );
//   return contract;
// }

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
  const creatorCount = await donationContract.methods.getCreatorCount().call()

  const creators  = []
  for (let i = 0; i < creatorCount.length; i++){
    let creator = await donationContract.methods.getCreatorInfo(i).call()
    console.log(creator)
    creator.index = i;
    console.log(creator.index = i)
    creators.push(creator)
  }
  // console.log(creatorCount)
  return creators;

  // const _creatorLength = await donationContract.methods.getAllCreators().call()
  // const _creators = []

  // for (let i = 0; i < _creatorLength; i++) {
  //   let _creator = new Promise<any>(async (resolve) => {
  //     let creatorObj = await donationContract.methods.getCreatorInfo(i).call()
  //     creatorObj.index = i

  //     resolve(creatorObj)
  //   })
  //   _creators.push(_creator)
  // }

  // const creators = await Promise.all(_creators)
  // console.log(creators)
  // return creators
}

// Use this
export const getCreators = async () => {
  const creatorCount = await donationContract.methods.getCreatorList().call()
  console.log(creatorCount)
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
  // const creatorObj = await donationContract.methods.getCreatorInfo(index).call() 
  console.log(creatorObj)
  return creatorObj;
}

export const getCreatorSupporterCount = async () => {
  const supportersCount = await donationContract.methods.getSupporters().call()
  console.log(supportersCount)
  return supportersCount
}

export const creatorWithdrawTip = async(address: string | null | undefined, index: number, amount: BigNumber) => {
  const txHash = await donationContract.methods.creatorWithdrawTip(index, amount).send({
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
