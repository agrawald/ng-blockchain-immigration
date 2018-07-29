pragma solidity ^0.4.21;

import "./Owned.sol";

contract Artifact is Owned {
    bytes32 public name;
    bool public is_valid;
    address public verifier;
    bytes32 public artifact_type;

    struct Multihash {
        bytes32 digest;
        uint hashFunction;
        uint size;
    }

    Multihash private ipfs;

    //modifier
    modifier onlyByVerifier() {
        if (verifier != msg.sender) revert();
        _;
    }

    // constructors
    function Artifact(bytes32 pName, bytes32 pDigest, uint pHashFunction, uint pSize, address pVerifier, bytes32 pType) public {
        owner = tx.origin;
        name = pName;
        ipfs = Multihash(pDigest, pHashFunction, pSize);
        verifier = pVerifier;
        artifact_type = pType;
    }

    function depositVerifierFee(uint _fee) public payable {
        require(_fee == msg.value);
    }

    function setValid(bool _flag) public payable {
        is_valid = _flag;
        msg.sender.transfer(address(this).balance);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function getIpfs() public view returns (bytes32, uint, uint){
        return (ipfs.digest, ipfs.hashFunction, ipfs.size);
    }
}

