// Write a function that generates all possible combinations of 1 and 0 for n bits. For example, if the function receives 2 as the number of bits, it should produce the following 4 combinations: 00,01,10,11. You cannot use any mathematical operators.

// creating bit patterns, using binary 1' and 0'
// if the parament if 2, these combinations will all be displayed 00, 01, 10, 11
// so we want to output all possible patterns for whichever parameter is in place
// if 3 then 000, 001, 011, 010, etc 


// let bitPattern = function(num) {
//   let bitArray = []
//   for (let x = 0; x < num; x++) {
//     if (x === num) {
//       finish
//     } else {
      
//     }
//   }
// }

function binary(i) {
  if (i === 0) {
      console.log(a.join(''));
  } else {
      a[i - 1] = 0;
      binary(i - 1);
      a[i - 1] = 1;
      binary(i - 1);
  }
}

console.log(binary(3))