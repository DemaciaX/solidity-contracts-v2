// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Hello {
    string private greeting;

    constructor() {
        greeting = "Hello, Blockchain!";
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
