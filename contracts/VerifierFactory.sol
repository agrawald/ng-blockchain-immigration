pragma solidity ^0.5.8;

import "./Owned.sol";
import "./Verifier.sol";

contract VerifierFactory is Owned {
    mapping(address => Verifier) verifierMap;
    Verifier[] verifiers;

    constructor() public {
        owner = msg.sender;
    }

    function createVerifier(bytes32 pName, address pWallet, bytes32[] memory pDocTypes) public {
        Verifier verifier = new Verifier(pName, pWallet, pDocTypes);
        verifiers.push(verifier) - 1;
        verifierMap[pWallet] = verifier;
    }

    function findAll() public view returns (Verifier[] memory) {
        return verifiers;
    }

    function findOne(address _wallet) public view returns (Verifier) {
        return verifierMap[_wallet];
    }
}
