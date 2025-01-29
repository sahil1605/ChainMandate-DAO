pragma solidity ^0.8.19;

library GovernanceMath {
    function calculateVotingPower(
        uint256 tokenBalance,
        uint256 stakedAmount,
        uint256 lockDuration
    ) internal pure returns (uint256) {
        return tokenBalance + 
            (stakedAmount * lockDuration) / 12; // 12 month max
    }
    
    // Additional math utilities...
}