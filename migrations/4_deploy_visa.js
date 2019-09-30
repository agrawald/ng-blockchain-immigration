var Visa = artifacts.require("./Visa.sol");
var VisaFactory = artifacts.require("./VisaFactory.sol");
var Application = artifacts.require("./Application.sol");

module.exports = function (deployer) {
	deployer.deploy(Visa, 
		"0x4f726967696e0000000000000000000000000000000000000000000000000000", 
		"0x4f726967696e0000000000000000000000000000000000000000000000000000")
		.then(function(instance) {
			deployer.deploy(Application, instance.address, []);
		});
	deployer.deploy(VisaFactory);
};
