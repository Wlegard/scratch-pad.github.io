// #!/usr/bin/env node

'use strict';

const { mapValues } = require("lodash");

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
     /*
    I: given is an input value
    O: return true if the value is an Array, false if otherwise.
    C: use method array.isArray()
    E:N/A
    */
   // return  true if the value is and array and false otherswise using array.isArray() method
    return Array.isArray(value);
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    /*
    I: given is an input value
    O: return true if is either an Object intended as a collection, false if otherwise.
    C: decipher if a value is an Object, but not null, not an Array, not a Date - all of these will return 'object' if used 
 with typeof.
    E:N/A
    */
    //return true if is either an Object intended as a collection, false if otherwise.
    return typeof value === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date);    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    /*
    I: given is an input value
    O: return true if is either an Array or an an Object intended as a collection, false if otherwise.
    C: Similar to isObject, but we must return true if the value is an Array.
    E:N/A
    */
    //return true if is either an Array or an an Object intended as a collection, false if otherwise.
    return Array.isArray(value) || (typeof value === 'object' && value !== null && !(value instanceof Date));

    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE /?
    /*
    I: given is an input value
    O: return the type of the value as a String. Types are one of: "string","array", "object", "undefined", "number", "boolean", "null", "function", "date"
    C: strictly compare values to type of
    E:N/A
    */
   // create if, if else if statement
    if(typeof value === "string"){
        return "string";
    }else if(Array.isArray(value)){
        return "array";
    }else if (typeof value === "object" && value !== null){
        if (value instanceof Date) {
            return "date";
        }else {
            return "object";
            }
    }else if(typeof value === "undefined"){
    return "udefined";
    }else if (typeof value === "number"){
    return "number";
    }else if (typeof value === "boolean"){
    return "boolean";
    }else if(value === null){
        return "null";
    
    }else if(typeof value === "function"){
        return "function";
    }else{
    return "unknown";
    }


    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}