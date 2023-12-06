"use strict";
(function () {
    console.log("Hello from exercise 7!");
    var userInput;
    var userName;
    var user;
    userInput = 5;
    userInput = "Hello world!";
    userName = user;
    if (typeof userInput === "string") {
        userName = userInput;
    }
    function generateError(message, code) {
        throw { messageError: message, codeError: code };
    }
    generateError("An error occurred", 500);
})();
//# sourceMappingURL=scripts.js.map