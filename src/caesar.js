// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  function caesar(input, shift, encode = true) {
    if (shift == 0 || shift < -25 || shift > 25 || !input || !shift)
      return false;
    if (!encode) shift *= -1;
    let inputArray = input.toLowerCase().split("");
    let outputArray = [];
    //loop thought the array, transfer input to the number , keep symbols and space in input
    for (let i = 0; i < input.length; i++) {
      //if it's a symbol or space, push it to outputArray
      if (!alphabetArray.includes(inputArray[i])) {
        outputArray.push(inputArray[i]);
        //if it's a letter, transfer it to number + shift, then push it in outputArray by using the index of alphabetArray;
      } else {
        let letterToNumber = alphabetArray.indexOf(inputArray[i]) + shift;
        letterToNumber = (letterToNumber + 26) % 26; // check the number < 0 and > 25
        outputArray.push(alphabetArray[letterToNumber]);
      }
    }
    return outputArray.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
