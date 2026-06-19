// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// const calcAge = birthYear => 2037 - birthYear;

// problem 1
const temp  = [3, -2, -6, -1, 'error', 9, 13, 15, 14, 9, 5];
// 1.]Understanding the problem
// 2.]Breaking up into sub-problems
const calcTeamperatureAmplitude=function(temps){
    let max=temps[0];
    for (let i=0;i<=temps.length;i++){
        if(typeof temps[i]=='number'){
            if(temps[i]>max){
                max=temps[i];
            }
            else if(temp[i]<max){
                continue;
            }
            else{
                continue;
            }
        }
        else{
            continue;
        }
    }
    return max;
}
console.log(calcTeamperatureAmplitude(temp));

// Problem 2
// function should now receive 2 arrays of temperatures
// Therefore just merge the arrays together

let temp1=[3, 5, 1];
let temp2=[9, 0, 5];
let tempf=temp1.concat(temp2);
console.log(tempf);
console.log(calcTeamperatureAmplitude(tempf)); 


// take the input from the user and convert the temperature into kelvin
// const measure=function()
// {
//     const measurement=
//     {
//         type:'temp',
//         unit:'celsius',
//         vaule:Number(prompt('Degrees celsius: ')),
//     }
//     const kelvin=measurement.vaule+273;
//     return kelvin;
// }
// console.log(measure());

// Problem 3
const data1=[17, 21, 23];
const forecast=function (arr){
    for(let i=0;i<arr.length;i++){
        console.log(`... ${arr[i]}ºC in ${i+1} days `);
    }
}
console.log(forecast(data1));


const month=prompt('Enter the month: ');
switch(month){
    case 'january':
        console.log('this is january');
        break;
    case 'february':
        console.log('this is february');
        break;
    case 'march':
        console.log('this is march');
        break;
    case 'april':
        console.log('this is april');
        break;
    case 'may':
        console.log('this is may');
        break;
    case 'june':
        console.log('this is june');
        break;                      
    case 'july':
        console.log('this is july');
        break;
    case 'august':
        console.log('this is august');
        break;
    case 'september':
        console.log('this is september');
        break;
    case 'october':
        console.log('this is october');
        break;
    case 'november':
        console.log('this is november');
        break;
    case 'december':
        console.log('this is december');
        break;
     default:
        console.log('this is not a month');
}
