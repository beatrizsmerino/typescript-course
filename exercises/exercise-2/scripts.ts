(function () {
	const button = document.querySelector("button");
	const input1 = document.getElementById("num1")! as HTMLInputElement;
	const input2 = document.getElementById("num2")! as HTMLInputElement;
	const outputResult = document.getElementById("result") as HTMLElement;

	function add(num1: number, num2: number) {
		const dataLog = [
			{
				number: "num1",
				value: num1,
				type: typeof num1,
			},
			{
				number: "num2",
				value: num2,
				type: typeof num2,
			},
		];
		console.table(dataLog);

		return num1 + num2;
	}

	if (button) {
		button.addEventListener("click", function () {
			const result = add(+input1.value, +input2.value);
			outputResult.innerHTML = result.toString();
			console.log(result);
		});
	}
})();

// The key difference is:
// - Javascript uses "dynamic types" (resolved at runtime).
// - Typescript uses "static types" (set during development).
