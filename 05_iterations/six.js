// const coding = ["js", "rb", "py", "java", "cpp"]

// const values = coding.forEach ((item)=> {
//     console.log(item);
// })

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter ( (num)=> num > 5)

// console.log(newNums);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter ((num) => {
//         return num > 4
// })

const newNums = []
myNums.forEach ( (num) => {
    if (num >4){
        newNums.push(num)
    }
})



// console.log(newNums);


const books = [
    {title: 'Book One', Genre: 'Ficition', publish: 1983,
editiion: 2004},
{title: 'Book Two', Genre: 'Non-Ficition', publish: 1991,
editiion: 2008}, 
{title: 'Book Three', Genre: 'History', publish: 1999,
editiion: 2007}, 
{title: 'Book Four', Genre: 'Science', publish: 19889,
editiion: 2010},
{title: 'Book Five', Genre: 'Ficition', publish: 2009,
editiion: 2014},
{title: 'Book Six', Genre: 'History', publish: 1983,
editiion: 2000},
] 

let userBooks = books.filter((bk) => bk.Genre === 'History')
// console.log(userBooks);

//  userBooks = books.filter((bk) => bk.publish === 2009)
// console.log(userBooks);

userBooks = books.filter( (bk) => {
    return   bk.publish >= 1990 && bk.Genre === "History"
})
console.log(userBooks);


