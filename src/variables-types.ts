console.log("📄", "variables-types.ts");

(function () {
	console.group("Types: string, number, boolean, object (array)");

	var name: string = "Víctor Robles"; // string
	console.log(name, typeof name);

	var age: number = 55; // number
	console.log(age, typeof age);

	var programmer: boolean = true; // boolean
	console.log(programmer, typeof programmer);

	var langs: Array<string> = ["PHP", "JavaScript", "CSS"]; // object (array)
	console.log(langs, typeof langs);

	console.log(name + " - " + age);

	name = "2"; // allowed
	// name = 2; // Throws an error
	// age = true; // Throws an error
	// langs: Array<string> = [1, "JavaScript", "CSS"]; // Throws an error

	console.groupEnd();
})();



(function () {
	console.group("Types: any");

	let price; // any
	console.log(price, typeof price); // undefined

	price = 44;
	console.log(price, typeof price); // number

	price = "Hi, how are you doing?";
	console.log(price, typeof price); // string

	console.groupEnd();
})();



(function () {
	console.group("Variables: global and local scope");

	var a = 7; // global
	var b = 12;

	if (a === 7) {
		let a = 4; // local
		var b = 1;

		console.info("Inside scope:");
		console.log(a, b);
	}

	console.info("Outside scope:");
	console.log(a, b);

	console.groupEnd();
})();
