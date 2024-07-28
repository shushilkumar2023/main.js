const codename =["js","cpp","java"]
const values = codename.forEach( (item) =>{
    console.log(item);
    return item
})

console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]
 const newnums = myNums.filter( (num) => {
    return num > 4
 })
 console.log(newnums);

 const newNums = []
 newNums.forEach( (num) => {
    if (num > 4) {
        numNums.push(num)
    }
 })