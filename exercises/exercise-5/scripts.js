"use strict";
(function () {
    console.log("Hello from exercise 5!");
    let combinedNames;
    let combinedAges;
    function combineNumbers(input1, input2) {
        const result = input1 + input2;
        return result;
    }
    combinedAges = combineNumbers(30, 26);
    console.log("combineNumbers", combinedAges);
    function combineStrings(input1, input2) {
        const result = input1 + input2;
        return result;
    }
    combinedNames = combineStrings("Max", "Anna");
    console.log("combineStrings", combinedNames);
    function combineStringOrNumber(input1, input2) {
        let result;
        if (typeof input1 === "number" && typeof input2 === "number") {
            result = input1 + input2;
        }
        else {
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    combinedNames = combineStringOrNumber("Max", "Anna");
    console.log("combineStringOrNumber", combinedNames);
    combinedAges = combineStringOrNumber(30, 26);
    console.log("combineStringOrNumber", combinedAges);
    function combineStringAndNumber(input1, input2, resultConversion) {
        let result;
        if ((typeof input1 === "number" && typeof input2 === "number") ||
            resultConversion === "as-number") {
            result = +input1 + +input2;
        }
        else {
            result = input1.toString() + input2.toString();
        }
        return result;
    }
    const combinedAges1 = combineStringAndNumber(30, 26, "as-number");
    console.log("combineStringAndNumber", combinedAges1);
    const combinedAges2 = combineStringAndNumber("30", "26", "as-number");
    console.log("combineStringAndNumber", combinedAges2);
    combinedNames = combineStringAndNumber("Max", "Ana", "as-text");
    console.log("combineStringAndNumber", combinedNames);
})();
//# sourceMappingURL=scripts.js.map