// const tinderuser = new Object () object 
 const tinderuser = {}
tinderuser.id = "123abc",
tinderuser.name = "shuhsil",
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    email:"connectwithshushil@gmail.com",
    fullname: {
        userfullname: {
        firstname:"shuhsil",
        lastname:"yadav"
    }
    }
}
console.log(regularuser.fullname.userfullname);

const myObj1 = {1:"a",2:"b"};
const myObj2 = {3:"a",4:"b"};

// const myObj3 = {myObj1,myObj2} this single object assign
const myObj3 = Object.assign ({},myObj1,myObj2) // to two object combined assignment
console.log(myObj3);

console.log(returnedmyObj1 === myObj1);