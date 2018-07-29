pragma solidity ^0.4.21;

import "./Owned.sol";
import "./Application.sol";

contract UserApplications is Owned {
    address[] all_applications;
    mapping(address => address[]) user_applications;

    function UserApplications() public {
        owner = msg.sender;
    }

    function createApplication(address _visa, address[] _artifacts) public {
        address application = new Application(_visa, _artifacts);
        all_applications.push(application) - 1;
        user_applications[msg.sender].push(application) - 1;
    }

    function findAllApplications() public constant onlyByOwner returns (address[]) {
        return all_applications;
    }

    function findUserApplications(address _user) constant public returns (address[]){
        return user_applications[_user];
    }
}

