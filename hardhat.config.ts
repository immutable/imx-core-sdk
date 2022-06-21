// @ts-check
require('@typechain/hardhat');
require('@nomiclabs/hardhat-ethers');

const config = {
  solidity: '0.8.11',
  typechain: {
    outDir: 'src/contracts',
    target: 'ethers-v5',
  },
};

module.exports = config;
