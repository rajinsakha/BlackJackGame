// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let count = 0;

// function increment(){
//     count+=1;
//     countEl.innerText = count; 
// }

// function save(){
//     let countStr = count + " - ";
//     saveEl.textContent+= countStr;
//     countEl.textContent = 0;
//     count = 0;
// }

// let error = document.getElementById("error");
// function displayError(){
//     error.textContent = "Something went wrong, please try again."
// }

// let person = {
//     name: "Rajin",
//     age:19,
//     country: "Nepal",
//     logData : function(){
//         console.log(person.name+ " is " + person.age + " years old and lives in " + person.country)
//     }
//  }

// person.logData();

// let age = 15;

// if(age < 6){
//     console.log("free");
// }
// else if(age>=6 || age<= 17 ){
//     console.log("child discount");
// }
// else if(age >=18 || age <= 26){
//     console.log("student discount");
// }
// else if(age>= 27 || age <= 66){
//     console.log("full price");
// }
// else{
//     console.log("senior citizen discount");
// }

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift("Tuvalu");
// largeCountries.unshift("China");


// for(let i=0; i<largeCountries.length;i++){
//     console.log(largeCountries[i]);
// }

// let dayOfMOnth = 13
// let weekday = "Friday"

// if(weekday === "Friday" && dayOfMOnth === 13){
//     console.log("spookyFace");
// }

let hands = ["rock", "paper", "scissor"]

function getRandomItem(){
    let randomItem = Math.floor(Math.random()*3)
    return hands[randomItem];
}

console.log(getRandomItem())


