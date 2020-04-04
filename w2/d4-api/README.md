# Day 4 PROMISES

promisese can be declared

``` new Promise((resolve, reject) => {
let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  if (a == 2) {
    resolve("Success (or whatever message you want)")
  } else {
    reject("Failed (or whatever message you want)")
  }
})

p.then((message) => {
  console.log('This is in the then ' + message) // then is being called if resolve is success.
}).catch((message) => {
  console.log('This is in the catch ' + message)  // catch is being called if reject is failed.
})
```
 Promises are really great when you need to do something that is going to take a long time in the background, such as downloading an image from a different server. and you just want to do something after its complete, instead of making everything else wait for it.

Promise.all will return all the results from within the array in order,
  Promise.race will return results in the order of fastest.


Promise.all([

  promiseOne,

  promiseTwo,

  promiseThree

])


the .then will call the action for resolves
the .catch will call the action for rejects

There are 4 static methods in Promise class:
* Promise.resolve
* Promise.reject
* Promise.all
* Promise.race

gen.next will call a promise, but pause the rest of them until it is called again
gen.next

gen.next

gen.next



# Lecture

watch the how js works video from the weekend (maybe a few times)

