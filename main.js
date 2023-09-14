import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

//const answer = prompt('Please, give me a number between 1 and 10: ');
//console.log(`Your number is: ${answer}`);

function gowithkey(){
    console.log(`In this room you have find gold and found the exit, 
    CONGRATULATION, you are now rich and free:-) `);
}

let name = prompt('Please, enter your name: ');
console.log("Hello "+name);
let gender = prompt('Please, enter your gender: ');
console.log("Your gender is: "+gender);
let health = 2;
const inventory = [];
console.log(name + "," );
console.log(`On your weekend excursion you got a stark rain in the middle of nowhere.
Fortunately you have found an entrance to a cave right on yourt left handside.
To avoid to be completely wet, you decided to enter to the cave.
Your biggest adventure is begun!!!!
As you have entered you see three subjects in the first room of the cave:
-
1: axe,
2: lamp,
3: key,
4: leave the cave
`);
let answerok=0;
while (answerok==0){
let answer = prompt('Which one do you prefer?');
if (answer==1) {
    inventory.push("axe");
    answerok=1}
 else if (answer==2) {
    inventory.push("lamp");
    answerok=1}
 else if (answer==3) {
    inventory.push("key");
    answerok=1}
 else if (answer==4){
    console.log("You are not brave enough!!!!");
    process.exit();
 }
 else {
    console.log("bad answer");
    }
}
console.log(`You are now on your way to the next room.
As you enter, you will realize that there is a big bear sleeping atthe wall.
You try to pass next to the sleeping bear, but you are not successfull.
The bear is awaken and You can now decide if you are attacking it or run....
1: attack
2: run`);
answerok=0;
while (answerok==0){
    let answer = prompt('Which one do you prefer?');
    if (answer==1) {
        console.log("You have attacked the bear");
        //attack is chosen
        if (inventory.includes("axe")){
            //attack is chosen, have axe, bear killed.
            console.log(`Congratulation, as you have an axe, you have killed the bear!!!
            Behind the dead bear you see now a key. You see now two doors before yourself.
            With the key you can open the first one, the second one you can go in without using the key.
            Which room do you choose?
            1: room with key
            2: room without key`);
            answerok=0;
            while(!answerok){
                answer = prompt('Which one do you prefer?');
                if(answer==1){
                    //bear killed, go with key
                    gowithkey();
                    answerok=1;
                }
                else if(answer==2){
                    // bear killed, go withot key
                    console.log(`You have entered in a dark room. As you do not
                    have a lamp and were not careful enough, you have fallen 
                    in a deep hole. Sorry, you ARE DIED!!!!`)
                    answerok=1;
                }
                else{
                    console.log(`bad answer, please choose again:`);
                }
            }
        }  
        else {
            //attack is chosen, have no axe, killed, GAME OVER.
            console.log(`Without any weapon to attack a bear is not really clever.
            Sorry, you are DIED!`);
        }      
        answerok=1}
     else if (answer==2) {
        // run away
        console.log("You have chosen to run away");
            if (inventory.includes("key")){
                //run away, have key
                gowithkey();
            }
            else {
                //run away, have no keys
                console.log(`As you do not have a key, you cannot open the next door, need to run backwards.
                On your way back you have met with a witch.
                The witch asks you if you like witches.
                You can choose:
                1:yes
                2:no`);
                answerok=0;
                answer = prompt('Which one do you prefer?');
                while(!answerok){
                    if (answer==1){
                        //you like the witch.
                        console.log(`The witch likes your answer, you have LUCK.
                        With her magic, the witch brings you out of the cave. 
                        Congratulation, you have finally a GOOD DAY today.`);
                        answerok=1;
                    }
                    else if(answer==2){
                        //you do not like the witch.
                        answerok=1;
                        console.log(`The witch does not likes your answer and transforms you to a
                        mouse. You have unfortunately a BAD DAY today.`)
                    }
                }
            }
        answerok=1}
     else {
        console.log("bad answer");
        }
    }



