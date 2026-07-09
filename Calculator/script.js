// Get display element
const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        if (display.value === "") return;

        let expression = display.value.replace(/÷/g, "/").replace(/×/g, "*");
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

// ===============================
// Keyboard Support
// ===============================

document.addEventListener("keydown", function (event) {

    const key = event.key;

    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
        appendValue(key);
    }

    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "Escape") {
        clearDisplay();
    }

});
// ==========================
// Theme Toggle
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="☀️";

    }

    else{

        themeBtn.innerHTML="🌙";

    }

});