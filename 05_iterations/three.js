// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);

}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}

// Maps - Map object holds key-value pairs and remembers the original insertion order of the keys

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")  // it will print only unique not duplicate
// console.log(map);

// for (const key of map) {
//     console.log(key);   
    
// }

for (const [key, value ]of map) {
    console.log(key, ':-', value);   // if you don't want to print in array then use these syntax.
    
}

const myObiect = {
    'game1': 'NFS',
    'game2': 'Spiderman'

}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);         // not working.
    
// }

