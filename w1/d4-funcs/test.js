

      function multiplier(factor) {
      // console.log(factor)
      return number => number * factor;

}

let twice = multiplier(3); // factor is now the 3
console.log(twice(2))
console.log(twice(2))
console.log(twice(2))


// an example of a return function, within closures.
// In this exmaple variable x makes this a closure, the inner (anonymous) function has access to argument x via lexical scoping.
/*
function makeAdder(x) {
      return function(y) {
        return x + y;
      };
    }
var z = makeAdder(3)(4);
*/

