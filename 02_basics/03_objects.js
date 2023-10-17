// Singleton
// object.create 

// object literals

const mySum = Symbol("key1")

const JsUser = {
    name: "Ranjeet",
    "full name": "Ranjeet Singh",
    [mySum]: "mykey1",
    location: "Gurgoan",
    age: 18,
    email: "rks@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySum]);
// console.log(typeof JsUser[mySum]);  // to print data type.

JsUser.email = "ranjeet@amazon.com"
// Object.freeze(JsUser)
JsUser.email = "ranjeet@google.com"
// console.log(Jsuser.email);
// console.log(Jsuser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

