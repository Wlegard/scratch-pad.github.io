// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /*
    I:  function createGreaterThanFilter has one parameter called base
    O: return a Function that tests whether a given value is greater than the base
    C: N/A
    E: N/A
   */    
  return function(value) {
    return value > base;
  };
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
     /*
    I:  function createLessThanFilter has one parameter called base
    O: return a Function that tests whether a given value is less than the base
    C: N/A
    E: N/A
   */    
   
return function(value){
    return value < base;
}
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /*
    I:  function createStartsWithFilter has one parameter called startWith 
    O: return a Function that tests whether a given String starts with the startsWith character
    C: N/A
   */   
    var startsWithUpper = startsWith.toUpperCase();
    return function(string){

  var stringUpper = string[0].toUpperCase();
        return stringUpper === startsWithUpper;
}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
     /*
    I:  function createEndsWithFilter has one parameter called endstWith
    O: return a Function that tests whether a given String starts with the endsWith character
    C: N/A
   */    
    var endsWithUpper = endsWith.toUpperCase();
    return function(string){

  var stringUpper = string[string.length - 1].toUpperCase();
        return stringUpper === endsWithUpper;
}
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var modifiedStrings = [];

    for (var i = 0; i < strings.length; i++) {
        var modifiedThatString = modify(strings[i]);
        modifiedStrings.push(modifiedThatString);

    }
    return modifiedStrings
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    for (var i = 0; i < strings.length; i++) {
        if (!test(strings[i])) {
            return false; // If any string fails the test, return false
        }
    }
    return true
    
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}