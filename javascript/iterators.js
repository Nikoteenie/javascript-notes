//ITERATORS (Built in JS array methods)

// .forEach (execute same ode for each element in an array)

const groceries = ['sugar', 'salt', 'cranberries', 'walnut'] 
groceries.forEach(function (groceryItems) {
console.log('-' + groceryItems); // callback function
})
//adds - in front of each string listed in groceries

/*
.forEach takes an argument of the callback function
.forEach() loops through the array and executes a callback
for each element
return .forEach() is always undefined */

//other Examples 

//using arrow
groceries.forEach(groceryItem => console.log('*' + groceryItem))

//define the function before its used as callback
function printGrocery(element) {
  console.log(element)
}
groceries.forEach(printGrocery)
///////////////////////////////////////////////////////////////

/* .map()
similar to .forEach() but prints 
(although used in different circumstances)
manipulates and returns new array
calls in an array, takes an argument of a 
callback function and returns a new array
*/

const numbers = [1,2,3,4,5];
const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // [1,2,3,4,5] original array unaffected
console.log(bigNumbers); // [10,20,30,30,50] 

/* 
numbers = array of numbers
bigNumbers = stores return value of .map() and numbers
numbers.map() iterates through each number and passes into the callback
return number * 10 will execute on each number in numbers; saves the value 
and multiplies by 10 to new array
*/

///////////////////////////////////////////////////////////////

/* .filter()
returns an array of elements after filtering out certain elements 
from original array.
should return true/false
when callback function returns true it is added to the new array
 */

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']
const shortWords = words.filter(word => {
  return word.length < 6;
})

console.log(words) // unaffected array
console.log(shortWords) // array missing 'pillow' because its is 6 characters long

/*
callback function with parameters words
word.length < 6 condition in callback
any word from words with fewer than 6 characters is added to shortWords
*/
///////////////////////////////////////////////////////////////

/* .findIndex()
finds location of an element in an array
 */

const num = [123, 25, 78, 5, 9]
const lessThan10 = num.findIndex (
  num => {
    return num < 10;
  }
)

console.log(lessThan10) //3

/*
returns Index of 1st elements that is true
if there is not an element that satisfies the call back it returns -1
*/

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant"; //7
});
console.log(foundAnimal)

const startsWithS = animals.findIndex((animal) => {
  return animal[0] === "s";
});

console.log(startsWithS); //3
///////////////////////////////////////////////////////////////

/* .reduce()
returns single value after iterating through
the array; reducing the array
 */

const theNumbers = [1,2,4,10]
const theSum = theNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(theSum) // 17 

/*
value of accumulator plus currentValue as we iterate thru them 
--------------------------------------------
Iteration  accumulator  currentValue  Return
--------------------------------------------
  First       1             2          3
  --------------------------------------------
  Second      3             4          7
  --------------------------------------------
  Third       7            10          17  
  --------------------------------------------

  accumulator starts with the first element in num
  currentValue = starts as a second element 

  as reduce iterates through an array the return value of the 
  callback becomes the accumulator value for the next iteration.
  
  currentValue takes the value of the current element in the looping process.
  */

  /*
   .reduce can also have a second parameter to set 
  the value of the initial accumulator
  (1st argument is the call back function)
  */

const aNumber = [1, 2, 4, 10];
 
const summedNums = aNumber.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117

/*
--------------------------------------------
Iteration  accumulator  currentValue  Return
--------------------------------------------
  First       100           1         101
  --------------------------------------------
  Second      101           2         103
  --------------------------------------------
  Third       103           4         107  
  --------------------------------------------
  Fourth      107           10        117  
  --------------------------------------------
*/
