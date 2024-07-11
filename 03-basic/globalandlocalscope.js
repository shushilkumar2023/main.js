
// // scope
// let a = 200

// if (true){
//     let a = 20
//     const b = 40
//     console.log("Inner:", a);
 
//     function addnum () {
        
//     }
// }


// // function sum (a,b,c) {
// //     let totalsum = a+b+c
// // }

// // console.log(a);
// // console.log(b);
// // console.log(c);


// // scope level and mini hoisting


// function one (params) {
//    const username = "shuhsil"

//     function two(params) {
//         const video = "youtube"
//     console.log(username);
//     }
//     //  console.log(video);

//     // two()
// }
// // console.log(one);

// if (true) {
//     const username = "shushil"
//     if (username === "shushil") {
//         const video = " youtube"
//         console.log(username + video);
//     }    
// }


function addone (num) {
    return num + 1
}
console.log(addone(5));

const addtwo = function (num) {
    return num + 1                    //expersion 
}

console.log(addtwo(5));