// Since the kata' have been made to practice loops and understanding them. I figured out how to do them in two different ways.  Which is I guess what I need to learn on my own, how to code in different ways.
let camelCase = function(input) {
  let output = ''; // create an empty string to call back and put in your results.
  for (let x = 0; x < input.length; x++) {
    if (input.charAt(x) == " ") {
      output += input.charAt(x + 1).toUpperCase(); // a stirng is now being inserted into our output variable, skipping each \s
      x++; // in the loop, we use this to skip the \s when a \s is found, so there is no need for any other code.
    } else {
      output += input.charAt(x);  // if the condition is not met, it will concatenate the string at x and add on, so input.charAt(0) + input.charAt(1) and so on until a \s is found.
    }
  }
  return output;  // returns the for loop once it is finished.
};

console.log(camelCase("this is a string"));
console.log(camelCase(" loopy lighthouse "));
console.log(camelCase("supercalifragalisticexpialidocious"));




let camelCase1 = function(input) {
  return input.split(' ').map(function(word, index) { // .split() breaks the input into an array takeing the \s as a paramenter, .map() creates a new array with given parameters.
    if (index == 0) { // if the index is 0 (first parameter in new arry), make the word all lower case.
      return word.toLowerCase();
    } else {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Tells the word, with character starting at parameter 0, to become upper case. Then add the word sliced at parameter 1 to change the rest to uppercase.
    }
  }).join(''); // joins all the arrays, taking in a blank parameter to concatenate all the string at the end of the function, then it is returned.
};

console.log(camelCase1("this is a string"));
console.log(camelCase1(" loopy lighthouse "));
console.log(camelCase1("supercalifragalisticexpialidocious"));