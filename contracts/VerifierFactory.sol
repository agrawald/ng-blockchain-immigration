pragma solidity ^0.4.21;

import "./Owned.sol";
import "./Verifier.sol";

contract VerifierFactory is Owned {
    mapping(address => address) verifierMap;
    address[] verifiers;

    function VerifierFactory() public {
        owner = msg.sender;
    }

    function createVerifier(bytes32 pName, address pWallet, bytes32[] pDocTypes) public {
        address verifier = new Verifier(pName, pWallet, pDocTypes);
        verifiers.push(verifier) - 1;
        verifierMap[pWallet] = verifier;
    }

    function findAll() public view returns (address[]) {
        return verifiers;
    }

    function findOne(address _wallet) public view returns (address) {
        return verifierMap[_wallet];
    }
}
