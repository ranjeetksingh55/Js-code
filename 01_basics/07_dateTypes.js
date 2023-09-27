//Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); //Wed Sep 27 2023
// console.log(myDate.toISOString());  // 2023-09-27T18:06:40.747Z
// console.log(myDate.toJSON()); //  2023-09-27T18:06:40.747Z
// console.log(myDate.toLocaleDateString());  // 9/27/2023

// Interview question
// console.log(typeof myDate); // object
 
// declare specific date

let myCreatedDate = new Date(2023, 0 , 23)  // month starts with zero in javascript
console.log(myCreatedDate.toDateString());  // Mon Jan 23 2023

// let myNewDate = new Date(2023, 5 , 23)

let myNewDate = new Date("01-09-2023")
console.log(myNewDate.toLocaleString()); // 1/9/2023

// for real time implementation

let timeStamp = Date.now()
console.log(timeStamp);  // 1695838929371 - this is milisecond
console.log(myCreatedDate.getTime()); //1674412200000 - date is converted into timestamp
 // convert into second

 console.log(Math.floor(Date.now()/100));


 let newDate = new Date()
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getFullYear());

 newDate.toLocaleString('default' , {
    weekday : "long",
 })


