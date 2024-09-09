Charity Fundraising Application
Overview
This is a Charity Fundraising application built using Solidity for smart contracts, Web3.js for interacting with the Ethereum blockchain, and basic HTML for the front end. The contract allows users to donate Ether to a charity and enables the owner to withdraw funds.

Smart Contract
Contract: CharityFundraising
Owner: The address that deploys the contract.
Total Funds: Keeps track of the total funds raised.
Donations: Maps donor addresses to their donation amounts.
Functions
donate(uint amount): Allows users to donate Ether to the contract. The amount is specified in wei (1 Ether = 10^18 wei).
withdrawFunds(uint amount): Allows the owner to withdraw a specified amount of Ether from the contract. Restricted to the owner.
getDonation(address donor): Returns the donation amount of a specified donor.
Events
DonationReceived(address donor, uint amount): Emitted when a donation is received.
FundsWithdrawn(address recipient, uint amount): Emitted when funds are withdrawn.
Front End
The front end provides a simple interface to interact with the contract. It uses HTML for structure and JavaScript (with Web3.js) to connect to the Ethereum network and interact with the smart contract.

HTML Structure
Make a Donation

Input: Amount (ETH)
Button: Donate
Withdraw Funds

Input: Amount to Withdraw (ETH)
Button: Withdraw Funds
View Donation

Input: Donor Address
Button: Get Donation
Display: Donation Amount
JavaScript Functions
donate(): Handles donation transactions. Converts ETH to wei before sending.
withdrawFunds(): Handles fund withdrawal transactions. Restricted to the contract owner.
getDonation(): Retrieves and displays the donation amount for a specified address.
Setup Instructions
Prerequisites
Node.js and npm installed.
MetaMask or any Ethereum wallet browser extension.
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/YASHKUMAR8/charity-fundraising-app.git
cd charity-fundraising-app
Install Dependencies

Ensure you have the web3 library available in your project.

bash
Copy code
npm install web3
Deploy the Smart Contract

Use Remix or any other Ethereum development environment to deploy the CharityFundraising contract to a test network or mainnet. Update the contractAddress in the JavaScript code with the deployed contract address.

Running the Application
Open index.html

Open the index.html file in a web browser. Ensure your Ethereum wallet extension (e.g., MetaMask) is connected to the appropriate network.

Interact with the Contract

Donate: Enter the amount you wish to donate and click "Donate".
Withdraw Funds: Enter the amount you want to withdraw and click "Withdraw Funds" (only available to the contract owner).
View Donation: Enter the donor address and click "Get Donation" to view the donation amount.
License
This project is licensed under the MIT License.
