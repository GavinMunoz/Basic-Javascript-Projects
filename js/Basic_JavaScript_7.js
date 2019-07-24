var global = "I am a global variable";
function GoVar() {
    var local = "I am a local variable";
    document.getElementById("gvariable").innerHTML = global;
    console.log(global);
    document.getElementById("lvariable").innerHTML = local;
    console.log(local);
}

function GetDate() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time.";
    } else if (time > 12 == time < 18) {
        reply = "It is the afternoon.";
    } else {
        reply = "It is evening time";
    }
    document.getElementById("greeting").innerHTML = reply;
}

function Tired() {
    if(true) {document.getElementById("greeting").innerHTML = "Yes I am tired.";}
}

function OldEnough() {
    var age = document.getElementById("age").value;
    if (age >= 18) {
        document.getElementById("result").innerHTML = "You are old enough to join the military!!";
    } else if (age < 16) {
        document.getElementById("result").innerHTML = "You are not old enough to join the military.";
    } else {
        document.getElementById("result").innerHTML = "You are old enough to join the military with parental permission!";
    }
}