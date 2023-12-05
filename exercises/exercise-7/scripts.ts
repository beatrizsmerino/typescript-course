(function () {
	console.log("Hello from exercise 7!");

	let userInput: unknown; // Must check the types
	let userName: string;
	let user: any; // Disable Typescript errors

	userInput = 5; // All values permitted
	userInput = "Hello world!";
	// userName = userInput; // Throws an error
	userName = user; // The 'any' type is more flexible than 'unknown' type

	if (typeof userInput === "string") {
		userName = userInput;
	}

	function generateError(message: string, code: number): never {
		throw { messageError: message, codeError: code }; // interrupt code execution
	}
	generateError("An error occurred", 500);
})();
