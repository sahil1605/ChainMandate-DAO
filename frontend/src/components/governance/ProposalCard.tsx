import { Proposal } from 'types/dao-types';
import { useVoting } from '../hooks/useDAO';

export const ProposalCard = ({ proposal }: { proposal: Proposal }) => {
  const { voteForProposal } = useVoting();
  const { id, description, status, votesFor, votesAgainst } = proposal;

  return (
    <div className="proposal-card">
      <h3>{description}</h3>
      <div className="vote-meter">
        <div style={{ width: `${(votesFor / (votesFor + votesAgainst)) * 100}%` }} />
      </div>
      <button 
        onClick={() => voteForProposal(id, true)}
        disabled={status !== 'ACTIVE'}
      >
        Vote For
      </button>
      <span>{votesFor} FOR</span>
      <span>{votesAgainst} AGAINST</span>
    </div>
  );
};