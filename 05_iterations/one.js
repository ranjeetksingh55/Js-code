// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");    // message will be printed
    }
//    console.log(element); 
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);

        // console.log(i + '*' + j + '=' + i*j);
        
    }

    let myArray = ["flash", "batman", "superman"]
    // console.log(myArray.length);
    for (let index = 0; index < myArray.length; index++) {
        const element = myArray[index];
        // console.log(element);
        
    }
    
}


// break and continue

// for (let index = 1; index < 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break     // condition should be detected and it will be stop priniting output.
//     }
//     console.log(`value of i is ${index}`);
    
// }

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue    // only one time condition should be skipped.
    }
    console.log(`value of i is ${index}`);
    
}
