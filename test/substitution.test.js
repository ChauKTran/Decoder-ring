// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");
describe("substitution()", () => {
  it("should decode a message by using the given substitution alphabet", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.eql(
      "jrufscpw"
    );
  });

  it("should work with any kind of key with unique characters", () => {
    expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.eql(
      "message"
    );
  });

  it("should preserve spaces", () => {
    expect(
      substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    ).to.eql("elp xhm xf mbymwwmfj dne");
  });
  it("should return false", () => {
    expect(substitution("yp ysiirs", "short")).to.eql(false);
    expect(substitution("nwdqoidqwoi", "abcabcabcabcabcabcabcabcyz")).to.eql(
      false
    );
  });
});
