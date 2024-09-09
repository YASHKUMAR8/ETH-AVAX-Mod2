if (typeof window.ethereum !== 'undefined') {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
} else {
    console.log('No Ethereum browser extension detected.');
}

const contractAddress = '0xC4F5ec840C16B2183544F2F7B9FFDD3ac2d46654'; // Replace with your contract address
const contractABI = [ 
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "donate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "donor",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "DonationReceived",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "FundsWithdrawn",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawFunds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "donor",
                "type": "address"
            }
        ],
        "name": "getDonation",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalFunds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function donate() {
    const accounts = await web3.eth.getAccounts();
    const amount = document.getElementById('donationAmount').value;

    await contract.methods.donate(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
    alert('Donation made successfully');
}

async function withdrawFunds() {
    const accounts = await web3.eth.getAccounts();
    const amount = document.getElementById('withdrawAmount').value;

    await contract.methods.withdrawFunds(web3.utils.toWei(amount, 'ether')).send({ from: accounts[0] });
    alert('Funds withdrawn successfully');
}

async function getDonation() {
    const donor = document.getElementById('donorAddress').value;
    const donation = await contract.methods.getDonation(donor).call();

    document.getElementById('donationAmountDisplay').innerHTML = `Donation Amount: ${web3.utils.fromWei(donation, 'ether')} ETH`;
}
