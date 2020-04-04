let repeatNumbers = function(data) {
  let display = "";
  for (let x = 0; x < data.length; x++){ //Loops through the number of arrays in data.
    for (let y = 0; y < data[x][1]; y++) { //Loops through the x indexed array, with length of data[1].
      display += data[x][0]; //Adds the data[0] to display, of array data[x].
      }
    if (x < data.length - 1) { //Allows for a comma after the appropriate array.
      display += ", ";
      }
  }  
  return display;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));