// const game={
//     team1: 'bayern minich',
//     team2: 'borrussia dortmund',

//     players: [

//         [
//         'never',
//         'pavard',
//         'martinez',
//         'alaba',
//         'davies',
//         'kimmich',
//         'goretzka',
//         'coman',
//         'muller',
//         'gnarby',
//         'lewandowski',
//     ],

//     [
//         'burki',
//         'schulz',
//         'hummels',
//         'akanji',
//         'hakimi',
//         'weigl',
//         'witsel',
//         'hazard',
//         'brandt',
//         'sancho',
//         'gotze',

//     ],

//     ],

//     score: '4:0',
//     scored:['lewandowski','Gnarby','lewandowski','hummels'],

//     date: 'Nov 9th, 2037',

//     odds:{
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// const od= Object.keys(odds);
// console.log(od);



// const [player1, player2] =game.players;
// console.log(player1, player2);


// const [gk, ...others]=player1;

// console.log(gk, others);


// const allPlayers=[...player1,...player2];
// //console.log(allPlayers);

// const playersFinal= [...player1, 'thiago', 'coutinho','perisic'];
// //console.log(playersFinal);

// for(const item of playersFinal)
// {
//     console.log(`this is player ${item}`);
// }

// const team1= game.odds.team1;
// const draw= game.odds.x;

// const team2= game.odds.team2;

// console.log(team1 , team2 , draw)


// const printGoals = function(n)
// {

// }


// const game={
//     team1: 'bayern minich',
//     team2: 'borrussia dortmund',

//     players: [

//         [
//         'never',
//         'pavard',
//         'martinez',
//         'alaba',
//         'davies',
//         'kimmich',
//         'goretzka',
//         'coman',
//         'muller',
//         'gnarby',
//         'lewandowski',
//     ],

//     [
//         'burki',
//         'schulz',
//         'hummels',
//         'akanji',
//         'hakimi',
//         'weigl',
//         'witsel',
//         'hazard',
//         'brandt',
//         'sancho',
//         'gotze',

//     ],

//     ],

//     score: '4:0',
//     scored:['lewandowski','Gnarby','lewandowski','hummels'],

//     date: 'Nov 9th, 2037',

//     odds:{
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };


// console.log("juu")
// for(const player of game.scored.entries())
// {

//     console.log(`Goal ${player[0]+1} : ${player[1]}`);

// }

// let avg=0;
// const odds= Object.values(game.odds)

// for(const odd of odds)
// avg+=odd

// console.log(avg)
// avg/=odds.length;

// console.log(avg)


// const game=new map([
//     [13,'goal'],
//     [14,'gla'],
    
//     [23,'goal'],
    
//     [43,'asl'],
    
// ]);

// const events= new set(game.values())

// console.log(events)



// const cheakMiddle= function(seat) {
// //A C are middle seat

// if(seat.slice(-1)=="A" || seat.slice(-1)=="C")
// {
//     console.log(`${seat} is middle`);
// }
// else{
//     console.log(`${seat} is not middle`);
// }

// }


// cheakMiddle("11B");
// cheakMiddle("11C");

// cheakMiddle("11A");



// console.log(typeof "abs")
// const a = new String('jonEs')

// console.log(typeof a )

// console.log(a.toUpperCase())


// //cheaking emailable

// const cheakEmail= function(email) {
//     if(email.slice(email.indexOf("@"),email.length)=="@org"|| email.slice(email.indexOf("@"),email.length)=="@poornima" )
//     {
//         console.log(`${email} Is valid`)
//     }
//     else
//     console.log("no")
// }

// cheakEmail("latesh@org");


// const a1= "latesh";
// const a2= "bansal";

// const c= ["mr", a1,a2.toLocaleUpperCase()].join("...");
// console.log(c)



// const joinNames =function(a) {
//    const names=a.split(" ");
//    console.log(names);
//   const arr=[];
//    for(const x of names )
//    {
// // arr.push(x[0].toUpperCase()+x.slice(1));
// arr.push(x.replace(x[0],x[0].toUpperCase()));
//    }

//    console.log(arr)

//    console.log(arr.join("-"))
// }

// joinNames('this is jassica and this is me');


// const message= 'hell is sometimes more beautiful';

// console.log(message.padEnd(200,"*"))



// const str= function(number) {

//     const stnum= number+'';
//     const last = stnum.slice(-4);
//     console.log(last.padStart(stnum.length,"X"))

    

// }
// str(123111)

// str("1212212112121211")




const sum = function(a=4,b=5){
    return a+b;
}
const add= sum(2);
console.log(add);