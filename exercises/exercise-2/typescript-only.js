"use strict";
(function () {
    var button = document.querySelector("button");
    var input1 = document.getElementById("num1");
    var input2 = document.getElementById("num2");
    function add(num1, num2) {
        return num1 + num2;
    }
    if (button) {
        button.addEventListener("click", function () {
            var result = add(+input1.value, +input2.value);
            console.log(result);
        });
    }
})();
