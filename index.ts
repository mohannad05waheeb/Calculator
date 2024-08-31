let numberOne = document.querySelector(".numberOne") as HTMLInputElement;
let numberTwo = document.querySelector(".numberTwo") as HTMLInputElement;
let add = document.querySelector(".add") as HTMLButtonElement; 
let multiply = document.querySelector(".multiply") as HTMLButtonElement; 
let subtract = document.querySelector(".subtract") as HTMLButtonElement; 
let divide = document.querySelector(".divide") as HTMLButtonElement; 
let result = document.querySelector(".result") as HTMLDivElement; 
add.onclick = function() {
    result.innerHTML = `The output is: ${parseFloat(numberOne.value) + parseFloat(numberTwo.value)}`;
}; 
multiply.onclick = function() {
    result.innerHTML = `The output is: ${parseFloat(numberOne.value) * parseFloat(numberTwo.value)}`;
}; 
subtract.onclick = function() {
    result.innerHTML = `The output is: ${parseFloat(numberOne.value) - parseFloat(numberTwo.value)}`;
};  
divide.onclick = function() {
    result.innerHTML = `The output is: ${parseFloat(numberOne.value) / parseFloat(numberTwo.value)}`;
};  