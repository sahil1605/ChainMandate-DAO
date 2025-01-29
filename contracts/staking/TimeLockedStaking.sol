pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract TimeLockedStaking is ReentrancyGuard {
    struct Stake {
        uint256 amount;
        uint256 unlockTime;
    }
    
    mapping(address => Stake[]) public stakes;
    
    function stake(uint256 lockMonths) external payable nonReentrant {
        require(lockMonths >= 1, "Minimum 1 month lock");
        uint256 unlockTime = block.timestamp + (lockMonths * 30 days);
        stakes[msg.sender].push(Stake(msg.value, unlockTime));
    }
    
    // Additional staking logic...
}