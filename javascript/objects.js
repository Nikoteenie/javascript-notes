// OBJECTS

/*OBJECT LITERALS
organized using key:value pairs : which can be any data type (functions/other objects)
*/
let objectLiteral = {
  'Your Name': 'Nicole',
  //^identifier(key name) --in quotes because of the space
  faveColor: "red",
  //          ^the value
};
// 'YOur Name': "Nicole" and faveColor: 'red' are the properties of the objectLiteral

///////////////////////////////////////////////////////////////

//ACCESSING PROPERTIES

//object to reference
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
};

////DOT NOTATION (.)

'hello'.length // returns 5
//^object ^dot operator ^property name

console.log(spaceship.homePlanet); // returns 'Earth'
console.log(spaceship.color); // returns 'silver'
spaceship.faveIceCream // returns undefined b/c the property doesnt exist


/*BRACKET NOTATION []
used for accessing keys that have numbers, spaces or special characters
*/
console.log(spaceship['Fuel Type'])

//can also use a variable inside brackets to select keys in an object
let returnAnyProp = (objectName, propName) =>
objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // returns Earth
///////////////////////////////////////////////////////////////

/*PROPERTY ASSIGNMENT 
Objects are mutable we can update them after we create them
using dot/bracket notation and the assignment operator (=) to add
new key-value pairs to an object or change an exisitng property
*/

spaceship ['Fuel Type'] = 'Vegetable Oil';
spaceship.color = 'gold';

//now the key-value pairs have be modified
console.log(spaceship["Fuel Type"]); // returns Vegetable Oil
console.log(spaceship.color) //returns gold
///////////////////////////////////////////////////////////////

/* METHODS
are when the data that is stored on an object is a function

example console.log() or Math.floor()
console/Math = the global JS object
.log()/.floor() = the method on the object
 */

/*before 

const alienShip = {
  invade: function() {
    console.log('Hello! Earth')
  }
}
*/

//after
const alienShip = {
  invade() {
    console.log('Hello! Earth')
  }
}
//object methods are invoked by appending object name with dot operator and ()
alienShip.invade();
///////////////////////////////////////////////////////////////

/* NESTED OBJECTS 
object with another object as a a property which could have a property
thats an array with more objects

//////////
In our ship object we want a crew object.
each crew member then is an object; their properties are
name, degree and they each have their own unique methods based on their roles

we can nest other objects in spaceship;
like details of the spaceship's computer in parent nanoelectronics
*/

const mySpaceship = {
  telescope: {
    yearBuilt: 2018,
    model: 'YTT-2',
    focalLength: 2022,
  },

  crew: {
    captain: {
      name : 'Sandra',
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!')
    }
    }
  },
  engine: {
    model: 'Nimbus'
  },
  nanoelectronics: {
    computer: {
      terabytes:100,
      monitors: 'HD'
    },
    'back-up': {
      battery: 'Lithium',
      terabytes: 50
    }
  }
  };

  mySpaceship.nanoelectronics['back-up'].battery; //returns 'Lithium'
/*
  -first evaluates spaceship.nanoelectronics and results an object containing
  back-up and computer
-we access back-up by appending it
-backup has a battery property we access it using dot notation
  */

///////////////////////////////////////////////////////////////

/* PASS BY REFERENCE
objects are passed by reference.

a variable assigned to an object into a function as an arguement
computer interprets the paramater as pointing to space in memory that holds object

fucntions which change the object properties muattes the object permanently 
(even if assigned to const)
 */


const aboutMe = {
  myName : 'Nicole',
  faveColor: 'red'
};

let changedFaveColor = obj => {
  obj.faveColor = 'purple'
};

changedFaveColor(aboutMe);
console.log(aboutMe.faveColor)// prints purple
/* function changedFaveColor permanently change aboutMe */

// Reassignment wouldnt work the same way


///////////////////////////////////////////////////////////////

/* LOOPING THROUGH OBJECTS

for..in executes given block of code for each property in an object
*/

let powerPuffGirls = {
  cast : {
    lead: {
      name: 'Blossom',
      color: 'Pink',
      saying() {console.log('We got this')}
    },
    second: {
      name: 'Bubbles',
      color: 'Blue',
      loves() {console.log('I love Animals')}
    },
    third: {
      name: 'Buttercup',
      color: 'green',
      attitude() {console.log('I am sassy')}
    }
  }
};

//for..in
for (let castMember in powerPuffGirls.cast) {
  console.log(`${castMember}:
${powerPuffGirls.cast[castMember].name}`);
}

/* lead: 'Blossom' second: 'Bubbles' third: 'Buttercup'

iterated through each element of powerPuffGirls.cast object
variable castMemeber is set to powerPuffGirls.cast allowing us to log the
crew members roles and name 
*/ 

console.log('this')

const cellPhone = {
  brand: 'apple',
  powerOn() {
    console.log('Your phone is powering on!')
  },
  logPhoneBrand: () => {
    console.log(this.brand);

  }
}
cellPhone.logPhoneBrand();


const car = {
  fuelType : 'gas',
  turnLeft() {
    console.log('Turning Left');
  },
  logFuelType() {
    console.log(this.fuelType);
  }
};
car.logFuelType();










