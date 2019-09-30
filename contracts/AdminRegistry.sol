pragma solidity ^0.5.8;

import "./Owned.sol";

contract AdminRegistry is Owned {
    constructor() public {
        owner = msg.sender;
    }
}
