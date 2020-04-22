
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
        displayText += "5";
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
    if (char_count(displayText, ".")>0) {
        
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
    if (displayText.includes("/0")) {
        displayText = "0"
        warningText = "Cannot divide by 0"
        document.getElementById("results").innerText=warningText;
    }
    else if (countDecimals(eval(displayText))>6) {
        displayText = eval(displayText).toFixed(6);
        document.getElementById("results").innerText=displayText;
    }
    else {
    displayText = eval(displayText);
    document.getElementById("results").innerText=displayText;
    }
    
}

function countDecimals(value) {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "1") {
        one();
    }
    if (event.key === "2") {
        two();
    }
    if (event.key === "3") {
        three();
    }
    if (event.key === "4") {
        four();
    }
    if (event.key === "5") {
        five();
    }
    if (event.key === "6") {
        six();
    }
    if (event.key === "7") {
        seven();
    }
    if (event.key === "8") {
        eight();
    }
    if (event.key === "9") {
        nine();
    }
    if (event.key === "0") {
        zero();
    }
    if (event.key === ".") {
        point();
    }
    if (event.key === "+") {
        add();
    }
    if (event.key === "-") {
        subtract();
    }
    if (event.key === "*") {
        multiply();
    }
    if (event.key === "/") {
        divide();
    }
    
    if (event.key === "Enter") {
        equals();
    }

    if (event.key === "<") {
        backspace();
    }

    if (event.key === ">") {
        clearAll();
    }
});