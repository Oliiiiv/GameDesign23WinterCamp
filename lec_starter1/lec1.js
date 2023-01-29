// let myNum = 5;
// let myNum2 = 6.54;
// console.log(myNum + myNum2);

// let myBool = true;
// let myBool2 = false; 
// console.log(myBool);
// console.log(myBool2);

// let children;
// let nullVal = null;
// console.log(children);
// console.log(nullVal);

//typeof
// console.log(typeof myNum);
// console.log(typeof myBool);
// console.log(typeof children);
// console.log(typeof "hello world");

//dynamic typing
// myNum = "hello world";
// console.log(myNum);
// console.log(typeof myNum);

//c language
// int a = 4;
// a="hello world";

// const myConst = 5;
// console.log(myConst);
// console.log(typeof myConst);

// const emptyConst= null;

let myNum = 5;
let myNum2 = 6.54;
// console.log(myNum - myNum2);
// console.log(myNum * myNum2);
// console.log(myNum / myNum2);

// myNum -= 1;
// console.log(myNum);

// myNum++;
// myNum = myNum + 1;
// myNum--;
// myNum = myNum - 1;
// console.log(myNum);

// console.log(myNum > myNum2);
// console.log(myNum < myNum2);
// console.log(myNum === myNum2);
// console.log(myNum === 5);
// console.log(myNum !== myNum2);

// let myNum3 = "6.54";
// console.log(myNum2 == myNum3);
// console.log(myNum2 === myNum3);
// console.log(myNum2 === Number(myNum3));

// const firstName = "Yawen";
// const job = "instructor";
// const birthYear = 2002;
// const year = 2023;

// const yawenString = `I am ` + firstName + `, a `  + (year - birthYear) + ` years old ` + job;
// //template literals
// const yawenString2 = `I am ${firstName}, a ${year - birthYear} years old ${job}!!`;
// console.log(yawenString);
// console.log(yawenString2);

//if-else
// myNum = 1000;
// // myNum = 1;
// if (myNum > myNum2) {
//     // console.log("The first number is larger");
//     myNum -= 5;
//     console.log(myNum);
// } 
// else {
//     //myNum <= myNum2
//     console.log("Hmm.. Maybe they are equal, maybe myNum is smaller than myNum2");
// }

const arr = [1,2,3];
const years = new Array(1999, 2002, 2006, 2008);
console.log(years);
// console.log(arr);
arr.push(4); //index 3
// console.log(arr);
arr.push("Alice"); //index 4
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[4]);
arr.unshift(true);
console.log(arr);
console.log(arr.length);

// let lastEle = arr.pop();
// console.log(lastEle);
// console.log(arr.shift());
// console.log(arr);
let idx = arr.indexOf("Im not exist in the array");
console.log(idx);

let isExist = arr.includes("Alice");
console.log(isExist);


// for (let i = 0; i < years.length; i++) {
//     console.log(years[i]);
//     //add i by 1
// }

const olivia = ['Olivia', 
    'Zhang', 
    2002, 
    'UofT', 
    ['Alice', 'Bob', 'Tony'], 
    true
];

// for(let j = 0; j < olivia.length; j++) {
//     console.log(olivia[j]);
// }

// for (let k = 0; k < 10; k++) {
//     console.log(k);
// }
// let i = 0;
// while(i < 13) {
//     console.log("i: ", i);
//     i++; // i = i+1
// }
// console.log(i);

// const inputYear = "2002";
// console.log(inputYear, typeof(inputYear));
// console.log(Number(inputYear));
// console.log(Number("hello"));
// console.log(typeof NaN); //the output is a number

// console.log("I am " + 23 + " years old"); //type coercion occurrs
// console.log("I am " + "23" + " years old");

// console.log('23' - '10' - 3);//type coersion occurrs
// console.log('23' + '10' + 3);//'2310' + '3'

let i = 5;
let j = NaN;
// console.log(Boolean(i));
// console.log(Boolean(j));

// while (4) {
//     console.log("hello");
// }
if(!(i === 5 || j === 2)) {
    console.log("Hello");
}
else{
    console.log("good evening");
}

// if(condition){
//     some code
// }
// if(!condition){
//     other code
// }