// Conversion Operations Example

// Example 1: String to Number
let score = "33abc";
console.log("Original type of score:", typeof score);

let valueInNumber = Number(score); // Converts to NaN because of non-numeric characters
console.log("Converted type:", typeof valueInNumber);
console.log("Converted value:", valueInNumber); // NaN

// Example 2: Null to Number
let checkScore = null;
console.log("Type of checkScore:", typeof checkScore);

let valueFromNull = Number(checkScore); // Converts to 0
console.log("Converted type:", typeof valueFromNull);
console.log("Converted value:", valueFromNull); // 0

// Example 3: Undefined to Number
let checkUndef = undefined;
console.log("Type of checkUndef:", typeof checkUndef);

let valueFromUndef = Number(checkUndef); // Converts to NaN
console.log("Converted type:", typeof valueFromUndef);
console.log("Converted value:", valueFromUndef); // NaN


// "33" ==> 33
// "33abc" ==> Nan (Not a number)
// true = 1 and false = 0


// 
let isLoggedIn = "Yes"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// coverstion ke time par 
// 1 ==> true; 0 --> false
// "" -> false ; "any kind of string " = true 

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));
