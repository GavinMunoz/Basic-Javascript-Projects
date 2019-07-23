var number = 0;
function Add(a, b) {
    document.getElementById("math").innerHTML = a + b;
}

function Subtract(a, b) {
    document.getElementById("math").innerHTML = a - b;
}

function Multiply(a, b) {
    document.getElementById("math").innerHTML = a * b;
}

function Divide(a, b) {
    document.getElementById("math").innerHTML = a / b;
}

function MultipleMath() {
    var simple_Math = (1 + 2 ) * 10 / 2 - 5;
    document.getElementById("math").innerHTML = 
    "1 plus 2, multiplied by 10, divided in half and the subtracted by 5 equals " + simple_Math;
}

function Modulus() {
    document.getElementById("math").innerHTML = 5 * 6 % 7;
}

function NegativeNumber() {
    document.getElementById("math").innerHTML = -11;
}

function Increment() {
    document.getElementById("math").innerHTML = number++;
}

function Decrement() {
    document.getElementById("math").innerHTML = number--;
}

function Random() {
    document.getElementById("math").innerHTML = Math.random() * 100;
}