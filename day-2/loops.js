// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  /*
  I: function printArrayValues has array as parameter
  O: create loop to loop forward over the array
  c:print values using console.log()
  E: N/A
  */
 //create for loop to loop forward over array
  for (var i = 0; i <= array.length; i++){
    // print the values of the array to the console 
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /*
  I: function printArrayValuesInReverse has array as parameter
  O: create loop to loop backwars over the array
  c:print values using console.log()
  E: N/A
  */
 //create for loop to loop backwards over array
 for (var i = array.length - 1; i >= 0; i--){
  // print the values of the array to the console 
  console.log(array[i]);
}

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: function getObjectKeys  has object as parameter
  O: return array containing Object keys
  c:N/A
  E: N/A
  */
 // return array containing object keys=>Object.keys(obj)
  return Object.keys(object)
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
   /*
  I: function printtObjectKeys  has object as parameter
  O: print only keys to the console
  c:N/A
  E: N/A
  */
  //create for in loop
  for (var key  in object){
    // print only keys to the console
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: function  getObjectValues has object as parameter
  O: return array containing Object's values
  c:N/A
  E: N/A
  */
 // return array containing object keys=>Object.keys(obj)
  return Object.values(object)
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: function printtObjectKeys  has object as parameter
  O: create loop to loop over object and print only values to the console
  c:N/A
  E: N/A
  */
  //create for in loop
  for (var key  in object){
    // print only values to the console
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  /*
  I: function  getObjectLength has object as parameter
  O: return the number of key/value pairs stored within that Object.
  c:N/A
  E: N/A
  */

 // return number of  object keys/ value pairs in that object
 return Object.entries(object).length

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  const values = Object.values(object);
    
    // Loop through the values array in reverse order using a traditional for loop
    for (let i = values.length - 1; i >= 0; i--) {
        console.log(values[i]);
    }

  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}