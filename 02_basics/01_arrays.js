// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Hanuman", "Krish","thor"]
const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// methods of array

// myArr.push(6)
// myArr.push(7)
// myArr.push(8)
// myArr.pop()   // pop remove last value of array

// myArr.unshift(9)
// myArr.shift()   // [ 1, 2, 3, 4, 5 ]

// console.log(myArr); 
// console.log(myArr.includes(9));
// console.log(myArr.includes(2));
    
const newArr = myArr.join()   // Adds all the elements of an array into a string, separated by the specified separator string.
 
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);  // array converted into string.


// slice , splice
console.log("A", myArr);
const myar1 = myArr.slice(1,3)
console.log(myar1);
console.log("b", myArr);

const myar2 = myArr.splice(1,3)
console.log(myar2);
console.log("c", myArr);
console.log(myar2);

// difference between slice and splice




 // shallow copy and deep copy (mdn doc )



