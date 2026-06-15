//////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Mark weighs 78 kg and is 1.69 m tall.
John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Mark weighs 95 kg and is 1.88 m tall.
John weighs 85 kg and is 1.76 m tall.

GOOD LUCK 🙂
*/
//test data 1
// let markHeight = 1.69;
// let johnHeight = 1.95;
// let markMass = 78;
// let johnMass = 92;

// let markBMI=markMass/markHeight**2
// let johnBMI=johnMass/johnHeight**2
// let markHigherBMI=markBMI>johnBMI
// console.log(markBMI,johnBMI,markHigherBMI)
// //test data 2
// markHeight = 1.88;
// johnHeight = 1.76;
// markMass = 95;
// johnMass = 85;
// markBMI=markMass/markHeight**2  
// johnBMI=johnMass/johnHeight**2
// markHigherBMI=markBMI>johnBMI
// console.log(markBMI,johnBMI,markHigherBMI)

// const firstName="Jonas"
// const job="teacher"
// const birthYear=1991
// const year=2037
// const jonas="I'm "+firstName +',a '+(year-birthYear)+' years old '+job+'!'
// console.log(jonas)
// const jonasNew=`I'm ${firstName}, a ${year-birthYear} years old ${job}!`
// console.log(jonasNew)
// console.log(`Just a regular string...`)
// console.log('String with \n multiple \n lines')
// console.log(`string
//     wiht 
//     multiple 
//     lines`)


// const age=19
// const isOldEnough=age>=18
// if(isOldEnough){
//     console.log(`Sarah can start driving license 🚗`)
// }
// else{
//     console.log(`Sarah is too young. Wait another ${18-age} years :)`)
// }

// const birthYear=1991
// let century
// if (birthYear<=2000){
//     century=20
// }
// else{
//     century=21
// }
// console.log(`You are in ${century}th century`)


//////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either:
   "Mark's BMI is higher than John's!"
   or
   "John's BMI is higher than Mark's!"

2. Use a template string to include the BMI values in the outputs.
   Example:
   "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// let markHeight=1.69
// let markMass=78
// let johnHeight=1.95
// let johnMass=92
// let markBMI=markMass/markHeight*2
// let jhonBMI=johnMass/johnHeight*2
// if(markBMI>jhonBMI){
//     console.log(`Mark's BMI ${markBMI} is higher than Jhons BMI ${jhonBMI}`)
// }
// else{
//     console.log(`John's BMI ${jhonBMI} is higher than Marks BMI ${markBMI}`)
// }
// const age='13'
// console.log(age+10)
// console.log(Number(age)+10)



// favorite=Number(prompt("What's your favorite number?"))
// console.log(favorite)
// console.log(typeof favorite)
// if (favorite===23){
//     console.log("Cool! 23 is an amazing number!")
// }   
// else if(favorite===7){
//     console.log("7 is also a cool number")
// }   
// else if(favorite===9){
//     console.log("9 is also a cool number")
// }   
// else{
//     console.log("Number is not 23 or 7 or 9")
// }

// if(favorite!==23){
//     console.log("Why not 23?")
// }


// const hasDriversLicense=true
// const hasGoodVision=false
// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

//////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times. The winner with the highest average score wins the trophy!

1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
Don't forget that there can be a draw, so test for that as well
(draw means they have the same average score).

3. BONUS 1:
Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team,
and at the same time a score of at least 100 points.

HINT: Use a logical operator to test for minimum score,
as well as multiple else-if blocks 😉

4. BONUS 2:
Minimum score also applies to a draw!
So a draw only happens when both teams have the same score
and both have a score greater or equal to 100 points.
Otherwise, no team wins the trophy.

TEST DATA:
Dolphins score 96, 108 and 89.
Koalas score 88, 91 and 110.

TEST DATA BONUS 1:
Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 123.

TEST DATA BONUS 2:
Dolphins score 97, 112 and 101.
Koalas score 109, 95 and 106.

GOOD LUCK 🙂
*/


// test data
let dolphinAvg=(96+108+89)/3
let koalasAvg=(88+91+110)/3
if((dolphinAvg>koalasAvg)&&(dolphinAvg>=100)){
    console.log(`Dolphins win the trophy with an average score of ${dolphinAvg}`)
}
else if((koalasAvg>dolphinAvg)&&(koalasAvg>=100)){
    console.log(`Koalas win the trophy with an average score of ${koalasAvg}`)
}
else if((koalasAvg==dolphinAvg)&&(koalasAvg>=100)){console.log(`Both win the trophy with an average score of ${dolphinAvg}`)}
else{console.log(`No team wins the trophy`)}
// test data bonus 1
dolphinAvg=(97+112+101)/3
koalasAvg=(109+95+123)/3
if((dolphinAvg>koalasAvg)&&(dolphinAvg>=100)){
    console.log(`Dolphins win the trophy with an average score of ${dolphinAvg}`)
}
else if((koalasAvg>dolphinAvg)&&(koalasAvg>=100)){
    console.log(`Koalas win the trophy with an average score of ${koalasAvg}`)
}
else if((koalasAvg==dolphinAvg)&&(koalasAvg>=100)){console.log(`Both win the trophy with an average score of ${dolphinAvg}`)}
else{console.log(`No team wins the trophy`)}
// test data bonus 2
dolphinAvg=(97+112+101)/3
koalasAvg=(109+95+106)/3
if((dolphinAvg>koalasAvg)&&(dolphinAvg>=100)){
    console.log(`Dolphins win the trophy with an average score of ${dolphinAvg}`)
}
else if((koalasAvg>dolphinAvg)&&(koalasAvg>=100)){
    console.log(`Koalas win the trophy with an average score of ${koalasAvg}`)
}
else if((koalasAvg==dolphinAvg)&&(koalasAvg>=100)){console.log(`Both win the trophy with an average score of ${dolphinAvg}`)}
else{console.log(`No team wins the trophy`)}