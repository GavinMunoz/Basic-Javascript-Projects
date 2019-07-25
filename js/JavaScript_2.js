var str = "Please Enter Your ";
function Submit() {
    
    if(document.getElementById("firstname").value == "") {
        var charType = document.getElementById("firstname").getAttribute("data-person_info");
        document.getElementById("fnMsg").innerHTML =  WriteMsg(charType);
    }
    if(document.getElementById("lastname").value == "") {
        var charType = document.getElementById("lastname").getAttribute("data-person_info");
        document.getElementById("lnMsg").innerHTML = WriteMsg(charType);
    }
    if(document.getElementById("phonenumber").value == "") {
        var charType = document.getElementById("phonenumber").getAttribute("data-person_info");
        document.getElementById("pnMsg").innerHTML = WriteMsg(charType);
    }
    if(document.getElementById("emailaddress").value == "") {
        var charType = document.getElementById("emailaddress").getAttribute("data-person_info");
        document.getElementById("eaMsg").innerHTML = WriteMsg(charType);
    } 

}

function WriteMsg(charType) {
    return str + charType;
}