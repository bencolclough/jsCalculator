
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
    displayText += "2";
    document.getElementById("results").innerText=displayText;
}
function three() {
    displayText += "3";
    document.getElementById("results").innerText=displayText;
}
function four() {
    displayText += "4";
    document.getElementById("results").innerText=displayText;
}
function five() {
    displayText += "5";
    document.getElementById("results").innerText=displayText;
}
function six() {
    displayText += "6";
    document.getElementById("results").innerText=displayText;
}
function seven() {
    displayText += "7";
    document.getElementById("results").innerText=displayText;
}
function eight() {
    displayText += "8";
    document.getElementById("results").innerText=displayText;
}
function nine() {
    displayText += "9";
    document.getElementById("results").innerText=displayText;
}
function plus() {
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
    displayText = displayText.slice(0,-1);
    document.getElementById("results").innerText=displayText;
}
function clearAll() {
    displayText = "0";
    document.getElementById("results").innerText=displayText;
}
function equals() {
    displayText = eval(displayText.slice(1)).toString();
    document.getElementById("results").innerText=displayText;
}



