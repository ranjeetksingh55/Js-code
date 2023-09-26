const accountId = 144553
let accountEmail = "ranjeetksingh@gmail.com"
var accountPassword = "123"
accountCity = "delhi"

// accountId = 443341 not allowed
accountEmail = "rk2@91.io"
accountPassword = "22322"
accountCity = "noida"
let accountState;

// // prefer not to use var
// because of issue in block scope and functional scope


console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity, accountState])
