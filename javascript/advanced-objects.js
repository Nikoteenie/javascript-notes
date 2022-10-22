// ADVANCED OBJECTS

/* this (keyword)
references the calling object and gives access to the calling objects properties.
*/

const cat = {
  dietType: "tuna fish",
  makeSound() {
    console.log("meow");
  },
  diet() {
    console.log(this.dietType);
  },
};

cat.diet(); // tuna fish
/*
The calling object is cat 
by using this (keyword) we can access the cat object itself
and then the dietType property using dot notation
 */
cat.makeSound(); // meow
///////////////////////////////////////////////////////////////

/*ARROW FUNCTIONS 
AVOID USING WITH THIS (KEYWORD)
*/

const cat2 = {
  dietType: "tuna fish",
  makeSound() {
    console.log("meow");
  },
  diet: () => {
    console.log(this.dietType);
  },
};

cat2.diet(); // UNDEFINED
///////////////////////////////////////////////////////////////

/* PRIVACY
naming conventions that signal to other developers how to interact with properties

_ (underscore) says it should NOT be altered
*/

const myMoney = {
  _amount: "millions",
};
// signifies it is NOT intended to be manipulated

myMoney._amount = "less millions";
//yet it is possible to reassign
///////////////////////////////////////////////////////////////

/* GETTERS
methods that get and return internal properties of objects
 */

const person = {
  _firstName: "Doug",
  _lastName: "Funny",
  get fullName() {
    if (this._firstName && this._lastName) {
      return `${this._firstName} ${this._lastName}`;
    } else {
      return "Im missing part of your name friend!";
    }
  },
};
console.log(person.fullName); // Doug Funny
//calls the getter method

/*
- get keyword followed by function
- if..else conditinal to check if both _firstName & _lastName exist
- access calling object using this (keyword)
----------------------------------------------------------------
GETTERS can perform action on datat when getting property
they can return different values with the help of conditionals
we can access properties of calling object using this

!! Properties can not share the same name as the getter/setter
OR ELSE infinite call stack error
**adding underscores helps this also
*/
///////////////////////////////////////////////////////////////

/* SETTERS
reassign values of exisiting properties within an object
 */

const dougsAge = {
  _age: 50,
  set age(newAge) {
    if (typeof newAge === "number") {
      this._age = newAge;
    } else {
      console.log("Age has to be a number, duh!");
    }
  },
};
dougsAge.age = 28;
console.log(dougsAge._age); // 28 (it reassigned becasue it is a number)
dougsAge.age = "old"; // 'Age has to be a number, duh!'

dougsAge._age = "old"; // but still possible to directly reassign
console.log(dougsAge._age); // old
///////////////////////////////////////////////////////////////

/* FACTORY FUNCTIONS
create many instance of an object quickly
 */

const cartoonFactory = (firstName, faveColor, outfit, catchPhrase) => {
  return {
    firstName: firstName,
    faveColor: faveColor,
    outfit: outfit,
    motto() {
      console.log(catchPhrase);
    },
  };
};

/*
the dollFactory has 4 parameters 
for the object to represent specific dolls 
we can call dollFactory with arguements and assign the return value of the variable
*/

const girlCartoon = cartoonFactory(
  "Ginger",
  "red",
  "jeans and a t-shirt",
  "As told by"
);
girlCartoon.motto(); // As told by

const boyCartoon = cartoonFactory(
  "Rocket",
  "blue",
  "board shorts",
  "Woogity Woogity"
);
boyCartoon.motto(); // Woogity Woogity
console.log(boyCartoon.firstName); // Rocket
///////////////////////////////////////////////////////////////

/* PROPERTY VALUE SHORTHAND
shortcuTs for assigning properties to variables known as DESTRUCTURING
 */

//before
const beforeCartoonFactory = (firstName, faveColor) => {
  return {
    firstName: firstName,
    faveColor: faveColor,
  };
};

//after
const afterCartoonFactory = (firstName, faveColor) => {
  return {
    firstName,
    faveColor,
  };
};
///////////////////////////////////////////////////////////////

/* DESTRUCTURED ASSIGNMENT
to extract key value pairs by creating a variable with the name of the objects key and 
wrapping it in {} and assigning it to the object 
*/
const band = {
  name: "Toadies",
  genre: "alternative rock",
  albums: {
    favorite: "Rubberneck",
    other: "Feeler,",
  },
};
//before
const genre = band.genre;
console.log(genre); // alternative rock

//after
const { albums } = band;
console.log(albums.favorite); // Rubberneck
///////////////////////////////////////////////////////////////

/* BUILT IN OBJECT METHODS
LINK : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods

Object Instance Methods:
.hasOwnProperty()
.valueOf()

Object Class Methods:
Object.assign()
Object.entries()
Object.keys()
*/

const artPiece = {
  dimensions: "3000px x 3000px",
  software: "Procreate",
  vector: false,
  layers: 25,
  brush: "marker",
};

const artPieceKeys = Object.keys(artPiece);
console.log(artPieceKeys); //  prints keys in artPiece object as an array

const artPieceEntries = Object.entries(artPiece);
console.log(artPieceEntries); // lists entire object in seperate arrays with key:value pairs

const newArtPiece = Object.assign(
  { artOnDisplay: true, colors: "pink and green" },
  artPiece
);
console.log(newArtPiece); // returns additions to object
