const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter contract", function () {
  it("Should set and update message", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello!");
    await greeter.deployed();

    expect(await greeter.message()).to.equal("Hello!");
    await greeter.setMessage("Hi!");
    expect(await greeter.message()).to.equal("Hi!");
  });
});
