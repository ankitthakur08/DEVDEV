const a=3;

console.log(a)
//a=10;   //we can't reasign a constant variavle.
// you must declaer a costant varible the time of initialization.


let b = 2;
let c ="";
let loggedIn ='true';
let marks = null;
let age;
const bigNum =122345678765n;
// console.log("hi")

console.log(typeof bigNum)
console.log(typeof null)
console.log(typeof age)
//   alert("this is my java script file") //this only interpreted by browser.
//DataTypes
// Number=2 to the power 53
// BigInt
// String
// Boolean
// null
// undefined
// Symbol
const id =Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId)
console.log(typeof id)



//non-primitive


const myArray = ["1st","2nd","3rd"];
let myObj ={
    name: "ankit",
    city: "mohali"
}
const myFunction = function(){
    console.log(" this is a function")
}
console.log(typeof myFunction)
console.log(typeof myObj)
console.log(typeof myArray)