//function declaration

// console.log(fName(2));

// function fName (num) {
//     return num + 4;
// }

// function fruitProcessor(apples, oranges) {
//     console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }

// const myJuice = fruitProcessor(5, 8);
// console.log(myJuice);

// //anonymous function/function expression
// const calcAge = function (birthYear) {
//     //this function is a value that is stored in the variable calcAge
//     return 2023 - birthYear;
// }
// const age = calcAge(2002);
// console.log(age);

//arrow function
// const calcAge2 = birthYear => 2023 - birthYear;
// const age2 = calcAge2(2002);
// console.log(age2);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     //funciton body
//     const age3 = calcAge2(birthYear);
//     const retirement = 65-age3;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1999, 'Tony'));
// const retireStr = yearsUntilRetirement(2006, 'April');
// console.log(retireStr);

//function calling other function:
// const cutPieces = function (fruit) {
//     return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutPieces(apples); //8
//     const orangePieces = cutPieces(oranges); //12

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

//create an object
// let person = new Object();
// person.name = "Yawen";
// person.eyeColor = "black";
// person.age = 20;
// person.updateAge = function() {
//     return ++person.age;
// }

// console.log(person.age);
// person.updateAge();
// console.log(person.age);
// console.log(person);

// //simpler way:
// let person2 = {
//     name: "Daniel",
//     eyeColor: "blue",
//     age: 27,
//     updateAge: function (){
//         return ++person2.age;
//     }
// }
// console.log(person2.name);
// console.log(person2.age);
// person2.updateAge();
// console.log(person2.age);
// console.log(person2);

// const jonasArray = [
//     'Jonas',
//     23,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// const jonasObj = {
//     firstName: 'Jonas',
//     birthYear: 2000,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: true,

//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         let dl;
//         if(this.hasDriverLicense) {
//             dl = 'a';
//         } else{
//             dl = 'no';
//         }
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has some friends, they are ${this.friends}. 
//         He has ${dl} driver's license`;
//     }
// };

// console.log(jonasObj.calcAge(2000));
// console.log(jonasObj['firstName']);
// console.log(jonasObj['calcAge'](1999));
// console.log(jonasObj);
// console.log(jonasObj.calcAge());
// // console.log(jonasObj.calcAge());
// console.log(jonasObj.age);
// console.log(jonasObj.getSummary());
// jonasObj.hasDriverLicense = false;
// console.log(jonasObj.getSummary());

//object constructor
function Person(fName, eyeColor, age) {
    this.name = fName;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function() {
        return ++this.age;
    }
}

let person01 = new Person ('Olivia', "black", 20);
console.log(person01);
console.log(person01.updateAge());
// let person02 = new Person ('Daniel', 'blue', 27);
let person02 = {
    name: 'Daniel',
    eyeColor: 'blue',
    age: 27,
    updateAge: function() {
        return ++this.age;
    }
}
let person03 = new Person ('Anna', 'green', 50);


console.log(person02);
console.log(person03);
