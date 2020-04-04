const countdownGenerator = function (count) {
  let newCount = count
  let newText = ""
  
  return function() {

    if (newCount >= 1) {
      newText = "T-minus " + newCount + "..."
      newCount -= 1
      return newText
    } else if (newCount === 0) {
      newText = "Blast Off!"
      newCount -= 1
      return newText
    } else if (newCount < 0) {
      newText = "Rockets already gone, bub!"
      newCount -= 1
      return newText
    }

  }
};

const countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown());
console.log(countdown());
console.log(countdown());