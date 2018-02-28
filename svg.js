var svg = document.getElementById('mySVG');
var coords = document.getElementById('coords');
var clear = document.getElementById('clear');
var mouseX;
var mouseY;
var xPrev = null;
var yPrev = null;
var radius = 10;
var ns = "http://www.w3.org/2000/svg";

var placeDot = function(e){
    var bounds = svg.getBoundingClientRect();
    mouseX = e.pageX - bounds.left - scrollX;
    mouseY = e.pageY - bounds.top - scrollY;
    var newCircle = document.createElementNS(ns, "circle");
    newCircle.setAttribute("cx", mouseX);
    newCircle.setAttribute("cy", mouseY);
    newCircle.setAttribute("r", radius);
    newCircle.setAttribute("fill", "red");
    svg.appendChild(newCircle);
    if(xPrev != null){
        var newLine = document.createElementNS(ns, "line");
        newLine.setAttribute("x1", xPrev);
        newLine.setAttribute("x2", mouseX);
        newLine.setAttribute("y1", yPrev);
        newLine.setAttribute("y2", mouseY);
        newLine.setAttribute("stroke", "black");
        svg.appendChild(newLine);
    }
    xPrev = mouseX;
    yPrev = mouseY;
    coords.value = "["+mouseX+","+mouseY+"]";
}

var clearScreen = function(){
    while(svg.hasChildNodes()){
        svg.removeChild(svg.firstChild);
    }
    xPrev = null;
    yPrev = null;
}

svg.addEventListener("click", placeDot);
clear.addEventListener("click", clearScreen);