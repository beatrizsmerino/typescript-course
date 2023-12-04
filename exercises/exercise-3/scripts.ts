(function () {
	console.log("Hello from exercise 3!");

	function add(
		num1: number,
		num2: number,
		showResult: boolean,
		phrase: string
	) {
		if (typeof num1 !== "number" || typeof num2 !== "number") {
			throw new Error("Invalid input!");
		}

		const result = num1 + num2;

		if (showResult) {
			console.log(phrase + result);
		} else {
			return result;
		}
	}

	// const number1 = 5; // 5.0

	// let number1;
	// number1 = '5'; // It's allowed

	let number1: number; // It's better to indicate the type instead wait for Typescript inference.
	number1 = 5;

	const number2 = 2.8;
	const printResult = true;
	let resultPhrase = "Result is: ";
	// resultPhrase = 3; // Throws an error. It is not allowed change the type.

	add(number1, number2, printResult, resultPhrase);
	// add(2, "1", false, ""); // Throws an error. The 'add' function expected a 'number' as a second parameter.
})();
