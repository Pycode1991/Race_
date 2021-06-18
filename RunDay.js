let numberRace = Math.floor(Math.random() * 1000);

let early = true;


let age = 17;


if(early && age > 18) {
  console.log(`Race will begin at 9:30, your number is: ${numberRace}.`);
}

else if(!early && age > 18) {
  console.log(`Race will begin at 11:00, your number is: ${numberRace}.`);
  
}
else if(age < 18) {
  console.log(`Race will begin at 12:45, your number is: ${numberRace}.`);
}

else {
  console.log('Please approach the registration desk.');
  
}
  
