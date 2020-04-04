function squareSum(numbers) {
  let sum = 0;
  let i = numbers.length;
  while (i--) 
   sum += Math.pow(numbers[i], 2);
  return sum;
}

console.log(squareSum([2,5]))