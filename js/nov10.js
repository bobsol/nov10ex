/*
ideas from here: 
http://stackoverflow.com/questions/19074171/how-to-toggle-a-divs-visibility-by-using-a-button-click
but didn't end up doing just this...
*/

document.getElementById("last").onclick = function(){
    var gray = document.getElementById("gray");
    var green = document.getElementById("green");
    if (gray) {gray.style.display = "block"}
    if (green) {green.style.display = "block"}
    document.getElementById("last").innerHTML = "";

};
