const user = {
    username : "ranjeet",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.username}, weclome to website`);
        // console.log(this);

    }
}
// user.welcomeMessage()
// user.username = "Ranjeet Singh"
// user.welcomeMessage()
console.log(this);


// function chai (){
//     let username = "ranjeet"
//     console.log(this.username);   // undefined
// }
// chai()

const  chai  =  () => {
       let username = "ranjeet"
        console.log(this.username);  
}
// chai()

// const addTwo = (num1, num2) => {   arrow function    // return is neccesary   explicit 
//     return num1 + num2

// }

// const addTwo = (num1, num2) =>  num1 + num2    // implicit function

const addTwo = (num1, num2) =>   ({username : "ranjeet"})

// note 1. if we write cruly braises then return is neccssary.
// 2. if we write parenthesis then return is not neccessary.

  



console.log(addTwo(3, 4));





