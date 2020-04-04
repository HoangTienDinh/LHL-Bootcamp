Using the .forEach()





array.forEach(function(item, index, array) {

})


array is the array that the .forEach function is referncing
function just means it is a function
within the parenthesis (item, index, array) are arguements that cn be anything

item => the item in the array
index => the index number of where it is in the array



First-class citizen (or First-class object)

An object with no restrictions on its creation, destruction, or usage

Correct, this includes the ability to be passed as an argument, returned from a function, and assigned to a variable

JavaScript functions are also Objects
functions can be assigned attributes like any other object.


### Functions that take in callbacks are referred to as Higher Order Functions.
### Higher-Order functions are any functions which operate on other functions.

What key property of lexical scope allows for Function Closures in JavaScript?

 Option 2 correct
A function closure has access to its parents' variables after the parent function has returned

Correct, lexical scoping means that the variables are not deallocated and therefore accessible after the parent function finishes executing