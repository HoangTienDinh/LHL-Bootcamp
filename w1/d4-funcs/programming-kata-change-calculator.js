let calculateChange = function(total, cash) {
  let change = cash - total;
  let totalChange = {};

  while (change > 0) {
    if (change >= 2000) {
      totalChange['twentyDollars'] = totalChange['twentyDollars'] || 0; // A way to add an object{key: value}, if key !exist it will add key with value
      totalChange['twentyDollars'] += 1;
      change -= 2000;
    } else if (change >= 1000) {
      totalChange['tenDollars'] = (totalChange['tenDollars'] || 0) + 1; // if totalChange['tenDollars'] has a value, that is the value + 1 || if no value it is now this, which in this case is 0.
      change -= 1000;
    } else if (change >= 500) {
      totalChange['fiveDollars'] = (totalChange['fiveDollars'] || 0) + 1;
      change -= 500;
    } else if (change >= 200) {
      totalChange['twoDollars'] = (totalChange['twoDollars'] || 0) + 1;
      change -= 200;
    } else if (change >= 100) {
      totalChange['oneDollar'] = (totalChange['oneDollar'] || 0) + 1;
      change -= 100;
    } else if (change >= 25) {
      totalChange['quarter'] = (totalChange['quarter'] || 0) + 1;
      change -= 25;
    } else if (change >= 10) {
      totalChange['dime'] = (totalChange['dime'] || 0) + 1;
      change -= 10;
    } else if (change >= 5) {
      totalChange['nickel'] = (totalChange['nickel'] || 0) + 1;
      change -= 5;
    } else if (change >= 1) {
      totalChange['penny'] = (totalChange['penny'] || 0) + 1;
      change -= 1;
    }
  }
  return totalChange;
};

console.log(calculateChange(999, 2000));
console.log(calculateChange(2000, 6000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(1900, 2000));