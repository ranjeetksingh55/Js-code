const name = "ranjeet"
const repoCount = 50

//console.log(name + repoCount + "Value");   - this way it not used  now days.

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);  // this is string interpolation.

// way to declare string

const gameName = new String ("ranjeet-rs") 

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName);
console.log(gameName.charAt(3));  // to know in which position of character is present in word.
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));  // to know count of alphabet which is present in asked word.


// Slice

const newString = gameName.substring(0, 4)   // this will not allowed to be -ve.
console.log(newString);

const anotherString = gameName.slice(-7,4)  // In slice we can give -ve value.
console.log(anotherString);

// trim

const newStringOne = "     ranjeet "
console.log(newStringOne);
console.log(newStringOne.trim());

// replace

const url = "https://github.com/ranjeet%20ksingh55"
console.log(url.replace('%20', '-'))

// includes - to know in url this text is present or not.

console.log(url.includes('ranjeet')) // it will give boolean value true or false.
console.log(url.includes('chai')) // false (not present)

