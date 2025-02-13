// This is the JavaScript code
// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const colorField = document.getElementById("color-field");
const fontSizeField = document.getElementById("font-size-field");
const clickButton = document.getElementById("click-button");
const text = document.getElementById("text");
const checkbox = document.getElementById("checkbox");
const body = document.body;

function buttonPress() {
    text.innerHTML = "WHY'D YOU CLICK THE BUTTON"

    body.style.backgroundColor = colorField.value;
    text.style.fontSize = `${fontSizeField.value}px`
}

function checkboxChange() {
    let checked = checkbox.checked;
    console.log(`the checkbox has this state: ${checked}`)

    if(checked) {
        body.style.outlineStyle = "solid"
    } else {
        body.style.outlineStyle = "none"
    }
}