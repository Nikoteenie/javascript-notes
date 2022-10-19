/*ARRAYS (JS way of making lists)
can store strings, numbers, booleans and ordered lists
*/

//ARRAY LITERAL: creates an array with [] it can hold same or different types of data
let myFirstArray = ["string", 10, true];
console.log(myFirstArray);

//Arrays are Zero-Indexed, positions starts at 0
let cities = ["Miami", "London", "Lisbon"];
//            ^^ 0      ^^ 1      ^^ 2
cities[0]; //access Miami
console.log(cities[0]); //prints Miami

let hello = "Hello World";
console.log(hello[6]); // prints w

// call an index that doesnt exist in array returns undefined
///////////////////////////////////////////////////////////////

//UPDATE ELEMENTS

let season = ["Winter", "Spring", "Summer", "Fall"];
season[3] = "Autumn";
console.log(season);
// (4) ['Winter', 'Spring', 'Summer', 'Autumn']
///////////////////////////////////////////////////////////////

/*ARRAY WITH LET OR CONST

let - CAN be reassigned
const - CANNOT be reassigned; yet that are MUTABLE 
(can be change contents but NOT reassign a new array/different value)
*/

//const can do this
let anExample = ["then", "here"];
anExample[0] = "now";
console.log(anExample); // ['now', 'here']
//const CANNOT do this
anExample = ["there"];
console.log(anExample); //t ['there']
///////////////////////////////////////////////////////////////

// .length (outputs length of array)
const aSentence = ["item1", "item2", "item3"];
console.log(aSentence.length); //3

/* .push() (adds to END of array)
is a function uses an array. 
Destructive Array method because it changes the initial array
 */
const theItems = ["item1", "item2", "item3"];
theItems.push("item4", "item5");
console.log(theItems); // ['item1', 'item2', 'item3', 'item4', 'item5']

// .pop() (removes last item in array)
const fewItems = ["item1", "item2", "item3"];
const removedItems = fewItems.pop(); // stored in variable removedItems to use later
console.log(fewItems); // ['item1', 'item2']
console.log(removedItems); // item3

// .shift() (removes first item)
// .unshift() (adds first item)

const groceryList = [
  "OJ",
  "bananas",
  "coffee",
  "rice",
  "pasta",
  "oil",
  "plantains",
];
console.log(groceryList.slice(1, 4));
//['bananas', 'coffee','rice'] printed the values within the indexes of 1-3

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex); // 4 (index of pasta)

// join(' ') (prints list as sentence with spaces betweeen each index)
let message = ["Hey", "there", "my", "friend"];
console.log(message.join(" ")); // Hey there my friend

// slice() grabs part of the array
console.log(message.slice(1,3))
// splice() mutates array 
/*quick tip to help remember the difference between .slice() and .splice()
....use the P in splice to help you remember that it makes a PERMANENT change to the array*/

console.log(message.splice(1, 3))

// If an array is mutated inside a function that change will maintain outside of the function as well
///////////////////////////////////////////////////////////////

//NESTED ARRAYS (an array that contains another array)

const nestedArray = [[1], [2, 3]];
console.log(nestedArray[1]); // [2, 3]
console.log(nestedArray[1][0]); // 2
