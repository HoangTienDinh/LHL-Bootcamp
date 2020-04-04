var chai = require('chai')
var assert = chai.assert;
let addClass = require ('./className')


describe('addClass', function() {
  it('should add class to element', function() {
    var element = { className: '' };

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

  it('should not add a class which already exists', function() {
    var element = { className: 'exists' };
  
    addClass(element, 'exists');
  
    var numClasses = element.className.split(' ').length;
    assert.equal(numClasses, 1);
  });

  it('should append new class after existing one', function() {
    var element = { className: 'exists' };
  
    addClass(element, 'new-class');
  
    var classes = element.className.split(' ');
    assert.equal(classes[1], 'new-class');
  });
});

// function addClass(el, newClass) {
//   if(el.className.indexOf(newClass) !== -1) {
//     return;
//   }

//   if(el.className !== '') {
//     //ensure class names are separated by a space
//     newClass = ' ' + newClass;
//   }

//   el.className += newClass;
// }



// test using `mocha` in the CLI terminal.
