/**
 * Appends the given value to the display.
 * @param {string} value - The value to be appended.
 */
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

/**
 * Clears the display.
 */
function clearDisplay() {
    document.getElementById("display").value = "";
}

/**
 * Evaluates the expression in the display and updates the display with the result.
 * If an error occurs during evaluation, the display is updated with "Error".
 */
function calculate() {
    try {
        document.getElementById("display").value = eval(
            document.getElementById("display").value
        );
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

/**
 * Calculates the square of the value in the display and updates the display with the result.
 * If an error occurs during calculation, the display is updated with "Error".
 */
function square() {
    try {
        let currentValue = parseFloat(document.getElementById("display").value);
        document.getElementById("display").value = currentValue * currentValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
