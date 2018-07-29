pragma solidity ^0.4.21;

import "./Owned.sol";

contract Verifier is Owned {
    bytes32 public name;
    address public wallet;
    bytes32[] doc_types;
    bool public status;
    address[] artifacts;

    // constructors
    function Verifier(bytes32 pName, address pWallet, bytes32[] pDocTypes) public {
        owner = tx.origin;
        name = pName;
        wallet = pWallet;
        doc_types = pDocTypes;
        status = true;
    }

    function addDocType(bytes32 pDocType) public onlyByOwner {
        doc_types.push(pDocType) - 1;
    }

    function getDocTypes() public view returns (bytes32[]) {
        return doc_types;
    }

    function getArtifacts() public view returns (address[]) {
        return artifacts;
    }

    function addArtifact(address _artifact) public {
        artifacts.push(_artifact) - 1;
    }

    function setStatus(bool pStatus) public onlyByOwner {
        status = pStatus;
    }
}

