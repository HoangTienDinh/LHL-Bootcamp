let loopyLighthouse = function (range, multiples, words) {
  let displayLoop = "";
  for (let x = range[0]; x <= range[1]; x++) {
    displayLoop += (x % multiples[0] === 0 ? (x % multiples[1] === 0 ? (words[0] + words[1]) : words[0]) : (x % multiples[1] === 0 ? words[1] : x)) + "\n";
  }
  return displayLoop;
}

console.log(loopyLighthouse([0, 100], [2, 9], ["foo", "bar"]));