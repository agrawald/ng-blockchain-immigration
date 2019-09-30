pragma solidity ^0.5.8;

import "./Owned.sol";

contract Visa is Owned {
    bytes32 public visa_name;
    bytes32 public visa_code;
    bool public is_active;

    // constructors
    constructor(bytes32 _code, bytes32 _name) public {
        owner = msg.sender;
        visa_code = _code;
        visa_name = _name;
        is_active = true;
    }

    function setCode(bytes32 _code) public onlyByOwner {
        visa_code = _code;
    }

    function setName(bytes32 _name) public onlyByOwner {
        visa_name = _name;
    }

    function setActive(bool _active) public onlyByOwner {
        is_active = _active;
    }
}
