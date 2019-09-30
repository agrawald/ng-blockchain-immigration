var Verifier = artifacts.require("./Verifier.sol");
var VerifierFactory = artifacts.require("./VerifierFactory.sol");

module.exports = function (deployer, network, accounts) {
	deployer.deploy(Verifier, "0x4f726967696e0000000000000000000000000000000000000000000000000000", accounts[0], []);
	deployer.deploy(VerifierFactory);
};
