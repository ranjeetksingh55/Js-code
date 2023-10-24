// Reduce

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


//try to write in arrow function

const myTotal = myNums.reduce((acc,curr) => acc + curr, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 999,
    },
    {
        itemName: "py course",
        price: 10000
    },
     {
        itemName: "data science course",
        price: 12000
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)
console.log(priceToPay);



