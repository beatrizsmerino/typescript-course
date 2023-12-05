"use strict";
(function () {
    console.log("Hello from exercise 3!");
    function add(num1, num2, showResult, phrase) {
        if (typeof num1 !== "number" || typeof num2 !== "number") {
            throw new Error("Invalid input!");
        }
        var result = num1 + num2;
        if (showResult) {
            console.log(phrase + result);
        }
        else {
            return result;
        }
    }
    var number1;
    number1 = 5;
    var number2 = 2.8;
    var printResult = true;
    var resultPhrase = "Result is: ";
    add(number1, number2, printResult, resultPhrase);
})();
