# Day Three

## Lecture

`let primitivea = 8;` 

`let primitiveb = prmitivea;`

`console.log('primitivea will be', primitivea) // 8`

`console.log('primitiveb will be', primitiveb) // 8`

`primitivea = 10;`

`console.log('primitivea will be', primitivea) // 10`

`console.log('primitiveb will be', primitiveb) // 8`

**This exmaple shows that primitiveb is just a copy of primitivea, it doesn't directly point to it**


*this is to show the difference between primitive types and non primitives (they carry properties, such as arrays, objects and functions)*

`let array = [1, 2, 3, 4];`

`let reference = array;`

`console.log('array will be', array) // [1, 2, 3, 4]`

`console.log('reference will be', reference) // [1, 2, 3, 4]`

`array.push(10);`

`console.log('array will be', array) // [1, 2, 3, 4, 10]`

`console.log('reference will be', reference) // [1, 2, 3, 4, 10]`



### Six Primitive Types in Javascript
* undefined
* null
* boolean
* string
* number
* symbol

### Objects Are Not Primitives

Objects have properties, which include arrays and functions.

### Conclusion

This reading quickly introduces you to the concept of primitive data types and their separation from objects.  Objects are used to define more complex data types (such as arrays, dats, key-value pairs, and so on). https://web.compass.lighthouselabs.ca/ea6df177-5ab1-4987-87f0-fa7753ffe65e to read more.


### Objects - Basic Concepts

Objects have a literal syntax using braces {}.  Here is an empty object literal assigned to a variable:

`const emptyObject = {};`

