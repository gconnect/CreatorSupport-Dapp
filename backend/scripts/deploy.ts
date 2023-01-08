import { ethers } from "hardhat";

async function main() {
  const Donation = await ethers.getContractFactory("Donation");
  const donation = await Donation.deploy();
  const contractAddress = await (await donation.deployed()).address;
  console.log(`Contract was deployed to ${contractAddress}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
