(function () {
	console.log("Hello from exercise 6!");

	// function add(input1: number, input2: number): string { // Throws an error
	// 	return input1 + input2;
	// }

	function add(input1: number, input2: number): number {
		return input1 + input2;
	}

	// function printResult(input: number): undefined {
	// 	console.log(`Result: ${input}`);
	// 	return;
	// }
	function printResult(input: number): void {
		console.log(`Result: ${input}`);
	}
	printResult(add(1, 2));

	// let combineValues;
	// combineValues = add;
	// combineValues = 5; // Throws an error
	// console.log(combineValues(8, 8));

	// let combineValues: Function;
	// combineValues = add;
	// combineValues = printResult; // Throws an error
	// console.log(combineValues(8, 8));

	let combineValues: (a: number, b: number) => number; // Function types
	combineValues = add;
	// combineValues = printResult; // Throws an error
	console.log(combineValues(8, 8));

	function addAndHandle(
		input1: number,
		input2: number,
		callbackFunction: (input: number) => void
	) {
		const result = input1 + input2;
		callbackFunction(result);
	}

	addAndHandle(10, 20, (result) => {
		console.log(result);
	});
})();
