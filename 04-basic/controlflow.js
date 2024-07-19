//  const score = 200

//  if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
//  }


// const ATMcard = 2

// if (ATMcard > 5) {
//     console.log("your Atmcard expired on 5 days ");
// }else if (ATMcard > 4) {
//     console.log("your Atmcard expired on 4 days");
// }
// else if (ATMcard > 3) {
//     console.log("your Atmcard expired on 3 days");
// }else if (ATMcard > 2) {
// //     console.log("your Atmcard expired on 2 days");
// // }else {
// //     console.log("you Atmcard on expired ");
// // }

// const userLoggedIn = true 
// const debitCard = true
// const usergoogle = true
// const loggedInfronEmail = false

// if (userLoggedIn && debitCard && usergoogle) {
//     console.log("Allow to buy  this course");
// } else{
//     console.log("don't buy this course" );
// }

// if (loggedInfronEmail || usergoogle ) {
//     console.log("user logged in ");
// }


//truthy values 
// "0", 'false' "", [], {}, function(){}

const userEmail = "connectwithshushil"
if (userEmail) {
    console.log("get user email");
}else {
    console.log("DOn't have user email ");
}

if (userEmail.length === 0) {
    console.log("Array is Empty");
    
}