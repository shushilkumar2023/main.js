
// Primitive datatypes
// 1 String
// 2 Number
// 3 Boolean
// 4 Symbol
// 5 null
// 6 undefined
// 7 BigInt

// //  non - Primitives datatypes (References)
// 1 Array
// 2 Object
// 3 Function

// const score = 100 
// const scorevalue = 100.3 
// const isLoggedIN = false 
// const outsideTemp = null
// let userEmail;

// const Id = symbol('123')
// const anotherId = symbol('123')
// console.log(Id === anotherId);


// There are two types of memory storage

// 1 stack and 
// 2 Heap 

// Stack primitives data   is copy 
// Heap non Primitives data  is refernces 

// for example  Stack memory 

// let myname = "shushil kumar yadav"
// let anothername = myname
// //  anothername = "innocent"            this is change value in primitive data memeory  is stack
// //  console.log(myname);
// console.log(anothername);

// const number = ["shushil", "kumar", "yadav"]
// let user = {
//         email:"connectwithshushil@gamil.com",
//         upi:"upi@google"
//     },
//     user2 ={
//         email:"kjhadbybgfw ",
//         upi:"hgdvgc"
//     }

// let myFunction = function () {
//     console.log(user);
// }

// console.log(user, user2);

// console.log(typeof "user");

// const person = ["shushil", "bibek", "Suraj"]
// let person1 ={
//     name:"Prakritshrestha",
//     age:28
// }

// let myFunction = function () {
//     console.log(person1);
// }

// console.log(person1);

let userone = {
    email:"shushil@gmail.com",
    upi: "upi@gmail.com"
}

let usertwo = userone
usertwo.email = "shushil@gmail.com"
// usertwo = {
//     email:"bibek@gaml.com",
//     upi:"upi@ssgmail.com"
// }
console.log(userone.email);
console.log(usertwo.email);
console.log(typeof "userone");