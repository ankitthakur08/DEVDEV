//Immediately Invoked Function Expression
//To eliminate the pollution comming from the global scope 
//no need to call the function explicitely
//    ()()  
//  (function defination)(calling);  //; is mandotory
//named iife
(function chai(){
    console.log("I am chai");
})();
 

//unnamed iife
(  (name) => {
    console.log(`Automatically ${name} am executed`);
} ) ("dev");