
displayText = "0";
document.getElementById("results").innerText=displayText;

function one() {
    if (displayText === "0") {
        displayText="1";
    }
    else {
        displayText += "1";
    }
    document.getElementById("results").innerText=displayText;

}
function two() {
    if (displayText === "0") {
        displayText="2";
    }
    else {
        displayText += "2";
    }
    document.getElementById("results").innerText=displayText;
}
function three() {
    if (displayText === "0") {
        displayText="3";
    }
    else {
        displayText += "3";
    }
    document.getElementById("results").innerText=displayText;
}
function four() {
    if (displayText === "0") {
        displayText="4";
    }
    else {
        displayText += "4";
    }
    document.getElementById("results").innerText=displayText;
}
function five() {
    if (displayText === "0") {
        displayText="5";
    }
    else {
        displayText += "6";
    }
    document.getElementById("results").innerText=displayText;
}
function six() {
    if (displayText === "0") {
        displayText="6";
    }
    else {
        displayText += "6";
    }
    document.getElementById("results").innerText=displayText;
}
function seven() {
    if (displayText === "0") {
        displayText="7";
    }
    else {
        displayText += "7";
    }
    document.getElementById("results").innerText=displayText;
}
function eight() {
    if (displayText === "0") {
        displayText="8";
    }
    else {
        displayText += "8";
    }
    document.getElementById("results").innerText=displayText;
}
function nine() {
    if (displayText === "0") {
        displayText="9";
    }
    else {
        displayText += "9";
    }
    document.getElementById("results").innerText=displayText;
}
function zero() {
    if (displayText === "0") {
        displayText="0";
    }
    else {
        displayText += "0";
    }
    document.getElementById("results").innerText=displayText;
}
function point() {
    if (displayText === "0") {
        displayText=".";
    }
    else {
        displayText += ".";
    }
    document.getElementById("results").innerText=displayText;
}
function add() {
    displayText += "+";
    document.getElementById("results").innerText=displayText;
}
function subtract() {
    displayText += "-";
    document.getElementById("results").innerText=displayText;
}
function multiply() {
    displayText += "*";
    document.getElementById("results").innerText=displayText;
}
function divide() {
    displayText += "/";
    document.getElementById("results").innerText=displayText;
}
function backspace() {
    if (displayText.length < 2) {
        displayText = "0";
    }
    else if(typeof displayText == 'number') {
        displayText = "0";
    }
    else {
        displayText = displayText.slice(0,-1);
    }
    document.getElementById("results").innerText=displayText;
}
function clearAll() {
    displayText = "0";
    document.getElementById("results").innerText=displayText;
}
function equals() {
    displayText = eval(displayText);
    document.getElementById("results").innerText=displayText;
}



