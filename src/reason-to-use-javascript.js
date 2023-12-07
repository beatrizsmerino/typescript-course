console.log("📄", "reason-to-use-javascript.js");

(function () {
	function add(a, b) {
		return a + b;
	}

	const addNumbers = add(1, 2); // 3
	console.log(addNumbers);

	const addStrings = add("2", 3); // 23
	console.log(addStrings);
})();
