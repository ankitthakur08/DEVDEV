function myFunction( num1, num2){
    console.log("I am a function");
    console.log(num1 +num1);
}
//  myFunction //reference address
//  myFunction(2, 3); //execution  o/p=4
//num1, num2 are the parameter of the function and values passed while are the arguments
//but but but....

// const a = myFunction(2, 3);
// console.log(a);   //undefined =the function isnt returning anything

function myFunc( x, y){
   // let result= x+y;
   // return result;
   return x+y;

}
myFunc(3,4)
const op=myFunc(3,4);
// console.log("result: ",op);


function loginUserMessage(username){
   // if(username === undefined){
   //     console.log("Please enter username");
   //     return;
   // }
   if(!username){  //same as undefined
       console.log("Please enter username");
       return;
   }
   return `${username} just logged in successfully`;
}
// console.log(loginUserMessage("Dev"));
// console.log(loginUserMessage());   //undefined

function loginUserMessage(username="Dev"){ // default  parameter
   // if(username === undefined){
   //     console.log("Please enter username");
   //     return;
   // }
   if(!username){  //same as undefined
       console.log("Please enter username");
       return;
   }
   return `${username} just logged in successfully`;
}



//Passing multiple parameter inside function
function calculateCartPrice(num1) {
   return num1;
}
console.log(calculateCartPrice(1,2,3,4,5));


function calculateCartPrice1(...num1) {   //rest operator
   return num1;
}
console.log(calculateCartPrice1(1,2,3,4,5));

function calculateCartPrice2(num1, num2, ...num3) {
   return num3;
}
console.log(calculateCartPrice2(1,2,3,4,5));


//Passing anyObject inside function
const obj={
   name : "Dev",
   price: "399"
}
function objFunc(anyObject){  //must check for availabality of that variable inside object
   console.log(`Usernamr is ${anyObject.name} and price is ${anyObject.price}`)
}
objFunc(obj)

    