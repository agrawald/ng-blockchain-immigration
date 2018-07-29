var Verifier = artifacts.require("./Verifier.sol");
var VerifierFactory = artifacts.require("./VerifierFactory.sol");

module.exports = function (deployer, network, accounts) {
	deployer.deploy(Verifier, "", accounts[0], []);
	deployer.deploy(VerifierFactory);
};
