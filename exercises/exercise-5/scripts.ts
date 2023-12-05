(function () {
	console.log("Hello from exercise 5!");

	let combinedNames;
	let combinedAges;

	function combineNumbers(input1: number, input2: number) {
		const result = input1 + input2;
		return result;
	}
	combinedAges = combineNumbers(30, 26);
	console.log("combineNumbers", combinedAges);
	// combinedNames = combineNumbers("Max", "Anna"); // Throws an error
	// console.log("combineNumbers", combinedNames);

	function combineStrings(input1: string, input2: string) {
		const result = input1 + input2;
		return result;
	}
	combinedNames = combineStrings("Max", "Anna");
	console.log("combineStrings", combinedNames);
	// combinedAges = combineStrings(30, 26); // Throws an error
	// console.log("combineStrings", combinedAges);

	function combineStringOrNumber(
		input1: number | string, // Union types
		input2: number | string
	) {
		// const result = input1 + input2; // Throws an error

		let result;
		if (typeof input1 === "number" && typeof input2 === "number") {
			result = input1 + input2;
		} else {
			result = input1.toString() + input2.toString();
		}

		return result;
	}
	combinedNames = combineStringOrNumber("Max", "Anna");
	console.log("combineStringOrNumber", combinedNames);
	combinedAges = combineStringOrNumber(30, 26);
	console.log("combineStringOrNumber", combinedAges);

	type inputCombinable = number | string; // Union types
	type resultCombinable = "as-number" | "as-text"; // Literal types
	function combineStringAndNumber(
		input1: inputCombinable, // Alias type
		input2: inputCombinable, // Alias type
		resultConversion: resultCombinable // Alias type
	) {
		// const result = input1 + input2; // Throws an error

		let result;
		if (
			(typeof input1 === "number" && typeof input2 === "number") ||
			resultConversion === "as-number"
		) {
			result = +input1 + +input2;
		} else {
			result = input1.toString() + input2.toString();
		}

		// if (resultConversion === "as-number") {
		// 	return +result;
		// } else {
		// 	return result.toString();
		// }

		return result;
	}
	const combinedAges1 = combineStringAndNumber(30, 26, "as-number");
	console.log("combineStringAndNumber", combinedAges1);
	const combinedAges2 = combineStringAndNumber("30", "26", "as-number");
	console.log("combineStringAndNumber", combinedAges2);
	combinedNames = combineStringAndNumber("Max", "Ana", "as-text");
	console.log("combineStringAndNumber", combinedNames);
})();
