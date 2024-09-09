// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CharityFundraising {
    address public owner;
    uint public totalFunds;
    
    mapping(address => uint) public donations;
    
    event DonationReceived(address donor, uint amount);
    event FundsWithdrawn(address recipient, uint amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function donate(uint amount) public {
        require(amount > 0, "Donation amount must be greater than 0");
        donations[msg.sender] += amount;
        totalFunds += amount;
        emit DonationReceived(msg.sender, amount);
    }
    
    function withdrawFunds(uint amount) public onlyOwner {
        require(amount <= totalFunds, "Insufficient funds");
        totalFunds -= amount;
        payable(owner).transfer(amount);
        emit FundsWithdrawn(owner, amount);
    }

    function getDonation(address donor) public view returns (uint) {
        return donations[donor];
    }
}
