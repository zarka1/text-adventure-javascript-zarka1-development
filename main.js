import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

//const answer = prompt('Please, give me a number between 1 and 10: ');
//console.log(`Your number is: ${answer}`);

let name = prompt('Please, enter your name: ');
console.log("Hello "+name);
let gender = prompt('Please, enter your gender: ');
console.log("Your gender is: "+gender);
let health = 2;
const inventory = [];
/*if (answer==2){
    console.log("You died.") gender;
}
else{
    console.log("Good choice.");
}*/