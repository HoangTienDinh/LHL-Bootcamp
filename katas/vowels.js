let numberOfVowels = function(data) {
  let count = "";
  for (let x = 0; x < data.length; x++) {
    if (data[x] === "a"|| data[x] === "e" || data[x] ===  "i" || data[x] ===  "o" || data[x] ===  "u") {
      count ++;
    }
  }
  return count
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeio2194ujkld;aflsanvzliylhku"));