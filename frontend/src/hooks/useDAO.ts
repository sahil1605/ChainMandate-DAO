import { useCallback } from 'react';
import { useWeb3 } from './useWeb3';
import { getGovernanceContract } from '../services/contracts';
import { useQuery } from '@tanstack/react-query';

export const useDAO = () => {
  const { signer, address } = useWeb3();
  
  const { data: votingPower } = useQuery(
    ['voting-power', address],
    async () => {
      const contract = getGovernanceContract(signer!);
      return contract.getVotingPower(address!);
    },
    { enabled: !!address }
  );

  const createProposal = useCallback(
    async (description: string, targets: string[], values: number[]) => {
      const contract = getGovernanceContract(signer!);
      const tx = await contract.propose(targets, values, description);
      return tx.wait();
    },
    [signer]
  );

  return { votingPower, createProposal };
};