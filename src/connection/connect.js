const ABI = require('../abi.json');
const Web3 = require('web3');

const contractAddress = "0x06Aa94B9Ee03460A668C09612860F9A87f4D5Aaf";
let address = null;

const web3 = new Web3(window.ethereum);

if (window.ethereum) {
    window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
        console.log('Wallet Connected');
        address = result[0];
        console.log(address);
    })
} else {
    console.log('please install metamask')
}

const myContract = new web3.eth.Contract(ABI, contractAddress, { from: address });
myContract.options.address = contractAddress;
console.log(myContract);

module.exports = { myContract, address };
