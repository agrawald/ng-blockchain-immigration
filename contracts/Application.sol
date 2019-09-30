pragma solidity ^0.5.8;

import "./Owned.sol";

contract Application is Owned {
    address[] public linked_artifacts;
    bool public is_approved;
    address public visa_details;
    address applicant;

    // constructors
    constructor(address _visa, address[] memory _artifacts) public {
        owner = msg.sender;
        visa_details = _visa;
        linked_artifacts = _artifacts;
        applicant = msg.sender;
    }

    function depositFee(uint _fee) public payable {
        require(_fee == msg.value, "Fee is not equal to amount provided.");
    }

    function addArtifact(address _artifact) public onlyByOwner {
        linked_artifacts.push(_artifact) - 1;
    }

    function getArtifacts() public view returns (address[] memory) {
        return linked_artifacts;
    }

    function decision(bool _decision) public payable {
        is_approved = _decision;
        msg.sender.transfer(address(this).balance);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function withdraw() public onlyByOwner {
        selfdestruct(owner);
    }
}

