pragma solidity ^0.5.8;

contract Owned {
    address payable public owner;

    // modifiers
    modifier onlyByOwner {
        if (msg.sender != owner) revert("Only owner can call this function");
        _;
    }
}
