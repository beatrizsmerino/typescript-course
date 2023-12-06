"use strict";
(function () {
    console.log("Hello from exercise 6!");
    function add(input1, input2) {
        return input1 + input2;
    }
    function printResult(input) {
        console.log(`Result: ${input}`);
    }
    printResult(add(1, 2));
    let combineValues;
    combineValues = add;
    console.log(combineValues(8, 8));
    function addAndHandle(input1, input2, callbackFunction) {
        const result = input1 + input2;
        callbackFunction(result);
    }
    addAndHandle(10, 20, (result) => {
        console.log(result);
    });
})();
//# sourceMappingURL=scripts.js.map