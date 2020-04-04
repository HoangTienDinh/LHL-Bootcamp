const jsonString = {"a": 1, "b": 2, "foo": "bar"};
jsonString;

const obj = JSON.parse(jsonString);
obj

delete obj.foo;
obj

JSON.stringify(obj);






Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve("Success")
  } else {
    reject("Failed")
  }
})