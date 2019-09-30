pragma solidity ^0.5.8;

import "./Owned.sol";
import "./Verifier.sol";
import "./Artifact.sol";

contract UserArtifacts is Owned {
    mapping(address => Artifact[]) user_artifacts;

    constructor() public {
        owner = msg.sender;
    }

    function createArtifact(bytes32 pName, bytes32 pDigest, uint pHashFunction, uint pSize, address pVerifier, bytes32 pType) public {
        Artifact artifact = new Artifact(pName, pDigest, pHashFunction, pSize, pVerifier, pType);
        user_artifacts[msg.sender].push(artifact) - 1;
        Verifier verifier = Verifier(pVerifier);
        verifier.addArtifact(artifact);
    }

    function findUserArtifacts(address _user) public view returns (Artifact[] memory){
        return user_artifacts[_user];
    }
}

