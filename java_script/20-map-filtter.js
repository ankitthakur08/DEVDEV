
//Maps  == No duplicate and it is ordered. input order is output order
const map =new Map();
map.set("1","India");
map.set("2","India");
map.set("1","India");  //this is a duplicate key,value 
map.set("3","france");
map.set("4","Pakistan");
console.log(map);
console.log(map.get("1"))
console.log(typeof map.keys())  //[object/Map Iterator] { '1', '2', '3', '4' }
for (const i of map) {
    console.log(i);  //array of key value pair
}
//destructuring array of key value
for (const [i,j] of map ) {
    console.log(i,j);
}


//For-of doesnt work on objects
const myObject = {
    py : "Python",
    cpp : "C++",
    jar : "Java",
    js : "JavaScript"
}

console.log(myObject.py);
console.log(Object.keys(myObject));

for (const key in myObject) {
        console.log(`${key} is shortcut for ${myObject[key]}`);
    }


//for in loop can fetch the keys i.e  indexes of the array
const arr2=['js','py','cpp','jar']
for (const key in arr2) {
    console.log(key);
    console.log(arr2[key]);
}

//forEach
arr2.forEach(function(val){
    console.log(val);
})
function printMe(arr){
    console.log(arr);
}
arr2.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=> {
    console.log(item.languageName, item.languageFileName);
})


const arr3=[1,2,3,4,5,6,7,8,9,10]
const numbers = arr3.filter((num)=> num>=5)  //it returns the element 
console.log(numbers);
// arr3.filter((num)=> num>=5).forEach((num)=> console.log(num))

const numbers1 = arr3.filter((num)=> {
     num>=5
    }
)  //it dosnt  returns the elements. cuz we are using function scope , it returns onlyt single statement with () 

//correctly
const numbers2 = arr3.filter((num)=> {
    return num>=5
   }
) 


const newnums=[]
arr3.forEach( (num) => {
    if(num>=5){
        newnums.push(num)
    }
})
console.log(newnums);

//Accessing and filtering from array of objects

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
//filter all books of genre history
  const histBooks= books.filter((bk) => {
        return bk.genre==="History"
  })
  console.log(histBooks);

//filter all books which published after 2000
const pubBooks= books.filter((bk)=> {
    return bk.publish > 2000
})
console.log(pubBooks);

//find all books of history which published before 2000

const historyBooks2000 = books.filter( (bk) => {
    return bk.genre === "History" && bk.publish < 2000
})
console.log("Hist Books published before 2000:",historyBooks2000);




//chaining of maps and filter

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);