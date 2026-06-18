// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// const calcAge = birthYear => 2037 - birthYear;

// problem 1
const temp  = [3, -2, -6, -1, 'error', 9, 13, 15, 14, 9, 5];
// 1.]Understanding the problem
// 2.]Breaking up into sub-problems
const calcTeamperatureAmplitude=function(temps){
    let max=temp[0];
    for (let i=0;i<=temp.length;i++){
        if(typeof temp[i]=='number'){
            if(temp[i]>max){
                max=temp[i];
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