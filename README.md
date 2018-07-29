# Blockchain Immigration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Technologies

### Frontend
 - AngularJS
 - Web3.JS
 - RxJS

### Backend
 - Solidity

## Structure

The application is divided in two main structural components

## Backend Components
The backend components is located in `contracts` folder and the migration scripts are located in `migrations` folder.

## Frontend Components
The frontend components are located in `src` folder. The test cases for the forntend are located in `test` folder and end-to-end test cases are in `e2e` folder.
In the root folder we also have some configuration files for the frontend.

## Setup

### Prerequisite
The frontend application uses following frameworks which must be installed before running the application
 - NodeJS (to install please follow https://nodejs.org/en/download/)

The backend applications, uses following softwares to be installed
 - Ganache (to install please follow http://truffleframework.com/ganache/)
 - MetaMask Chrome Extention (to install please refer https://metamask.io/)

### Install IPFS
 - Please download IPFS from https://ipfs.io/docs/install/
 - After installation, please initialize the repo using the tutorial here https://ipfs.io/docs/getting-started/
 - Before starting the IPFS Daemon, please setup CORS headers using the following commands

    > ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["example.com"]'

    > ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'

    > ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'

 For Windows please run the following commands to set up cors

    ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"example.com\"]"

    ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods "[\"PUT\", \"GET\", \"POST\"]"

    ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"

 - Please start the IPFS daemon now, and leave the terminal running
    > ipfs daemon

 - You can verify IPFS using this link http://localhost:5001/webui

### Steps to start Blockchain Immigration Web Application
 1. We must compile all the solidity sart contracts which are located in the `contracts` folder, please open the `powershell` on windows or `terminal` on linux or macos.
 2. Please execute the following command from the project root directory

    > truffle compile

 3. Once the compilation is successful, the compiled contracts JSON will be created in `build/contracts` folder
 4. Now we should deploy these contracts on Ganache
 5. Please start Ganache.
 6. You must configure MetaMask and link it with Ganache. Please refer this tutorial (http://truffleframework.com/docs/advanced/truffle-with-metamask)
 7. Once Ganache and Metamask is set, please open the `powershell` and run the following command from the root of the project

    > npm run compile-start

 8. The above command will compile and deploy smart con tracts on truffle and will start the application

 9. You can access the frontend app on http://localhost:4200

 10. The application is ready to be used.

## Application Usage

### As Immigration Department

When we deploy the contracts on Ganache, the first wallet address under Ganache will be used for Immigration Department and it will registered in the system by default.

First and foremost, we must configure the application, that is, register verfiers and create visas. This configuration can be done using the immigration department wallet address.

### As an Applicant

An applicant, must register with the system. Please click on the `Applicant` button and then click on `Register` button. Fill in all the details along with the wallet addres from Ganache.
Once register, please login and start uploading artifacts and creating new applications.

### As Verifier

A verfier, is registered using the public address by the immigration department. Once registered in the system, verifier can use the public wallet address to login.
Once verifier is logged in, they can view all the artifacts assigned to the verifier for approval.
