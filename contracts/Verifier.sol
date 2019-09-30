pragma solidity ^0.5.8;

import "./Owned.sol";
import "./Artifact.sol";

contract Verifier is Owned {
    bytes32 public name;
    address public wallet;
    bytes32[] doc_types;
    bool public status;
    Artifact[] artifacts;

    // constructors
    constructor(bytes32 pName, address pWallet, bytes32[] memory pDocTypes) public {
        owner = msg.sender;
        name = pName;
        wallet = pWallet;
        doc_types = pDocTypes;
        status = true;
    }

    function addDocType(bytes32 pDocType) public onlyByOwner {
        doc_types.push(pDocType) - 1;
    }

    function getDocTypes() public view returns (bytes32[] memory) {
        return doc_types;
    }

    function getArtifacts() public view returns (Artifact[] memory) {
        return artifacts;
    }

    function addArtifact(Artifact _artifact) public {
        artifacts.push(_artifact) - 1;
    }

    function setStatus(bool pStatus) public onlyByOwner {
        status = pStatus;
    }
}

