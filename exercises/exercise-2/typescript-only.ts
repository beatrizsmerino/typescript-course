(function () {
	const button = document.querySelector("button");
	const input1 = document.getElementById("num1")! as HTMLInputElement;
	const input2 = document.getElementById("num2")! as HTMLInputElement;

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

		if(typeof num1 !== "number" || typeof num2 !== "number") {
			throw new Error(`Invalid input!`);
		}

		return num1 + num2;
	}

	if (button) {
		button.addEventListener("click", function () {
			const result = add(input1.value, +input2.value);
			console.log(result);
		});
	}
})();
