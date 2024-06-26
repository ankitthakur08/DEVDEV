const a=300;
console.log(a);

let num= new Number(300.8975);
console.log(num.lenght);
console.log(num.toFixed(2));

const dec=134.876950;
console.log(dec.toPrecision(4));
console.log(dec.toPrecision(2));    

// const Price=1000000000;
// console.log(price.toLocaleString())
// console.log(price) //not changing the original number
// console.log(price.toLocaleString('en-US'))


console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.SQRT2);
console.log(Math.ceil(4.1));
console.log(Math.floor(4.8));

console.log(Math.random());   
console.log((Math.random()*10000).toPrecision(4));

const min=10;
const max=20;
console.log((Math.random()*(max-min+1))+min)
console.log(Math.floor(Math.random()*(max-min+1))+min)
