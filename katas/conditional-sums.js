let conditionalSum = function(values, condition) {
  let sumValues = 0;
  if (condition === "even") {
    for (let x = 0; x < values.length; x++) {
      if (values[x] % 2 === 0) {
        sumValues += values[x];
      }
    }
  } else if (condition === "odd") {
    for (let y = 0; y < values.length; y++) {
      if (values[y] % 2 !== 0) {
        sumValues += values[y];
      }
    }
  }
  return sumValues;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([123, 12, 10, 3], "odd"));
