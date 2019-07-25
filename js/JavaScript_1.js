function SaiyanSwitch() {
    var output;
    var saiyan = document.getElementById("saiyan_input").value;
    switch(saiyan) {
        case "Goku":
            output = saiyan + " is the main character.";
            break;
        case "Vegeta":
            output = saiyan + " is the prince of all Saiyans.";
            break;
        case "Broly":
            output = saiyan + " is the Legendary Super Saiyan.";
            break;
        case "Bardock":
            output = saiyan + " is the father of Goku.";
            break;
        case "Gine":
            output = saiyan + " is the mother of Goku.";
            break;
        case "King Vegeta":
            output = saiyan + " is the father of Vegeta.";
            break;
        case "Paragus":
            output = saiyan + " is the father of Broly.";
            break;
        case "Nappa":
            output = saiyan + " was assigned to Vegeta's team.";
            break;
        case "Raditz":
            output = saiyan + " is the brother of Goku.";
            break;
        case "Cabba":
            output = saiyan + " is a warrior if the Sadala Defense Force.";
            break;
        case "Caulifa":
            output = saiyan + " is a Universe 6 Saiyan.";
            break;
        case "Kale":
            output = saiyan + " is the Legendary Super Saiyan of Universe 6.";
            break;
        default:
            output = "Please enter a Saiyan exactly as written above.";   
    }

    document.getElementById("output").innerHTML = output;
    document.getElementsByClassName("header3")[1].innerHTML = "Thank you for playing.";
    PicturePerfect();

}

function PicturePerfect() {
    var c = document.getElementById("canvasName");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}