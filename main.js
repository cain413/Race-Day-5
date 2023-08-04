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
