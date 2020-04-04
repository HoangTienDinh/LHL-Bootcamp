const eqArrays = function(arr0, arr1) {
  for (let x = 0; x < arr0.length; x++) {
    if (arr0[x] !== arr1[x] || arr0.length !== arr1.length) {
      return false;
    }
  }
  return true;
};



eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true

eqArrays([[2, 3], [4]], [[2, 3], [4, 5]) // => false
eqArrays([[2, 3], [4]], [[2, 3], 4]) // => false
