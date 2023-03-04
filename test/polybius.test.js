// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");
describe("polybius()", () => {
  describe("encoding", () => {
    it("should encode a string of letters to a string of numbers", () => {
      expect(polybius("thinkful")).to.eql("4432423352125413");
      expect(polybius("Hello world")).to.eql("3251131343 2543241341");
      expect(polybius("I love JavaScript")).to.eql(
        "42 13431551 42111511343124425344"
      );
    });
  });
  describe("decoding", () => {
    it("return the string of letters from the string of number", () => {
      expect(polybius("4432423352125413", false)).to.eql("th(i/j)nkful");
      expect(polybius("3251131343 2543241341", false)).to.eql("hello world");
    });
  });
});
