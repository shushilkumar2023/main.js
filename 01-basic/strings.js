const name = "shushil"
const repoCount = 48
const person = {
    address:"Aurahi",
    class:"ten",
    section:"yellow"
};

const gameNumber = new String("shushil");
console.log(gameNumber);
console.log(gameNumber.slice("-8,0"));
console.log(gameNumber.charAt(2));
console.log(gameNumber.toLowerCase(2));
console.log(gameNumber.indexOf("i"));
console.log(gameNumber.length);

// console.log(name + repoCount + "value");

console.log(`my name is ${name} my repo count is ${repoCount} i live at ${person.address} i read  in class ${person.class} `);

const newString = gameNumber.substring(0,5);
console.log(newString);

const anotherString = gameNumber.slice(-8,3);
console.log(anotherString);

const newStringOne = "Shushil"
console.log(newStringOne);
console.log(newStringOne.trim()); 

const URl =" https://vigilant-goggles-5gqqjv66grjrf4xp7.github.dev"


console.log(URl.replace("vigilant","shushil"));

const str = "The quick brown fox jump over the lazy dog"
const word = str.split(" ")
console.log(word[5]);

const chars = str.split("")
console.log(chars);

const strcopy = str.split("")
console.log(strcopy);

console.log( typeof str,word);
