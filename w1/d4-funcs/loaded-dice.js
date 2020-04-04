function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let roll = 0;
  let theRoll = list[roll];

  return function() {
    theRoll = list[roll]
    roll += 1
    return theRoll
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
