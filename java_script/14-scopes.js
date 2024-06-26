let A= 100;  //Global scope = can be accessed from anywhere in this file

if (true) {  // Block Scope = can be accessed only within this block
    let A = 10;
    const b = 20;
    var c = 30; // Exception
    console.log("inner A:",A)
}
//     {   } =Scope

console.log("outer A:",A); 
// console.log(b);
console.log(c); // can be accessed outside the block scope , so avoid using it



//The scope inside node env is different from the scope in browser



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //not accessible

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //not accessible
}

// console.log(username); //not accessible


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //can be called before initialization

function addone(num){
    return num + 1
}

//hoisting

addTwo(5)  //Error = Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}