(function () {
	console.log("Hello from exercise 9!");

	console.log("This is the 'analitics.js' file");

	// Uncomment this error to see how the `noEmitOnError` rule in `tsconfig` works.
	// const name: string = 30; // Throws an error

	// Variables are more flexible, allowing the type 'any', unlike function parameters.
	let logged; // any
	// Disabling the 'noImplicitAny' rule in 'tsconfig' will not throw an error in the function where 'data' is required to have a type assigned.
	// function sendAnalitics(data) { // any
	// 	console.log(data); // string
	// 	logged = true; // boolean
	// 	logged = "Beatriz"; // string
	// }
	function sendAnalitics(data: string) {
		console.log(data); // string
		logged = true; // boolean
		logged = "Beatriz"; // string
	}
	sendAnalitics("The data");
})();
