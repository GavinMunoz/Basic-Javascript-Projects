function Vote() {
    var a = document.getElementById("age").value;
    var str = (a >= 18) ? "You can vote!" : "You are not old enough to vote";
    document.getElementById("text").innerHTML = str;
}

function Vehicle(make, model, year, color) {
    this.Vehicle_make = make;
    this.Vehicle_model = model;
    this.Vehicle_year = year;
    this.Vehicle_color = color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
        Goku.Super_name + " and " + Vegeta.Super_name + " are " + Goku.Super_race + "s from Planet Vegeta and " +
        Piccolo.Super_name + " is a " + Piccolo.Super_race + " from Planet Namek.";
}

function DragonBallSuper(name, race) {
    this.Super_name = name;
    this.Super_race = race;
}

var Goku = new DragonBallSuper("Goku", "Saiyan");
var Vegeta = new DragonBallSuper("Vegeta", "Saiyan");
var Piccolo = new DragonBallSuper("Piccolo", "Namekian");

function NestedFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 0;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}