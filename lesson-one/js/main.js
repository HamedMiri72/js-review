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


//chapter 4

const myNumber = 42;

console.log(myNumber);


//A number with a decimal point is a float which refrenceses the floating point

const myFloat = 42.01;
console.log(myFloat);

const myString = "42";
console.log(myFloat === myString); //if my float and mystring has the same value but data type is diffrent so the camparisan will be false

console.log(myString + 3);

console.log(Number(myString) + 3);

console.log(Number(myString) === myNumber);

console.log(Number("hamed miri")); // not a number NAN

console.log(Number(undefined)); //again is gonna be NAN

console.log(Number(true));
console.log(Number(false));


//number methods
//the number .isInteger() determines whether the passed value is an integer.
console.log(Number.isInteger(myFloat));


// Number.parseFloat parses an argument and returns a floating number.if can not be pars it will return nan
console.log(Number.parseFloat(myString));


const myString1 = "42.123abc"
console.log(Number(myString1));
console.log(Number.parseFloat(myString1));


// toFixed method formats a number according to how many decimal points you provide as the parameter

console.log(Number.parseFloat(myString1).toFixed(2));

console.log(typeof myFloat.toFixed(2));  //it will return string data

//Number.parseInt() method parse a string argument and returns an integer

console.log(typeof Number.parseInt(myFloat));

//toString method returns a string representing the number

console.log(typeof myFloat.toString());

console.log(typeof Number.parseFloat(myString));

console.log(typeof Number.parseFloat(myString1).toFixed(2).toString());


//NaN

Number.isNaN();
console.log(Number("Dave"));

console.log(isNaN("hamed"));


//Math methods and propertises

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(3.5));

console.log(Math.ceil(Math.PI)); //rounf=d to upper number

console.log(Math.floor(5.8)); // with floor is gonna be always rounded down no matter its is more than half portion

console.log(Math.pow(2, 6));

console.log(Math.min(2, 0.5 , 9));

console.log(Math.max(2, 4, 7));

console.log(Math.random()); // the result is always between 0 and 1

//from one to ten 
console.log(Math.floor(Math.random() * 10) + 1); // we should memorize this its gonna help for generating a random number



// FIRST CHALLANGE

//write the code that will return a random letter from your name

const myName = "Hamed"

console.log(typeof myName);


console.log(myName.charAt());

console.log(Math.floor(Math.random() * 5 + 1));

console.log(myName.charAt(Math.floor(Math.random() * 5 )));
console.log(myName.charAt(Math.floor(Math.random() * 5 )));


//make this work for all the names

console.log(myName.charAt(Math.floor(Math.random() * myName.length)));




//IF STATMENT

// if (condition) {
//     //run some code
// } else {
//     //run some other codes
// }


// let soup = "chicken noodel soup";

// let reply;

// let customerIsBanned =false;

// let crackers = true;

// if(customerIsBanned){
//     reply = "no soup for you";
// } else if(soup && crackers){
//     reply = `hers your order of ${soup} and crackers`;
// }else if (soup) {
//     reply = `her's your ${soup}`;
// }
// else {
//     reply = `sorry, we r out of ${soup}`;
// }

// console.log(reply);



let testScore = 59;
let grade;
let collegeStudent = true;

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade ="B";
}else if (testScore >= 70) {
    grade = "C";
}else {

    if (collegeStudent) {
        grade = "U"
    } else {
        grade = "F";
    }

}
console.log(grade);



// if (playerOne === computer) {
//     //tie game!
// } else if (playerOne === "rock"){
//     if(computer === "paper"){
//         //computer wins
//     }else{
//         //playerOne wins
//     }
// } else if(playerOne === "paper"){
//     if (computer === "scisear"){
//         //computer wins
//     } else {
//         //player one wins
//     }
// } else {
//     if (computer === "rock"){
//         //computer wins
//     }else {
//         //player one wins
//     }
// }


//conditional statment chapter 8


//syntax

// switch (expression OR value){
//     case choice1:
//         //run this code
//         break;
//     case choise2:
//         // run this code
//         break;

//     //add as many cases as needed

//     defaut:
//     //run this code if no case matches 
//     // no need for a breack here
// }

switch(Math.floor(Math.random() * 3 + 1)){
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
    default:
        console.log("Na match");
}

let player = "scisers";
let computer = "rock";

switch (player) {
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if (computer === "paper"){
            console.log("Computer wins!");
        } else {
            console.log("player wins!");
        }
        break;
    case "paper":
        if (computer === "scisers"){
            console.log("Computer wins!");
        }else {
            console.log("player wins!");
        }
        break;
    default:
        if (computer === "rock"){
            console.log("computer wins!");
        } else{
            console.log("player wins!");
        }
}