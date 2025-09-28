const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hello contract", function () {
  it("Should return the initial greeting", async function () {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();
    await hello.deployed();

    expect(await hello.greet()).to.equal("Hello, Blockchain!");
  });

  it("Should update the greeting", async function () {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();
    await hello.deployed();

    await hello.setGreeting("Hi, Ethereum!");
    expect(await hello.greet()).to.equal("Hi, Ethereum!");
  });
});
