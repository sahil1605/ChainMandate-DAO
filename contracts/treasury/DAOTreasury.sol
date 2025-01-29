pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract DAOTreasury is AccessControl, Pausable {
    bytes32 public constant SPENDER_ROLE = keccak256("SPENDER_ROLE");
    
    event FundsSpent(address indexed recipient, uint256 amount);
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function spendFunds(address payable recipient, uint256 amount) 
        external 
        onlyRole(SPENDER_ROLE) 
        whenNotPaused 
    {
        require(address(this).balance >= amount, "Insufficient funds");
        recipient.transfer(amount);
        emit FundsSpent(recipient, amount);
    }
}