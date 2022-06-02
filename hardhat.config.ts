// @ts-check
require('@typechain/hardhat');
require('@nomiclabs/hardhat-ethers');

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config = {
  solidity: '0.8.11',
  typechain: {
    outDir: 'src/contracts',
    target: 'ethers-v5',
  },
};

module.exports = config;
