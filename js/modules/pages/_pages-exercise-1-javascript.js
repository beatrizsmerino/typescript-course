// PAGES
// exercise-1
// =================================================





const buttonSum = document.getElementById("ej1JSButtonSum");
const buttonReset = document.getElementById("ej1JSButtonReset");
const resultSum = document.getElementById("ej1JSResultSum");
const inputNum1 = document.getElementById("ej1JSInputNum1");
const inputNum2 = document.getElementById("ej1JSInputNum2");
const inputNumFormat = document.getElementById("ej1JSInputNumFormat");


function sumNumbers(num1, num2) {
	return num1 + num2
}

function sumNumbersFormated(num1, num2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 + num2;
	} else {
		return +num1 + +num2
	}
}

function resetValue(fields) {
	fields.forEach(function (field) {
		field.value = '';
	});
}


function init() {
	console.log("EXERCISE 1");

	buttonSum.addEventListener("click", function (event) {
		event.preventDefault();

		console.log({
			num1: {
				value: inputNum1.value,
				type: typeof inputNum1.value
			},
			num2: {
				value: inputNum2.value,
				type: typeof inputNum2.value
			},
			format: {
				value: inputNumFormat.checked,
				type: typeof inputNumFormat.checked
			}
		});

		let result;
		if (inputNum1.value !== '' && inputNum2.value !== '') {
			if (inputNumFormat.checked == true) {
				result = sumNumbersFormated(inputNum1.value, inputNum2.value);
			} else {
				result = sumNumbers(inputNum1.value, inputNum2.value);
			}

			resultSum.innerHTML = result;
		}
	});

	buttonReset.addEventListener("click", function (event) {
		event.preventDefault();
		resetValue([inputNum1, inputNum2]);
		resultSum.innerHTML = 'num1 + num2';
	});
}



export { init }
