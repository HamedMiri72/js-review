/*
first chapter
console.log("hello world");
console.log(typeof "Dave");
console.log(typeof 42);
console.log(typeof true);
*/


//chapter 2

//Strings

const myVariable = "Mathematics";


//the length property

console.log(myVariable.length);
console.log("Every good boy does fine".length);


//string method

console.log(myVariable.charAt(6));


console.log(myVariable.indexOf("mat"));
console.log(myVariable.lastIndexOf("at")); //last index of at starts at which index

console.log(myVariable.slice(5, 7)); // slice(x, y-1)

console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

console.log(myVariable.includes("Math"));

console.log(myVariable.split("e")); //("") will result in one array includes all the letters


console.log("Hame,Miri,72".split(","));

console.log("every good boy does fine".split(" "));