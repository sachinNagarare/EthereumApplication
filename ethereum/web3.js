
import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/f4b59daff3a0401e9c1d3f005da37db3'
  );
  web3 = new Web3(provider);
}

const getProvider = async () => {
    await window.web3.currentProvider.enable(); // request authentication
  };

getProvider();

export default web3;
