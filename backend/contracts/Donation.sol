// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Donation {

    struct CreatorInfo {
       string username;
       string profilePix;
       address payable walletAddress;
       string userbio;
       uint donationsReceived;
       bool isExist;
       string networkOption;
    }

    event CreatorEvent (
        string username,
       address payable walletAddress,
       string profilePix,
       string userbio,
       uint donationsReceived,
       string networkOption
    );
    
    // Support struct.
    struct Supporter {
        address from;
        uint256 timestamp;
        string message;
    }

    // Event to emit when a SupporterEvent is created.
    event SupporterEvent(
        address indexed from,
        uint256 timestamp,
        string message
    );

    // Event to emit 

    // payable address can receive ether
    address payable public owner;

    // payable constructor can receive ether. Assigning the contract deployer as the owner
    constructor() payable {
        owner = payable(msg.sender);
    }

    mapping(address => CreatorInfo) creators;
    mapping(string => CreatorInfo) creatorMap;


    // List of all supporters.
    Supporter[] supporters;
    CreatorInfo[] creatorList;

    // custom error
    error CreatorAlreadyExist(string message);


    /**
     * @dev send tip to a creator (sends an ETH tip and leaves a memo)
     * @param _message a nice message from the supporter
     */
    function sendTip(string memory _message, uint _index) public payable {
        creatorList[_index].donationsReceived += msg.value;
        // Must accept more than 0 ETH for a coffee.
        require(msg.value > 0, "Insufficient balance!");

        // Add the support to storage!
        supporters.push(Supporter(
            msg.sender,
            block.timestamp,
            _message
        ));

        // Emit a Supporter event with details about the support.
        emit SupporterEvent(
            msg.sender,
            block.timestamp,
            _message
        );
    }

     /**
     * @dev fetches all stored supporters
     */
    function getSupporters() public view returns (uint256) {
        return supporters.length;
    }

    // Get supporter info
     function getSupportInfo(uint index) public view returns (address _from, uint256 _timestamp, string memory _message){
        Supporter storage supporterDetail  = supporters[index];
        return (supporterDetail.from, supporterDetail.timestamp, supporterDetail.message);
    }

    // function to create new user account
    function setCreatorDetail(string memory username, string memory profilePix, string memory userbio, string memory networkOption) public { 
        uint _donationsReceived;
        /**
        *@dev require statment to block multiple entry
        */
        
        // require(creators[msg.sender].isExist==false,"Creators detail already registered");
        // require(creatorMap[username].isExist == false,  "username not available, choose a different name");

        if(creators[msg.sender].isExist != false){
            revert CreatorAlreadyExist({message: "Account already exist"});
        }else if(creatorMap[username].isExist != false){
            revert CreatorAlreadyExist({message: "Username already exist"});
        }else{
            creatorList.push(creators[msg.sender] = CreatorInfo(username, profilePix, payable(msg.sender), userbio, _donationsReceived, true, networkOption));
            creatorList.push(creatorMap[username] = CreatorInfo(username, profilePix, payable(msg.sender), userbio, _donationsReceived, true, networkOption));
        }

        // emit a Creator event
        emit CreatorEvent (
        username,
        payable(msg.sender),
        profilePix,
        userbio,
       _donationsReceived,
       networkOption
    );
    }

    // Return the entire list of creators
    function getCreatorList() public view returns (CreatorInfo[] memory) {
        return creatorList;
    }

    // Get a single creator by id
    function getCreatorObj(uint _index) public view returns (CreatorInfo memory) {
         return creatorList[_index];
    }

    // Return the entire list of creators
    function getSupporterList() public view returns (Supporter[] memory) {
        return supporters;
    }

    // get a single supporter by id
     function getSupporterObj(uint _index) public view returns (Supporter memory) {
         return supporters[_index];
    }

    // function to get all creators
    function getAllCreators() public view returns (uint){
        return creatorList.length;
    }

    // function to get creator info
    function getCreatorInfo(uint index) public view returns (string memory,  string memory, address, string memory, uint, string memory){
        CreatorInfo storage creatorDetail  = creatorList[index];
        return (creatorDetail.username, creatorDetail.profilePix, creatorDetail.walletAddress, creatorDetail.userbio, creatorDetail.donationsReceived, creatorDetail.networkOption);
    }

    // function to get creator balance
    function getCreatorBal (uint index) public view returns (uint){
        CreatorInfo storage creatorDetail = creatorList[index];
        uint creatorBal = creatorDetail.donationsReceived;
        return creatorBal;
    }

    // Creator withdraw function. This function can be called by the creator
    function creatorWithdrawTip(uint index, uint amount, address payable receipient) public{
        CreatorInfo storage creatorDetail  =  creatorList[index];
        uint creatorBal = creatorDetail.donationsReceived;    
        address payable creatorAddress = creatorDetail.walletAddress;
        creatorList[index].donationsReceived -= amount;
        // check to ensure the amount to be withdrawn is not more than the creator balance
        require(amount <= creatorBal, "Insufficient bal");

        // Check to ensure the caller of the function is the creator
        require(msg.sender == creatorAddress, "You are not the creator");

        // // send input ether amount to creator
        // Note that "receipient" is declared as payable
        (bool success, ) = receipient.call{value: amount}("");
        require(success, "Failed to send Ether");  
    }

    //  function to withdraw all ether from the contract
    function contractOwnerWithdraw() public {
        uint amount = address(this).balance;
        
        // send all ether to owner
        (bool success, ) = owner.call{value : amount}("");
        require(success, "Failed to send ether");
    }

    // function to get contract balance
    function contractBal() public view returns(uint){
       return address(this).balance;
    }
}