// //for 
// for (let index = 0; index <= 10; index++) {
//     const element = index;
//   if (index === 5) {
//     console.log("5 is a best number");
//   }
//     console.log(element);  
// }

for (let index = 0; index <= 10; index++) {
  // console.log(`outer loop value: ${index}`);
 for (let j = 0; j <= 10; j++) {
  // console.log(`inner liner ${j} outer liner ${index}`);
  console.log(index + "*" + j + '='+ index*j);
 }
  
}