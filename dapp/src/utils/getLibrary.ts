import Web3 from "web3";

export const getLibrary = (provider: any): Web3 => {
  const library = new Web3(provider);
  return library;
};