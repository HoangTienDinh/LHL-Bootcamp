const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = function(arr0, arr1) {
  for (let x = 0; x < arr0.length; x++) {
    if (arr0[x] !== arr1[x] || arr0.length !== arr1.length) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2){
  let objA = Object.keys(object1);
  let objB = Object.keys(object2);
  
  if (eqArrays(objA === objB) && objA.length === objB.length) {
    for(let key of objA ){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if (!eqArrays(object1[key],object2[key])){
         return false;       
        }
      }
    }
    return true;
  }
  return false;
};


// const ab = { a: "1", b: "2", d: "3", x: "4" };
// const ba = { a: "1", b: "2", d: "3", x: "4" };
// assertEqual(eqObjects(ab, ba), true); // => true


// const abc = { a: "1", b: "2", d: "3", y: "5" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const xd = {x: "1", d: ["1", "2"]};
// const xy = {x: "1", d: ["1", "2", "3"]};
// assertEqual(eqObjects(xd, xy), false);


console.log(eqArrays(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))) // => true

console.log(eqArrays(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))) // => false
console.log(eqArrays(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }))) // => false


