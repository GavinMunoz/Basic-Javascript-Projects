function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };

 /*   var Animal2 = {
        Species: "Cat",
        Color: "White",
        Breed: "Shorthair",
        Age: 5,
        Sound: "Meow!"
    }; */

    delete Animal.Age;
    document.getElementById("Dictionary").innerHTML = Anima.Age;
}