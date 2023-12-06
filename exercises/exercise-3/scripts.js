"use strict";
(function () {
    console.log("Hello from exercise 3!");
    function add(num1, num2, showResult, phrase) {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw new Error("Invalid input!");
        }
        const result = num1 + num2;
        if (showResult) {
            console.log(phrase + result);
        }
        else {
            return result;
        }
    }
    let number1;
    number1 = 5;
    const number2 = 2.8;
    const printResult = true;
    let resultPhrase = "Result is: ";
    add(number1, number2, printResult, resultPhrase);
})();
//# sourceMappingURL=scripts.js.map