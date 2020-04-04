function sumDownFrom(number) {
  if (number === 1){
    return 1;
  }
  return number + sumDownFrom(number - 1)
}
console.log(sumDownFrom(10));


function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4));