const urlEncode = function(text) {
  let newText = text.trim(); // .trim() removes whitespace from both sides of a string.
  let newStr = "";
  for (let x = 0; x < newText.length; x++) {
    if (newText[x] === " ") {
      newStr += "%20";
    } else {
      newStr += newText[x];
    }
  }
  return newStr;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));