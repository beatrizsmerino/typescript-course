// PAGES
// exercise-1
// =================================================
const buttonSum = document.getElementById("ej1TSButtonSum");
const buttonReset = document.getElementById("ej1TSButtonReset");
const resultSum = document.getElementById("ej1TSResultSum");
const inputNum1 = document.getElementById("ej1TSInputNum1");
const inputNum2 = document.getElementById("ej1TSInputNum2");
function sumNumbers(num1, num2) {
    return num1 + num2;
}
function resetValues(fields) {
    fields.forEach(function (field) {
        field.value = '';
    });
}
function init() {
    console.log("EXERCISE 1. Typescript");
    buttonSum.addEventListener("click", function (event) {
        event.preventDefault();
        console.log({
            num1: {
                value: inputNum1.value,
                type: typeof inputNum1.value
            },
            num2: {
                value: inputNum2.value,
                type: typeof inputNum2.value
            }
        });
        if (inputNum1.value !== '' && inputNum2.value !== '') {
            const result = sumNumbers(+inputNum1.value, +inputNum2.value);
            resultSum.innerHTML = result.toString();
        }
    });
    buttonReset.addEventListener("click", function (event) {
        event.preventDefault();
        resetValues([inputNum1, inputNum2]);
        resultSum.innerHTML = 'num1 + num2';
    });
}
export { init };
