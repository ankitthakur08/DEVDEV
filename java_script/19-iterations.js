// For loop

for (let i = 1; i <= 10; i++) {
    console.log(`2 * ${i} = ${2*i}`)
    
}
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }


//breaks the statementand come out of the loop
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
   //continue skips that iteration and doesnt execute the statements below but directlty go for incrementing 
}

//while loop


let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray1 = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray1.length) {
    //console.log(`Value is ${myArray1[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);


//For -Of loop
const arr1=[1,2,3,4,5]

for(const i of arr1){
    console.log("for-of",i);
}
const greetings="Hello WQold!"

for(const greet of greetings){
    if(greet==" "){
        continue;
    }
    console.log("Each char is:",greet);
}