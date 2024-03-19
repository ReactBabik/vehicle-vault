import {ethers} from 'ethers';

export const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();