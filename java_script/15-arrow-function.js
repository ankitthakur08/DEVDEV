//es6 features

//Arrow function
const user = {
    username: "Dev",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  //current object
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  => {}  i.e empty object/global object
//inside browser it will be window object and in nodejs it will be global object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  //undefined => cant use this inside a function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  //unefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);  //can use this but will give empty obejct
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   //single statement

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})  //returning object


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()