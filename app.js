let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge = 19;

if (earlyRegistration === true && runnerAge > 18) {
  raceNumber += 1000;
}

if (earlyRegistration === true && runnerAge > 18) {
  console.log(
    `Hi, your race will start at 9:30am and your race number is: ${raceNumber}. Goodluck!`
  );
} else if (earlyRegistration === false && runnerAge >= 18) {
  console.log(
    `Hi, your race will start at 11:00am and your race number is: ${raceNumber}. Goodluck!`
  );
} else if (runnerAge < 18) {
  console.log(
    `Hi, your race will start at 12:30pm and your race number is: ${raceNumber}. Goodluck!`
  );
}