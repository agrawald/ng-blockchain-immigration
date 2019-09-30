var ApplicantRegistry = artifacts.require("./ApplicantRegistry.sol");
var AdminRegistry = artifacts.require("./AdminRegistry.sol");
var UserApplications = artifacts.require("./UserApplications.sol");
var UserArtifacts = artifacts.require("./UserArtifacts.sol");

module.exports = function (deployer) {
	deployer.deploy(AdminRegistry);
	deployer.deploy(ApplicantRegistry);
	deployer.deploy(UserApplications);
	deployer.deploy(UserArtifacts);
};
