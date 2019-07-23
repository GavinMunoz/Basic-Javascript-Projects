console.log(2+3==4);
console.log(5===5);
console.log(5==="string")
console.log(5==="5");
console.log(5===4);

console.log(5>2 && 10>4);
console.log(5>10 && 10>4);
console.log(5>10 || 10>4);
console.log(5>10 || 10>20);

function NotANumber() {
    document.getElementById("NaN").innerHTML = 0/0;
}

function ReallyIsntANumber() {
    document.getElementById("NaN").innerHTML = isNaN("This is a string");
}

function ReallyIsANumber() {
    document.getElementById("NaN").innerHTML = isNaN(007);
}

function InfinityAndBeyond() {
    document.getElementById("NaN").innerHTML = 2E310;
}

function NegativeInfinityAndBeyond() {
    document.getElementById("NaN").innerHTML = -3E310;
}

function TrueOrFalse() {
    document.getElementById("NaN").innerHTML = 2E310 > -3E310;
}

function TypeCoersion() {
    document.getElementById("NaN").innerHTML = "10" + 5;
}

function NotFunction() {
    document.getElementById("NaN").innerHTML = !(5>10);
}

function NotNotFunction() {
    document.getElementById("NaN").innerHTML = !(20>10);
}