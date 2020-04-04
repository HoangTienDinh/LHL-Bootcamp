const findWaldo = function(names) {
  names.forEach((item, index) => {
    if (item === "Waldo") {
      console.log("Waldo is located at:", index);
    }
  });
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);