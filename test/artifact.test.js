var Artifact = artifacts.require("./Artifact.sol");
Artifact.defaults({
  from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57",
  gas: 4712388,
  gasPrice: 100000000000
});
contract('Artifact', function () {
  it("should create new Artifact instance", function () {
    return Artifact.new("0x627306090abaB3A6e1400e9345bC60c78a8BEf57")
      .then(function (instance) {
        return instance.owner.call();
      }).then(function (owner) {
        assert.equal(owner, 0x627306090abaB3A6e1400e9345bC60c78a8BEf57, "New Artifact should be created");
      });
  });

  it("should set URL in the Artifact instance", function () {
    return Artifact.new("0x627306090abaB3A6e1400e9345bC60c78a8BEf57")
      .then(function (instance) {
        console.log(instance);
        instance.setUrl.sendTransaction("xyz");
        return instance.getUrl.call();
      }).then(function (url) {
        console.log(url);
        assert.equal(url, "xyz", "Artifact URL should be set");
      });
  });
});
