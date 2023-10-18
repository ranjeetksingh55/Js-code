function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("I");
    console.log("T");
}
// sayMyName()

// function addTwoNumbers( number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers( number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result:", result);
addTwoNumbers()

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



