//////////////////////////////////////////
//Coding Challenge #1.2
/*
Use the BMI example from Challenge 1_1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 
GOOD LUCK :-)
*/

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.76;

markMass = 85;
markHeight = 1.88;
johnMass = 55;
johnHeight = 1.76;

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / johnHeight ** 2;

let markHigherBMI = markBmi > johnBmi;
console.log("markBmi: ", markBmi);
console.log("johnBmi: ", johnBmi);

if (markHigherBMI) {
    //this piece if code will be executed if mark's BMI is higher than Jojn's BMI
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
}
