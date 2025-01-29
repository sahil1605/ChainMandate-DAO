export class Governance extends BaseContract {
    interface: GovernanceInterface;
    
    functions: {
      createProposal(
        description: string,
        overrides?: Overrides & { from?: string }
      ): Promise<ContractTransaction>;
    };
  
    filters: {
      "ProposalCreated(bytes32,address,string)"(
        proposalId?: null,
        proposer?: string | null,
        description?: null
      ): ProposalCreatedEventFilter;
    };
  }