/*################ RESPONSIVE NAVBAR #################*/

function dropDownMenu() {
    var x = document.getElementById("dropDownClick");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
