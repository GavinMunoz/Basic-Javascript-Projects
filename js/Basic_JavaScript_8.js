function Concat() {
    var a = "I";
    var b = " am";
    var c = " a";
    var d = " string.";
    var str = a.concat(b, c, d);
    document.getElementById("text").innerHTML = str;
}

function Slice() {
    var sent = "I am a large string";
    var str = sent.slice(5, 10);
    document.getElementById("text").innerHTML = str;
}

function UpperCase() {
    var str = "I am an upper case string."
    document.getElementById("text").innerHTML = str.toUpperCase();
}

function Search() {
    var str = "Where or where is my string?"
    document.getElementById("text").innerHTML = str.search("string");
}

function ChangeNumber() {
    var str = 155;
    document.getElementById("text").innerHTML = str.toString();
}

function Precision() {
    var str = 32165416.1651498464684646846581
    document.getElementById("text").innerHTML = str.toPrecision(10);
}

function Fix() {
    var str = 163.1649864651984684;
    document.getElementById("text").innerHTML = str.toFixed(2);
}

function Values() {
    var str = 55;
    document.getElementById("text").innerHTML = str.valueOf(str);
}