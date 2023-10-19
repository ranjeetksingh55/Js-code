// let a = 10
// const b = 20    // outside the if it is global scope.
// var c = 30

let a = 300
if (true) {
    let a = 10   // inside the if it is block scope.
    const b = 20
    var c = 30                // if you will enter only c or var c then no difference it will treated like same.
//    console.log("INNER : ", a);
 }


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "ranjeet";

    function two() {
        const website = "youtube";
        // console.log(username);
        // console.log(website);
    }

    two();
}

// one();

if (true) {
    const username = "ranjeet"
    if (username === "ranjeet"){
        const website = " youtube"
       // console.log(username + website);


    }
    // console.log(website);   // it will not print because it is out of scope.
}
// console.log(username);      // it will not print because it is out of scope.



// ++++++++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)                         // Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}







