// OBJECTS 

//EXAMPLE FROM ADAM in class 
class Person {
  // a template for creating objects
  //constructor (reserved word) is for blueprint of this object
  constructor(name, hometown, favColor) {
    this.name = name;
    this.hometown = hometown;
    this.favColor = favColor;
  }
  getGreeting() {
     return `Hello I am ${this.name} from ${this.hometown} 
and my favorite color is ${this.favColor}.`; 
  }
}

const person1 = new Person('Nicole', 'Key Largo', 'purple')
console.log(person1.getGreeting())

/*const person1 = {
  name: "Nicole", //property or a field
  hometown: 'Key Largo', //stored in key value pairs
  favColor: 'purple',
  getGreeting: function() {
    return `Hello I am ${this.name} from ${this.hometown} 
and my favorite color is ${this.favColor}.` //this refers to the object that youre inside
  }
}
console.log(person1.getGreeting()) // method */

const person2 = new Person("Ali", "Rabat", "blue");
console.log(person2.getGreeting());

/*const person2 = {
  name: "Ali",
  hometown: 'Rabat',
  favColor: 'blue',
  getGreeting: function () {
    return `Hello I am ${this.name} from ${this.hometown} 
and my favorite color is ${this.favColor}.`;
  }
}
console.log(person2.getGreeting());*/
