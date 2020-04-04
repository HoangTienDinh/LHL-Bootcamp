// This is the function.
function sumItems(items) {
  let result = 0;
  for (let i = 0; i < items.length; i++) {
    if (Array.isArray(items[i])) {  // Our recursive case, if this condition is met, move on out.
      result += sumItems(items[i]) // the function will callitself.
    } else {
      result += items[i];  //This would be our base case, if the function above meets the condtional statement in our recursive case do this.
    }
  }
  return result;
}

module.exports = sumItems;


console.log(sumItems([1, 2, 3, 4, 5]))
console.log(sumItems([[1, 2, [[3], 4]], 5, []]))
console.log(sumItems([[[[[[[[[[[[[[1]]]]]]]]]]]]]]))





// Below is just case example of a simple recursive statement

// function countEvenToTwelve(number) {
  if (number <= 12) { // Recursive Case
    console.log(number);
    // The function will call itself again and get closer to the base case
     countEvenToTwelve(number+2);
  }
  // Base case, do nothing when number > 12
}
 countEvenToTwelve(0);