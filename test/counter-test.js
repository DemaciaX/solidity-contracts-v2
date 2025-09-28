const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter contract", function () {
  it("Should increment and decrement properly", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    await counter.increment();
    expect(await counter.count()).to.equal(1);

    await counter.decrement();
    expect(await counter.count()).to.equal(0);
  });
});
