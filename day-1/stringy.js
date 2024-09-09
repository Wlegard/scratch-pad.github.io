// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
/**
 * I: function takes in string as input
 * O: return string's length
 * C: none
 * E:none
 *
 */


function length(string) {
    // YOUR CODE BELOW HERE //

return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
      // YOUR CODE BELOW HERE //
    /**
 * I: function takes in string as input
 * O: return string forced to lowercase
 * C: none
 * E:none
 *
 */
return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

  /**
 * I: function takes in string as input
 * O: return string forced to lowercase
 * C: none
 * E:none
 *
 */
return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

  /**
 * I: function takes in string as input
 * O: return string force to dash case
 * C: none
 * E:none
 *
 */

return string.split(' ').join('-').toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
/**
 * I: function takes in string and char as input
 * O:  return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 * C: none
 * E:none
 *
 */
// create two new variables to make string first letter uppercase and and char uppercase
var string1 = string[0].toUpperCase();
var char1 = char.toUpperCase();
//return new string and new char strictly equal to equal true
return string1 === char1;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
/**
 * I: function takes in string and char as input
 * O:  return true if the Stringends with the character, false otherwise. The Function is case insensitive.
 * C: none
 * E:none
 *
 */

// create two new variables to make string last letter uppercase and and char uppercase
var string2 = string[string.length - 1].toUpperCase();
var char2 = char.toUpperCase();
//return new string and new char strictly equal to equal true
return string2 === char2;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
   /**
 * I: function takes in stringOne and stringTwo as input
 * O:  return the Strings concatenated into one
 * C: none
 * E:none
 *
 */
return stringOne + stringTwo;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    // return variable args joined together
return args.join('');
     
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // if string stringOne is longer
if (stringOne.length > stringTwo.length){
    //return stringOne
    return stringOne;
//stringTwo is longer 
}else{
    //return stringTwo
    return stringTwo;
}
   
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

 /**
 * I: function takes in stringOne and stringTwo as input
 * O: return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 * C: use comparison operator
 * E:none
 *
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
      // if string stringTwo is higher
if (stringTwo > stringOne){
    //return 1
    return 1;
// if stringOne is highe 
} else if(stringTwo < stringOne){
    //return -1
    return -1;
    //if stringOne and stringTo are equal 
}else{
    //return 0
    return 0;
}
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/**
 * I: function takes in stringOne and stringTwo as input
 * O: return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 * C: use comparison operator
 * E:none
 *
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

   //if stringOne is higher
    if (stringTwo < stringOne){
        //return 1
        return 1;
    //if stringTwo is higher 
    } else if(stringTwo > stringOne){
        //return -1
        return -1;
    }else{
        //stringOne and stringTwo are eqaul
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}