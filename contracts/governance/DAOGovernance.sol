pragma solidity ^0.8.19;

import "@openzeppelin/contracts/governance/Governor.sol";
import "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";

contract DAOGovernance is Governor, GovernorVotes {
    uint256 public constant MIN_PROPOSAL_THRESHOLD = 1000 ether;
    
    constructor(IVotes _token)
        Governor("DAO Governance")
        GovernorVotes(_token)
    {}

    function votingDelay() public pure override returns (uint256) {
        return 1; // 1 block
    }

    function votingPeriod() public pure override returns (uint256) {
        return 50400; // ~1 week in blocks
    }

    function proposalThreshold() public pure override returns (uint256) {
        return MIN_PROPOSAL_THRESHOLD;
    }
    
    // Additional governance functions...
}