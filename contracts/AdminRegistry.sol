pragma solidity ^0.4.21;

import "./Owned.sol";

contract AdminRegistry is Owned {
    function AdminRegistry() public {
        owner = msg.sender;
    }
}
