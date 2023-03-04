// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  let polybiusSquare = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  function polybius(input, encode = true) {
    if (encode) {
      const result = input
        .toLowerCase()
        .split("")
        .map((letter) => {
          if (letter == "i" || letter == "j") {
            return 42;
          } else if (letter == " ") {
            return letter;
          } else {
            return polybiusSquare[letter];
          }
        });
      return result.join("");
    } else {
      let inputArray = input.split("");
      let result = [];
      if (input.replace(" ", "").length % 2) return false;
      for (let i = 0; i < inputArray.length; i += 2) {
        if (`${input[i]}${input[i + 1]}` == 42) {
          result.push("(i/j)");
        } else if (input[i] == " ") {
          result.push(input[i]);
          i--;
        } else {
          result.push(
            Object.keys(polybiusSquare).find(
              (key) => polybiusSquare[key] == `${input[i]}${input[i + 1]}`
            )
          );
        }
      }
      return result.join("");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
