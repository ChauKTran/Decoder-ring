// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    if (
      !alphabet ||
      alphabet.length !== 26 ||
      [...new Set(alphabet)].length !== 26
    ) {
      return false;
    }

    const fromAlphabet = encode ? standardAlphabet : alphabet;
    const toAlphabet = encode ? alphabet : standardAlphabet;

    let result = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      if (char === " ") {
        result += " ";
      } else {
        const index = fromAlphabet.indexOf(char);
        if (index === -1) {
          result += char;
        } else {
          result += toAlphabet[index];
        }
      }
    }

    return result;
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
