// function countEvenToTwelve(number) {
  if (number <= 12) { // Recursive Case
    console.log(number);
    // The function will call itself again and get closer to the base case
     countEvenToTwelve(number+2);
  }
  // Base case, do nothing when number > 12
}
 countEvenToTwelve(0);

//  function countUpFrom(number) {
//    if (number >= 0){
//   console.log(number);
//   countUpFrom(number-1);
//  }
// }
// countUpFrom(25);