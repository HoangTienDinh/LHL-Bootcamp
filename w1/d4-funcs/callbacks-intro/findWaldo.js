// This is for exercise 1 - Callback Arguments
/*
const findWaldo = function(names) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      actionWhenFound();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);
*/

// This is for exercise 2 - Array forEach
const findWaldo = function(names) {
  names.forEach(function(item) {
    if (item === "Waldo") {
      actionWhenFound();
    }
  });
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);

