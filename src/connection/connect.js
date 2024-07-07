const ABI = require('../abi.json');
const Web3 = require('web3');

const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
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