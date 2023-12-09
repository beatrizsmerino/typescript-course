console.log("📄", "arrays.ts");

(function () {
	const languages = []; // any

	languages.push("Javascript");
	languages.push("Typescript");
	languages.push(3);
	languages.push(true);
	console.log(languages);
})();



(function () {
	const languages: string[] = []; // Array of strings
	// const languages: Array<string> = []; // another way

	languages.push("Javascript");
	languages.push("Typescript");
	// languages.push(3); // Throws an error
	// languages.push(true); // Throws an error
	console.log(languages);
})();



(function () {
	const languages1: string[] | number[] = []; // never
	// languages1.push("Javascript"); // Throws an error
	// languages1.push(2); // Throws an error

	const languages2: (string | number)[] = []; // Array of strings and numbers
	languages2.push("Javascript"); // Throws an error
	languages2.push(2); // Throws an error
	// languages2.push(true); // Throws an error
	console.log(languages2);
})();



(function () {
	type HeroBasicInfo = {
		name: string;
		age: number;
	};

	const heroWithBasicInfo: HeroBasicInfo[] = []; // Array from 'type'
})();



(function () {
	/*
		["X", "O", "X"],
		["O", "X", "O],
		["X", "", "O"],
	*/


	const gameBoard1: (string | null)[][] = [
		["X", null, null],
		["O", "X", null],
		[null, null, "O"],
	];
	gameBoard1[0][1] = "2131213213";
	console.log(gameBoard1);


	type CellValue2 = "X" | "O" | ""; // string
	const gameBoard2: CellValue2[][] = [
		["X", "O", "X", ""],
		["X", "O", "X"],
		["X", "O", "X"],
	];
	// gameBoard2[0][1] = "2131213213"; // Throws an error
	console.log(gameBoard2);


	type CellValue = "X" | "O" | ""; // string
	type GameBoard = [ // Tupla
		[CellValue,CellValue,CellValue],
		[CellValue,CellValue,CellValue],
		[CellValue,CellValue,CellValue]
	]
	// const gameBoard: GameBoard = [
	// 	["X", "O", "X", ""], // Throws an error
	// 	["X", "O", "X"],
	// 	["X", "O", "X"],
	// ];
	const gameBoard: GameBoard = [
		["X", "O", "X"],
		["X", "O", "X"],
		["X", "O", "X"],
	];
	console.log(gameBoard);
})();


(function(){
	type RGB = readonly [number, number, number]; // Tupla

	// const rgb: RGB = ["a", 2, 5, 5]; // Throws an error
	const colorWhite: RGB = [255, 255, 255];
	const colorBlack: RGB = [0, 0, 0];
	console.log(colorWhite);

	// colorBlack.push(4); // Throws an error
	console.log(colorBlack);
})();



(function(){
	type Coordinates = [number, number];

	// const point1 Coordinates = [ 40.46845945447151, -3.7144838913339626, 0]; // Throws an error
	const point2: Coordinates = [40.48083713051493, -3.715322236225113];
	console.log(point2)
})();


(function(){
	function showMessage1(errorType: string) {
		if(errorType === "notFound") {
			console.log("Not found the data");
		} else if (errorType === "unauthorized" || errorType === "forbidden") {
			console.log("You do not have permission to access")
		}
	}


	const ERROR_TYPES_2 = {
		NOT_FOUND: "notFound",
		UNAUTHORIZED: "unauthorized",
		FORBIDDEN: "forbidden"
	}
	function showMessage2(errorType: string) {
		if(errorType === ERROR_TYPES_2.NOT_FOUND) {
			console.log("Not found the data");
		} else if (errorType === ERROR_TYPES_2.UNAUTHORIZED || errorType === ERROR_TYPES_2.FORBIDDEN) {
			console.log("You do not have permission to access")
		}
	}


	enum ERROR_TYPES { // Enum
		NOT_FOUND, // 0
		UNAUTHORIZED, // 1
		FORBIDDEN // 2
	}

	// enum ERROR_TYPES {
	// 	NOT_FOUND = "notFound",
	// 	UNAUTHORIZED = "unautorized",
	// 	FORBIDDEN = "forbidden"
	// }

	// enum ERROR_TYPES {
	// 	NOT_FOUND = 4,
	// 	UNAUTHORIZED, // 5
	// 	FORBIDDEN // 6
	// }

	// const enum ERROR_TYPES { // Enum
	// 	NOT_FOUND, // 0
	// 	UNAUTHORIZED, // 1
	// 	FORBIDDEN // 2
	// }

	function showMessage(errorType: number) {
		if(errorType === ERROR_TYPES.NOT_FOUND) {
			console.log("Not found the data");
		} else if (errorType === ERROR_TYPES.UNAUTHORIZED || errorType === ERROR_TYPES.FORBIDDEN) {
			console.log("You do not have permission to access")
		}
	}
})()