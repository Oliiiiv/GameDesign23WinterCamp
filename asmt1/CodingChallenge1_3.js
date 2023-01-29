//////////////////////////////////////////
//Coding Challenge #1.3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK :-)*/

let scoreDolphins = (96+115+110)/3;
let scoreKoalas = (120+91+110)/3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log("Dophins wins the trophy!!🏆");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100) {
    console.log("Both of the teams wins the trophy!!🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100){
    //scoreDohp < scoreKoala
    console.log("Koalas wins the trophy!!🏆");
} else {
    console.log("No one wins the trophy...😢");
}


// let arrDolphins = [96, 108, 89, 100];
// let arrKoalas = [88, 91, 110, 67];

// let sumDolphins = 0;
// let sumKoalas = 0;

// for(let i = 0; i < 3; i++) {
//     // sumDolphins = sumDolphins + arrDolphins[i];
//     sumDolphins += arrDolphins[i];
//     // sumKoalas = sumKoalas + arrKoalas[i];
//     sumKoalas += arrKoalas[i];
// }

// scoreDolphins = sumDolphins/3;
// scoreKoalas = sumKoalas/3;
