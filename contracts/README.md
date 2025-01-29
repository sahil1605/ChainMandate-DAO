# DAO Contracts Architecture

## Contracts Overview
| Contract               | Purpose                                  |
|------------------------|------------------------------------------|
| `GovernanceToken`      | ERC-20 with snapshot voting capabilities |
| `DAOGovernance`        | Core proposal/voting system              |
| `TimeLockedStaking`    | Staking with time-based multipliers      |
| `DAOTreasury`          | Community fund management                |

## Development Flow
1. Install dependencies: `npm install`
2. Compile contracts: `npx hardhat compile`
3. Run tests: `npx hardhat test`
4. Deploy: `npx hardhat run scripts/deploy.ts`

## Security Audit
- [x] Slither static analysis
- [x] MythX integration
- [ ] Formal verification (TBD)