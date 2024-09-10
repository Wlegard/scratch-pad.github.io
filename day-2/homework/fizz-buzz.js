// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz(number) {
    // YOUR CODE GOES BELOW HERE //
    //create for loop to iterate through number 1 to 100( including 100) 
    for(var number = 1; number <= 100; number++){
        //if  numbers  are multiples of both three and five
if (number % 3 === 0 && number % 5 === 0){
    //print "FizzBuzz"
console.log("FizzBuzz");
// if numbers are  multiples of five
} else if( number % 5 === 0){
   // print “Buzz”
    console.log( "Buzz");
    //if numbers are multiples of three
}else if( number % 3 === 0){
    //print “Fizz” instead of the number
    console.log("Fizz")
    // prints the numbers from 1 to 100.

}else{
    console.log(number);
}

    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}