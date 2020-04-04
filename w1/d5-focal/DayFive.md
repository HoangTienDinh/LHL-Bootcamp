# THE TROUBLESHOOTING GUIDE

Have I...

...pseudo-coded the solution?

...googled the error message I am getting?

...actually READ the error message?

...double-checked my syntax?

...linted my code?

...pair programmed or gotten a peer to code review?

...rubber-ducked the problem?

### RECURSION

Any problem that you can solve with a for loop, you can solve with recursion, and vice versa.

Let's take the same exercise from earlier: counting all even numbers from 0 to 12.
```let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
```
This is what that problem would look like using recursion instead of a for loop.
```1.| function countEvenToTwelve(number) {
2.|   if (number <= 12) {
3.|     console.log(number);
4.|     countEvenToTwelve(number+2);
5.|   }
6.| }
7.| countEvenToTwelve(0);
```

recursive function is a function of a function!!!
Does that make sense

can be written as such

function thisFunction(argument1) {
  console.log(argument1)
  thisFunction(argument1 + 1); <=================== THIS RIGHT HERE IS THE RECURSIVE PART
  }


**Recursion** is a tool you can use as an alternative to traditional iteration using for and while loops.

* Every recursive function must have a base case and a recursive case.
* Each recursive call should break down the curent problem into a smaller, simpler one.
* The recursive calls must eventually reach the smallest version of the problem, the base.
* The base case is when the problem can be solved without further recursion.


```// function countEvenToTwelve(number) {
  if (number <= 12) { // Recursive Case
    console.log(number);
    // The function will call itself again and get closer to the base case
     countEvenToTwelve(number+2);
  }
  // Base case, do nothing when number > 12
}
 countEvenToTwelve(0);```



 In some functional languages, tail-call optimization can also be achieved using continuation-passing style (CPS) — a.k.a callbacks.