(function () {
	console.log("Hello from exercise 8!");

	let text = "This does not transpile";
	console.log(text);

	const button = document.querySelector("button")!;
	button.addEventListener("click", () => {
		console.log("Clicked!");
	});

	console.log("This is the 'scripts.js' file");
})();
