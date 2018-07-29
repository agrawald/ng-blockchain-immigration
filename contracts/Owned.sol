pragma solidity ^0.4.21;

contract Owned {
    address public owner;

    // modifiers
    modifier onlyByOwner {
        if (msg.sender != owner) revert();
        _;
    }
}
