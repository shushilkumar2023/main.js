// let val1 = 40
// let val2 = 50

// function aadnum(num1 , num2) {
//     let total = (num1+ num2)
//     return total
// }

//  let total1 = (val1 , val2);
// let total2 = (10 , 20);

// // console.log(("val1 val2"));

//  execute coode and call stack 

function one() {
    console.log("one");
    two()
}

function two() {
    console.log("two");
    three()
}

function three() {
    console.log("three");
    
}

one()
two()
three()