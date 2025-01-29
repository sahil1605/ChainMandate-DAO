import { useState } from 'react';
import { useStaking } from '../../hooks/useStaking';

export const StakeForm = () => {
  const [amount, setAmount] = useState('');
  const [lockMonths, setLockMonths] = useState(3);
  const { stakeTokens } = useStaking();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await stakeTokens(Number(amount), lockMonths);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount to stake"
      />
      <input
        type="range"
        min="1"
        max="12"
        value={lockMonths}
        onChange={(e) => setLockMonths(Number(e.target.value))}
      />
      <span>{lockMonths} months</span>
      <button type="submit">Stake Tokens</button>
    </form>
  );
};