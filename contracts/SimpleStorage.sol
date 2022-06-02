//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract SimpleStorage {
    uint256 public number;

    function SetNumber(uint256 newNumber) public returns (uint256) {
        number = newNumber;
        console.log("Set number to :", number);
        return number;
    }       
}

