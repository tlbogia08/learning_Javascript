// Primitive 

// 7 types
/*
1. String : primitive data types ki call by values aati hai naki refrence so jo changes hote hai woh temporary changes hote hai.
2. Number
3. Boolean
4. null
5. undefined
6. Symbol : kisi value ko unquie banane ke kaam aata hai.
7.  bigInt : scientific or very big value

*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 2834802340237947232342342387685486865345325452534987n; // n represent bigINT
console.log(bigNumber);


// Non-Primitive or Refrence Type

/*
1. Array,
2. Objects
3. Functions

*/

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Rudra",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}
myFunction();

// to check data type 
console.log(typeof null)
console.log(typeof score)
console.log(typeof bigNumber)
console.log(typeof isLoggedIn)
console.log(typeof myObj)
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof id)