// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");
describe("Caesar()", () => {
  it("should return false if shift = 0 or < -25 or > 25", () => {
    expect(caesar("thinkful", 0, true)).to.eql(false);
    expect(caesar("thinkful", 99)).to.eql(false);
    expect(caesar("thinkful", -50, false)).to.eql(false);
  });

  it("should return false if there is no input or no shift", () => {
    expect(caesar()).to.eql(false);
    expect(caesar("thinkful")).to.eql(false);
  });

  it("should return the new string after transfer to number + shift", () => {
    expect(caesar("thinkful", 3, true)).to.eql("wklqnixo");
    expect(caesar("thinkful", -3)).to.eql("qefkhcri");
    expect(caesar("wklqnixo", 3, false)).to.eql("thinkful");
    expect(caesar("This is a secret message!", 8)).to.eql(
      "bpqa qa i amkzmb umaaiom!"
    );
    expect(caesar("BPQA Qa i aMkZMb umAAiOm!", 8, false)).to.eql(
      "this is a secret message!"
    );
  });
});
