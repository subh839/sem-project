require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.g.alchemy.com/v2/rC4MQSxWcdZiQsyhCLUcuvEQiHkMlYWP',
      accounts: ['dcc9732b703ff2bedb218ec03e171398d65b8f76f56370f53e938bc78a076e98'],
    },
  },
};