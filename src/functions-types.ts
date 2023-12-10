console.log("📄", "functions.ts");

(function () {
	// function returnsNumber(num: number): string { // Throws an error
	// 	return num;
	// }
	function returnsNumber(num: number): string { // string
		return "Número devuelto: " + num;
	}
	console.log(returnsNumber(34));


	function returnsString(txt: string): number { // number
		var num;
		if (txt == "hola") {
			num = 66;
		} else {
			num = 90;
		}
		return num;
	}
	console.log(returnsString("Hola"));


	function returnsBoolean(txt: string): boolean { // boolean
		var value;
		if (txt == "yes") {
			value = true;
		} else {
			value = false;
		}
		return value;
	}
	console.log(returnsBoolean("yes"));
	console.log(returnsBoolean("no"));


	function returnsNothing(txt: string): any { // any
		console.log(txt.toUpperCase());
	}
	returnsNothing("Hello world!");
})();
