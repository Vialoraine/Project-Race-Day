let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge = 19;

if (earlyRegistration === true && runnerAge > 18) {
  raceNumber += 1000;
}