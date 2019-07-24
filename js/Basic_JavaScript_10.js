function CallLoop() {
    var Saiyans = ["Goku", "Vegeta", "Broly"];
    for (let index = 0; index < Saiyans.length; index++) {
        if (Saiyans[index] == "Vegeta") {
            document.getElementById("text").innerHTML = Saiyans[index];
            return;
        }
        
        
    }
}

function Constant() {
    const Musical_Instrument = {type:"guitar", brand:"fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("text").innerHTML = "The cost of the " + Musical_Instrument.type + 
        " was " + Musical_Instrument.price;
}

function Let() {
    let apples = "apples";
    text.innerHTML = apples;
}

function ContinueBreak() {
    var count = 0;
    while (true) {
        count++;
        if (count == 50) {
            document.getElementById("text").innerHTML = "I hit 50.";
            continue;
        }
        if (count == 1000) {
            document.write("I'm going to stop before I break");
            break;
        }
        if (count == 5000) {
            document.write("Gavin I didn't stop.  Please stop me.");
        }
    }
}