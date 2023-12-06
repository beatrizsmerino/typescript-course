(function () {
	console.log("Hello from exercise 9!");

	console.log("This is the 'scripts.js' file");

	// The '!' sign asks Typescript to trust that it will find the element. But this is not a sure thing, for JavaScript if the element does not exist in the HTML it will throw an error.
	const button1 = document.querySelector("#button1")!;

	// Using the 'strictNullChecks: false' rule in 'tsconfig' will not throw an error on DOM elements.
	const button2 = document.querySelector("#button2"); // null
	// button2.addEventListener("click", () => {
	// 	console.log("Clicked!");
	// });

	// It is recommended to use 'strictNullChecks: true' and check if the button exists with Javascript
	const button3 = document.querySelector("#button3");
	if (button3) {
		button3.addEventListener("click", () => {
			console.log("Clicked!");
		});
	}
})();
