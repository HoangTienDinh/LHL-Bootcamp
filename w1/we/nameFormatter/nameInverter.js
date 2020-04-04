const nameInverter = function(name) {
  if (name === undefined) {
    function throwError() {
      throw "Error!";
    }
    return throwError();
    // Need to write the throw error as a function
  }
  
  let honorifics = ["Mr.", "Mrs.", "Ms.", "Dr."];
  let nameArray = name.trim().split(" ");

  if (name === '') {
    return '';
  }

  if (nameArray.length === 2 && !honorifics.includes(nameArray[0])) {
    return nameArray.reverse().join(", ");
  }

  for (let x = 0; x < honorifics.length; x++) {
    if (name.trim() === honorifics[x] && nameArray.length === 1) {
      return '';
    }
  }

  for (let x = 0; x < honorifics.length; x++) {
    if (nameArray.length[0] === honorifics[x] && nameArray.length > 2) {
      return honorifics[x] + " " + nameArray.length[1];
    }
  }

  if (nameArray.length === 3 && honorifics.includes(nameArray[0])) {
    return nameArray[0] + " " + nameArray[2] + ", " + nameArray[1];
  }

  return name.trim();
  
};



console.log(nameInverter(undefined));

module.exports = nameInverter;