pragma solidity ^0.5.8;

import "./Owned.sol";
import "./Application.sol";

contract UserApplications is Owned {
    Application[] all_applications;
    mapping(address => Application[]) user_applications;

    constructor() public {
        owner = msg.sender;
    }

    function createApplication(address _visa, address[] memory _artifacts) public {
        Application application = new Application(_visa, _artifacts);
        all_applications.push(application) - 1;
        user_applications[msg.sender].push(application) - 1;
    }

    function findAllApplications() public view onlyByOwner returns (Application[] memory) {
        return all_applications;
    }

    function findUserApplications(address _user) public view returns (Application[] memory){
        return user_applications[_user];
    }
}

