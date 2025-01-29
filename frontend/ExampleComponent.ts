import { useGovernance } from './hooks/useGovernance';

const ProposalList = () => {
  const { proposals, voteForProposal } = useGovernance();

  return (
    <div className="proposal-grid">
      {proposals.map((proposal) => (
        <ProposalCard
          key={proposal.id}
          title={proposal.title}
          description={proposal.description}
          onVote={() => voteForProposal(proposal.id, true)}
        />
      ))}
    </div>
  );
};