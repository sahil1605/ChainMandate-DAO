import { GovernanceToken__factory } from 'generated/contract-types';
import { ethers } from 'ethers';

export const getContractInstance = (
  address: string,
  abi: any,
  signer: ethers.Signer
) => {
  return new ethers.Contract(address, abi, signer);
};

export const getGovernanceContract = (signer: ethers.Signer) => {
  return GovernanceToken__factory.connect(
    process.env.NEXT_PUBLIC_GOVERNANCE_ADDRESS!,
    signer
  );
};