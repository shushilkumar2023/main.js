let myDate = new Date ()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());

// let mycreatedDate = new Date (2023,0,25,2,2);
// // let mycreatedDate = new Date ("2023,2,5");
// let mycreatedDate = new Date ("2023,05,17");
// let mycreatedDate = new Date ("07,01,2023");

// console.log(mycreatedDate.toDateString());
// console.log(mycreatedDate.toLocaleString());

// let mytimeStamp = Date.now ();
// console.log(mytimeStamp.getFullYear);
// // console.log(mycreatedDate.getFullYear());
// console.log( typeof "mytimeStamp");
//  console.log(Math.floor(Date.now()/1000));

// let newDate = new Date ()
// console.log(newDate.getHours());
const date = new Date();
const options = { weekday: 'long' };
const formattedWeekday = date.toLocaleString('default', options);
console.log(formattedWeekday);

newDate.toLocaleString("default", {
    weekday: " long"
})