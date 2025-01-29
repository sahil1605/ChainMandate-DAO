import { useDAO } from '../hooks/useDAO';
import { ProposalCard } from '../components/governance/ProposalCard';
import { WalletConnector } from '../components/common/WalletConnector';

export const Dashboard = () => {
  const { proposals, votingPower } = useDAO();

  return (
    <div className="dashboard">
      <WalletConnector />
      
      <div className="stats-panel">
        <h2>DAO Statistics</h2>
        <p>Your Voting Power: {votingPower}</p>
        <p>Active Proposals: {proposals.length}</p>
      </div>

      <div className="proposals-grid">
        {proposals.map((proposal) => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </div>
  );
};