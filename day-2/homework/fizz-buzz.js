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
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
/* 
I: function fizzBizz that prints 1 to 100
O: multiples of three print “Fizz” instead of the number, multiples of five print “Buzz", multiples of both three and five print “FizzBuzz”, all other numbers will print the numbers
C:N/A
E: N/A
*/
// create a for loop for numbers 1 to 100
for (var i = 1; i <= 100; i++){
     //if numbers which are multiples of both three and five 
     if(i % 3 === 0 && i % 5 === 0) {
        //print “FizzBuzz”
        console.log("FizzBuzz");
    // if numbers are multiples of three
}else if( i % 3 === 0){
     //print “Fizz” 
        console.log("Fizz");
        // if numbers are multiples of five
    }else if (i % 5 === 0){
        // print “Buzz”.
        console.log("Buzz");
        // if numbers are not multiples of 3,5, and 3 and 5
     
    }else{
    // print the numbers 
        console.log(i);
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