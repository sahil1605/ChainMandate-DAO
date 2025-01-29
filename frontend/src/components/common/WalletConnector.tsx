import { useWeb3 } from '../../hooks/useWeb3';
import { Web3Button } from '@web3modal/react';

export const WalletConnector = () => {
  const { address, chainId } = useWeb3();

  return (
    <div className="wallet-section">
      {address ? (
        <div className="wallet-info">
          <span>{`${address.slice(0, 6)}...${address.slice(-4)}`}</span>
          <span>Chain: {chainId}</span>
        </div>
      ) : (
        <Web3Button />
      )}
    </div>
  );
};