

let cards = [] // array-ordered list of items
 
let sum = 0;
let sumEl = document.getElementById("sum-el");


let hasBlackJack = false;

let isAlive = false;

let message="";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

// let sumEl = document.querySelector("#sum-el");

let cardEl = document.getElementById("card-el");

let player = {
   playerName : "Omega",
   playerChips: 100
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.playerName + ": $" + player.playerChips;

function getRandomCard(){
   let randomCard = Math.floor(Math.random()*13)+1;
   if(randomCard === 1){
      return 11;
   }
   else if(randomCard >10) {
      console.log(randomCard);
      return 10;
      
   } 
   else{
      return randomCard;
   }
   
}

function startGame(){
   isAlive = true;
   let firstCard = getRandomCard();
   let secondCard = getRandomCard();

   cards=[firstCard, secondCard]

   sum = firstCard + secondCard;
   renderGame();  
}

function renderGame(){
   // render out firstCard and secondCard
   cardEl.textContent = "Cards: " ;  

   for(let i=0;i <cards.length;i++){
      cardEl.textContent+=cards[i]+ " ";
   }
   sumEl.textContent = "Sum:" + sum;
   
  
   if(sum <= 20){
      message = "Do you want to draw a new card";
      
   }
  
   else if (sum === 21){
     message = "Wohoo! You've got a blackjack";
      hasBlackJack = true;
   }
  
   else {
      message = "You're out of the game"; 
      isAlive = false;
     
   }
   messageEl.textContent = message;
  

 }

 function newCard(){
  
   if(isAlive === true && hasBlackJack === false){
      let card = getRandomCard();
   sum+= card;
   cards.push(card);  
   renderGame(); 
   }
   
 }
 
 //push() in array to insert element
//pop() in array to remove last itemm

// for(let count=10; count<=100; count+=10){
//    console.log(count);
// }

// let card1 = [7,3,9];

// for(let i=0; i<card1.length; i++){
//    console.log(card1[i]);
// }

// let sentence = ["Hello ", "my ","name ", "is ", "Per "]
// let greetingEl = document.getElementById("greeting-el")

// for(i=0; i<sentence.length;i++){
//    greetingEl.textContent = sentence[i];
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//    if(player1Time < player2Time){
//       return player1Time
//    }
//    else if(player2Time < player1Time){
//       return player2Time
//    }
//    else{
//       return player1Time; 
//    }
// }


// function getTotalRaceTime(){
//    return player1Time + player2Time;
// }

// let totalTime = getTotalRaceTime() 
 

// function rollDice(){
//    let randomNumber = Math.floor(Math.random()*6) + 1;
//    return randomNumber;
// }

// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//    title: "Learn CSS Grid for free",
//    lessons: 16, 
//    creator: "Per Harald Borgen", 
//    length: 63, 
//    level: 2, 
//    isFree: true,
//    tags: ["html", "css"]
// }

// console.log(course.tags);

// let castle = {
//   title : "Live like a King in my Castle",
//   price : 190, 
//   isSuperHost : true,
//   furniture: ["bed", "chair", "table"]
// } 

// console.log(castle.furniture)
// console.log(castle.isSuperHost)