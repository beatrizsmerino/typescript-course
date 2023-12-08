console.log("📄", "functions.ts");

(function () {
	// function greetings0(name) { // Throws an error
	//  	console.log(`Hello ${name}`);
	// }

	function greetings1(name: string) {
		console.log(name, typeof name); // string

		name.toUpperCase();
		console.log(`Hello ${name}`);
	}
	// greetings1(2); // Throws an error
	greetings1("Beatriz");
})();



(function () {
	// function greetings0({name: string, age: number}) { // Throws an error
	// 	console.log(`Hello ${name}, you are ${age} years old`);
	// }

	// 1 way to do it
	function greetings1({ name, age }: { name: string; age: number }) {
		console.log(`Hello ${name}, you are ${age} years old`);
	}
	// greetings1({name: 30, age: "Beatriz"}); // Throws an error
	greetings1({ name: "Beatriz", age: 30 });

	// 2 way to do it
	function greetings2(person: { name: string; age: number }) {
		const { name, age } = person;
		console.log(`Hello ${name}, you are ${age} years old`);
	}
	greetings2({ name: "Noelia", age: 26 });
})();



(function () {
	function greetings0({ name, age }: { name: string; age: number }) {
		console.log(`Hello ${name}, you are ${age} years old`);
		return age; // number
	}
	let userAge1: string;
	// userAge1 = greetings0({ name: "Raquel", age: 59 }); // Throws an error

	function greetings1({ name, age }: { name: string; age: number }): number {
		console.log(`Hello ${name}, you are ${age} years old`);
		return age; // number
	}
	let userAge2: number;
	userAge2 = greetings1({ name: "Miguel", age: 60 }); // Throws an error
})();



(function () {
	// const sayHiFromFunction0 = (fn) => { // Throws an error
	// 	return fn("Miguel");
	// };
	// sayHiFromFunction0((name) => { // Throws an error
	// 	console.log(`Hello ${name}`);
	// });

	const sayHiFromFunction1 = (fn: Function) => { // function
		return fn("Miguel");
	};
	const hi1 = sayHiFromFunction1(() => {
		return Math.random();
	});
	console.log(hi1, typeof hi1); // number

	const sayHiFromFunction2 = (fn: (name: string) => void) => {
		fn("Miguel");
	};
	const sayHi = (name: string) => console.log(`Hello ${name}`); // string
	sayHiFromFunction2(sayHi);
})();



(function () {
	const add = (a: number, b: number): number => a + b;
	const adding1 = add(1, 3);
	// const adding2 = add(1, "3"); // Throws an error
	console.log(adding1, typeof adding1); // number

	const subtract: (a: number, b: number) => number = (a, b) => a - b;
	const subtract1 = subtract(1, 3);
	// const subtract2 = subtract(1, "3"); // Throws an error
	console.log(subtract1, typeof subtract1); // number
})();



(function () {
	function throwError(message: string): never { // never
		throw new Error(message);
	}
	// throwError("Error 404"); // Stops execution of the rest of the code

	function exit(message: string): never { // never
		process.exit(1); // node
	}
	// exit("Exit from process"); // Stops execution of the rest of the code

	function logMessage(message: string): void { // void
		console.log(message);
	}
	logMessage("Testing...");
})();



(function () {
	const avengers = ["Spiderman", "Hulk", "Ironman", "Thor", "Black Widow", "Captain America", "Hawkeye"];
	avengers.forEach(avenger => { // string
		console.log(avenger.toUpperCase());
	});
})();
