# Weekend work notes

## Unit Testing
Unit testing is the practice of testing small pieces of code, typically individual functions, alone and isolated. If your test uses some external resource, like the network or a database, it's not a unit test.

## Integration Testing
The testing of how parts of the system work together - the integration of the parts.

## BDD (Behavior Driven Development)

BDD encourages you to specify the behavoir of your app in terms of user stories which are broken down into scenarios that can be built and tested.

## Setting up a Directory Structure

Should put tests in a seperate directory from your main code files.  This makes it easier to structure them, for example if you want to add other types of tests in the future (such as integration tests or functional tests).

The most popular practice with JavaScript code is to have a directory called `test/` in your project's root directory.  Then, each test file is placed under `test/someModuleTest.js`.  Optionally, you can also use directories inside `test/`, but I recommend keeping things simple - you can always change it later.

## Basic Test Building Blocks
Every test case file follows the same basic pattern. First, you have a describe block:
``` 
describe('Array', function() {
  // Further code for tests goes here
});
```
`describe` is used to group individual tests.  The first parameter should indicate what we're testing - in this case, since we're going to test array functions, I've passed in the string `'Array'`.

```
describe('Array', function() {
  it('should start empty', function() {
    // Test implementation goes here
  });

  // We can have more its here
});
```
`it` is used to create the actual tests.  The first parameter to `it` shoudl provide a human-readable description of the test.

All Mocha tests are built from these same building blocks, and the follow this same basic pattern.
- First, we use describe to say what we're testing - for example, "describe how array should work".
- Then, we use a number of `it` functions to create the individual tests - each `it` should explain one specific behavior, such as "it should start empty" for our array case above.

## Writing the Test Code
Since testing an array that should start empty, we create an array and then ensure it's empty.
```
var assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];

    assert.equal(arr.length, 0);
  });
});
```
On the first line we set up the `assert` variable.  This is so we don't need to keep typing `chai.assert` everywhere.

SUT = System Under Test
Basically whatever you're testing.
