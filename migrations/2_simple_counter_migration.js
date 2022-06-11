const SimpleCounter = artifacts.require("SimpleCounter");

module.exports = function (deployer, network, accounts) {
  console.log(`Attempting to deploy from account: ${accounts[0]}`);
  deployer.deploy(SimpleCounter);
};
