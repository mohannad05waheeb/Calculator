var numberOne = document.querySelector(".numberOne");
var numberTwo = document.querySelector(".numberTwo");
var add = document.querySelector(".add");
var multiply = document.querySelector(".multiply");
var subtract = document.querySelector(".subtract");
var divide = document.querySelector(".divide");
var result = document.querySelector(".result");
add.onclick = function () {
    result.innerHTML = "The output is: ".concat(parseFloat(numberOne.value) + parseFloat(numberTwo.value));
};
multiply.onclick = function () {
    result.innerHTML = "The output is: ".concat(parseFloat(numberOne.value) * parseFloat(numberTwo.value));
};
subtract.onclick = function () {
    result.innerHTML = "The output is: ".concat(parseFloat(numberOne.value) - parseFloat(numberTwo.value));
};
divide.onclick = function () {
    result.innerHTML = "The output is: ".concat(parseFloat(numberOne.value) / parseFloat(numberTwo.value));
};
