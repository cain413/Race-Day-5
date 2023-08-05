let raceNumber = Math.floor(Math.random() * 1000);

const earlyRegistration = true;
const runnersAge = 18

if (earlyRegistration && runnersAge > 18){
raceNumber += 1000;
}
if (earlyRegistration && runnersAge > 18){
console.log(`Race will start at 9:30,your race number will be: ${raceNumber}.`);
} else if (earlyRegistration && runnersAge > 18) {
    console.log(`Race will start at 11:00, your race number will be: ${raceNumber}`);
} else if (runnersAge < 18) {
    console.log(`Race will start at 12:30, your race number will be: ${raceNumber}`);
} else {
    console.log('See the registration desk!');
}

// 2nd HALF DONE A DIFFERENT WAY

// adults (over 18)
  // early - at or above 1000
    //start at 9:30am
  // late 
   // number - below 1000
   // start - 11am 
// youths (under 18)
  // early 
    // number - below 1000
    // start - 12:30pm
  // late 
    // number - below 1000
    // start - 12:30pm
// 18 years old 

let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;
let runnersAge = 18;

if (earlyRegistration && runnersAge > 18 === true) {
raceNumber += 1000;
}

console.log(`Runner age is ${runnersAge}`);
console.log(`Runner registered early: ${earlyRegistration}`);

if (runnersAge > 18 && earlyRegistration === true){
console.log(`Race will start at 9:30,your race number will be: ${raceNumber}.`);
} else if (runnersAge > 18 && earlyRegistration === false) {
    console.log(`Race will start at 11:00, your race number will be: ${raceNumber}`);
} else if (runnersAge < 18) {
    console.log(`Race will start at 12:30, your race number will be: ${raceNumber}`);
} else if(runnersAge === 18) {
    console.log('report to registration tent');}
