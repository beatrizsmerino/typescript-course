"use strict";
(function () {
    console.log("Hello from exercise 9!");
    console.log("This is the 'scripts.js' file");
    var button1 = document.querySelector("#button1");
    var button2 = document.querySelector("#button2");
    var button3 = document.querySelector("#button3");
    if (button3) {
        button3.addEventListener("click", function () {
            console.log("Clicked!");
        });
    }
    var button4 = document.querySelector("#button4");
    function clickHandler(message) {
        console.log("Clicked! " + message);
    }
    if (button4) {
        button4.addEventListener("click", clickHandler.bind(null, "Your welcome!"));
    }
    function rest(n1, n2, n3) {
        var counter = 0;
        console.log(counter);
        if (n1 + n2 > 0) {
            return n1 + n2;
        }
    }
    rest(1, 2, 30);
})();
//# sourceMappingURL=scripts.js.map