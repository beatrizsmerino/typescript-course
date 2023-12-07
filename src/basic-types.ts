console.log("📄", "basic-types.ts");

(function () {
	const name = "Miguel"; // "Miguel"

	console.log(name, typeof name); // string
	name.toLowerCase();
	// name = 2; // Throws an error
	// name.propertyUnknown; // Throws an error
})();



(function () {
	const person = { // person
		name: "Pepe", // string
		age: 30, // number
	};

	console.log(person, typeof person); // object
	console.log(person.name, typeof person.name); // string
	console.log(person.age, typeof person.age); // number
	// person.job; // Throws an error
})();



(function () {
	const age = 1; // 1
	console.log(age, typeof age); // number

	let counter: number = 0;
	console.log(counter, typeof counter); // number
})();



(function () {
	let emptyValue = null;
	console.log(emptyValue, typeof emptyValue); // object
})();



(function () {
	let undefinedValue = undefined;
	console.log(undefinedValue, typeof undefinedValue); // undefined
})();



(function () {
	let anyValue; // any
	// let anyValue: any;
	anyValue = "Hello";
	console.log(anyValue, typeof anyValue); // string

	anyValue = true;
	console.log(anyValue, typeof anyValue); // boolean
})();



(function () {
	let unknownValue: unknown = null; // object
	// unknownValue.aa // Throws an error

	console.log(unknownValue, typeof unknownValue);
})();
