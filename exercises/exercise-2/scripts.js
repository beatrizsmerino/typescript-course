"use strict";
(function () {
    console.log("Hello from exercise 2!");
    var button = document.querySelector("button");
    var input1 = document.getElementById("num1");
    var input2 = document.getElementById("num2");
    var outputResult = document.getElementById("result");
    function add(num1, num2) {
        var dataLog = [
            {
                number: "num1",
                value: num1,
                type: typeof num1,
            },
            {
                number: "num2",
                value: num2,
                type: typeof num2,
            },
        ];
        console.table(dataLog);
        return num1 + num2;
    }
    if (button) {
        button.addEventListener("click", function () {
            var result = add(+input1.value, +input2.value);
            outputResult.innerHTML = result.toString();
            console.log(result);
        });
    }
})();
//# sourceMappingURL=scripts.js.map