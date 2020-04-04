const multiplicationTable = function(maxValue) {
  let multiplications = "";
  for (let x = 1;  x <= maxValue; x++) { // starting at x=1 we loop until maxValue.  This is for all the available arrays we will create.
    for (let y = 1; y <= maxValue; y++) {
      multiplications += (y * x) + " "; // creates the product for each loop of y, until maxValue is met.
    }
    multiplications += "\n"; // returns a new line after each looped array of x
  }
  return multiplications;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));https://gist.github.com/HoHoHoang/d6af09b0f2c9973189242f969e81b58a