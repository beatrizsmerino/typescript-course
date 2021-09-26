const button = document.querySelector('button');
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');

function add(num1, num2) {
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	} else {
		return +num1 + +num2
	}
}

button.addEventListener('click', function () {
	const result = add(input1.value, input2.value);
	console.log(result);
});

/*
 * If you enter for example, 10 and 5 on the inputs, you might expect to see 15 as a result but instead you see 105.
 * This it is a logical error in our application.
 * In JavaScript when you access the value of an input, it is always a string, no matter if the input type is a number.
 * So when passing two string to this function they get concatenated instead of added mathematically.
 *
 * How we are using Vanilla Javascript we need to check the type of the values before operating on them.
 * To fix this, if they are not numbers, we can use the + operator to convert the string to a number.
 */