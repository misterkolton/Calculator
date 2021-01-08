// const numberButtons = document.querySelectorAll('[data-number]')
// const operationsButtons = document.querySelectorAll('[data-operation]')
// const clearButton = document.querySelector('[data-all-clear]')
// const equalsButton = document.querySelector(['data-equals'])
// const deleteButton = document.querySelector(['data-delete'])
// console.log(deleteButton)

function selectMode(mode) {

var color = "#72bab9"

if (mode === "dark-mode") {
    color = "#333333";
    document.getElementById("theme").style
    .backgroundColor = color;  
} else if (mode === "light-mode") {
    color = "#ffffff";
} else if (mode === "color-mode") {
    color = "#72bab9";
} else { 
    color = "color-mode";
}

document.getElementById("theme").style
.backgroundColor = color;

}