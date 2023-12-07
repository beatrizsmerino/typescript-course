console.log("📄", "reassign-types.ts");

(function () {
	let a = "Hello";
	console.log(a, typeof a); // string

	// a = 2; // Throws an error
	// console.log(typeof a); // number
})();
