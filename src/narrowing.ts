console.log("📄", "narrowing.ts");

(function () {
	function showSize(figure: number | string) {
		if (typeof figure === "string") { // narrowing
			return figure.length;
		}

		return figure.toString().length;
	}

	console.log(showSize("11"), typeof "1");
	console.log(showSize(305), typeof 3);
})();



(function () {
	interface Mario {
		company: "Nintendo";
		name: string;
		jump(): void;
	}

	interface Sonic {
		company: "Sega";
		name: string;
		run(): void;
	}

	type Character = Mario | Sonic;

	function play(character: Character) {
		// console.log(character.jump()); // Throws an error

		if (character.company === "Nintendo") {
			character.jump();
			return;
		}

		character.run();
	}
})();



(function () {
	interface Mario {
		name: string;
		jump(): void;
	}

	interface Sonic {
		name: string;
		run(): void;
	}

	type Character = Mario | Sonic;

	function checkIsSonic(character: Character): character is Sonic { // type guard
		return (character as Sonic).run() !== undefined; // assertion
	}

	function play(character: Character) {
		if (checkIsSonic(character)) {
			character.run();
		} else {
			character.jump();
		}
	}
})();



(function () {
	function fn(x: string | number) {
		if (typeof x === "string") {
			x.toUpperCase();
			console.log(x, typeof x); // string
		} else if (typeof x === "number") {
			x.toFixed();
			console.log(x, typeof x); // number
		} else {
			// x // never
		}
	}
})();
