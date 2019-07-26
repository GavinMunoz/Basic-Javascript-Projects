function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");

    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza" ) {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    getExtras(runningTotal, text1);

};

function getExtras(runningTotal, text1) {
    var extrasTotal = 0;
    var selectedExtras = [];
    var extrasArray = document.getElementsByClassName("ingredients");
    for (var j = 0; j < extrasArray.length; j++) {
        if (extrasArray[j].checked) {
            selectedExtras.push(extrasArray[j].value);
            console.log("selected meat item: (" + extrasArray[j].value + ")");
            text1 = text1 + extrasArray[j].value + "<br>";
        }
    }

    var extrasCount = selectedExtras.length;
    if (extrasCount > 1) {
        extrasTotal = (extrasCount - 1);
    } else {
        extrasTotal = 0;
    }

    runningTotal = (runningTotal + extrasTotal);
    console.log("total selected meat items: " + extrasCount);
    console.log(extrasCount + " meat - 1 free meat = " + "$" + extrasTotal + ".00");
    console.log("meat text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = 
        "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";

};