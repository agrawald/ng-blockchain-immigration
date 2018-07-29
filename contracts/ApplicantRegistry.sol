pragma solidity ^0.4.21;

import "./Owned.sol";

contract ApplicantRegistry is Owned {
    address[] public applicants;
    mapping(address => bool) public applicant_status;
    uint public applicantCount;

    function ApplicantRegistry() public {
        owner = msg.sender;
    }

    function addApplicant(address _newApplicant) public {
        applicants.push(_newApplicant) - 1;
        applicant_status[_newApplicant] = true;
        applicantCount++;
    }

    function changeStatus(address _applicant, bool _active) public onlyByOwner {
        applicant_status[_applicant] = _active;
    }

    function getApplicantStatus(address _applicant) public view returns (bool) {
        return applicant_status[_applicant];
    }

    function getApplicants() public view returns (address[]) {
        return applicants;
    }
}
