import { expect } from "chai";
import { ethers } from "hardhat";

describe("SimpleStorage", function () {
  it("Should return the new number once it's changed", async function () {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.deployed();
    // expect(await simpleStorage.SetNumber(7).toString()).to.equal(7);
    const setSimpleStirageTransactionTx = await simpleStorage.SetNumber(77);

    // wait until the transaction is mined
    await setSimpleStirageTransactionTx.wait(1);

    const number = await simpleStorage.number();
    expect(number).to.equal(77);
  });
});
