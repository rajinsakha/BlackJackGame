let num1 = 4;
let num2 = 8;


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
     let result = num1 + num2;
     document.getElementById("result").textContent = "Sum:"+result;
}

function subtract(){
    let result = num1 - num2;
    document.getElementById("result").textContent = "Subtract: "+ result;
}

function divide(){
    let result = num1 / num2;
    document.getElementById("result").textContent = result;
}

function multiply(){
    let result = num1 * num2;
    document.getElementById("result").textContent = result;
}