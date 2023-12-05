(function () {
	console.log("Hello from exercise 4!");

	// const person: object = {
	// 	name: "Beatriz", // string
	// 	age: 30, // number
	// };
	// console.log(person.name); // Throws an error. The object type it is too generic.
	// person.nickname = "beatrizsmerino"; // Throws an error. You cannot add a value to a property that does not previously exist in the object.

	const person: {
		// object
		// We wait the inference of Typescript or assign the types
		name: string;
		age: number;
		hobbies: string[]; // array
		role: [number, string]; // tuple
		gender: "male" | "female"; // type literal union
	} = {
		name: "Beatriz",
		age: 30,
		hobbies: ["sports", "cooking"],
		role: [2, "author"],
		gender: "female",
	};
	console.log(person.name);

	let favoriteActivities: (string | number)[];
	favoriteActivities = ["Sports", 2];

	for (const hobby of person.hobbies) {
		console.log(hobby.toUpperCase(), hobby.length);
		// console.log(hobby.map(item=> item)); // Throws an error.
	}

	person.role.push("admin");
	// person.role[1] = 10; // Throws an error. The tuple 'role' expects a string value.
	// person.role = [0, "admin", "user"]; // Throws an error. The tuple 'role' expects 2 values of a specific type and order.

	// const ADMIN = 0;
	// const AUTHOR = 1;
	// const READ_ONLY = 2;

	// enum Role {
	// 	ADMIN, // 0
	// 	AUTHOR, // 1
	// 	READ_ONLY // 2
	// }

	enum Role {
		ADMIN = 5, // 5
		AUTHOR, // 6
		READ_ONLY = "Read only",
	}

	const user = {
		role: Role.ADMIN,
	};

	if (user.role === Role.READ_ONLY) {
		console.log("User permission is read-only");
	} else {
		console.log("User permission is not read-only");
	}
})();
