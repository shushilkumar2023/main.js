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
//     console.log("your Atmcard expired on 2 days");
// }else {
//     console.log("you Atmcard on expired ");
// }

const userLoggedIn = true 
const debitCard = true
const usergoogle = true
const loggedInfronEmail = true 

if (userLoggedIn && debitCard && usergoogle) {
    console.log("Allow to buy  this course");
} else{
    console.log("don't buy this course" );
}

if (loggedInfronEmail || usergoogle ) {
    console.log("user logged in ");
}