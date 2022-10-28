/*CLASSES
creates a template; so that you can have similar objects set up with main structure
*/

/* CONSTRUCTOR 
constructor() method used for new instances in a class
*/
class CartoonTvShow {
  constructor(name) {
    this.name = name;
  }
}

/*
Tv Show is the class and invokes the constructor() every time we create a new instance
constructor accepts the name argument
we use this inside the constructor because it refers to the instance name property to 
the name argument 
*/

/* INSTANCE
an objects that contains the property names and methods
of a class with unique property values
*/

const cartoon = new CartoonTvShow("Rocket Power");
console.log(cartoon.name); //Rocket Power
///////////////////////////////////////////////////////////////

/* METHODS
Class method and getter syntax is the same as it is for objects 
!!except you can NOT include commas between methods.
 */

class LiveActionTvShow {
  constructor(name) {
    this._name = name;
    this._episode = 0;
  }

  get name() {
    return this._name;
  }

  get episode() {
    return this._episode;
  }

  incrementEpisode() {
    this._episode++;
  }
}
///////////////////////////////////////////////////////////////

/* METHODS CALLS
look at previous class LiveActionTvShow 
 */

const show = new LiveActionTvShow("Sabrina the Teenage Witch");
// saved the variable liveAction to the LiveActionTvShow class

//Create two instances of LiveActionTvShow

const firstShow = new LiveActionTvShow("The Midnight Club");
//Created show name The Midnight Club
firstShow.incrementEpisode();
//Added 1 to firstShow instance's episode
const secondShow = new LiveActionTvShow("Bad Sisters");
//Created show name Bad Sisters

console.log(firstShow.episode); // logs 1
console.log(secondShow.episode); // logs 0 (since it was not called)
///////////////////////////////////////////////////////////////

/* INHERITANCE
multiple classes sharing properties and methods
inheritance is used to decrease the amount of code

Creating a PARENT Class for CHILD Classes that share information
*/

//PARENT CLASS

class Media {
  constructor(name) {
    this._name = name;
    this._time = 0;
  }
  get name() {
    return this._name;
  }
  get time() {
    return this._time;
  }
  incrementTime() {
    this._time++;
  }
}

//CHILD CLASS

class TvShow extends Media {
  // <-- extends makes the methods of the parent class available inside child class
  constructor(
    name,
    style // <-- accepts 2 arguments / style is a new property
  ) {
    super(name); // <-- calls constructor() of parent class and passes these arguments back through parent class
    this._style = style;
  }
}

/*
must always call super method before this (keyword)

Below is a new TvShow instance
*/

const tvShow1 = new TvShow("Totally Spies", "cartoon");
console.log(tvShow1.name); //Totally Spies

//TvShow has access to medias time. here we are calling it
tvShow1.incrementTime();
console.log(tvShow1.time); // 1
///////////////////////////////////////////////////////////////

/* STATIC METHODS
example: Date.now()
        ^class^static method
calls directly from date class rather than from instance
 */

//PARENT CLASS
class Pet {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  static generateName() {
    const names = ["Maui", "Kai", "Proto", "Koko", "Shaka", "Koa"];
    const randomNumber = Math.floor(Math.random() * 6);
    return names[randomNumber];
  }
}

/*
static calls generateName()
that generates and returns a random name 
you can only access generateName() by appending it to the Parent Class
*/
console.log(Pet.generateName()); //return random name
