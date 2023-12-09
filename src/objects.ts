console.log("📄", "objects.ts");

(function () {
	let hero = {
		name: "Thor",
		age: 1500,
	};
	// hero.name = 123; // Throws error
	// hero.power = 100; // Throws error
})();



(function () {
	type Hero = { // Type alias
		name: string;
		age: number;
	};

	// 1 way to do it
	function createHero1(name: string, age: number): Hero {
		return { name, age };
	}
	const thor = createHero1("Thor", 1500);
	console.log(thor);

	// 2 way to do it
	function createHero2(hero: Hero): Hero {
		const { name, age } = hero;
		return { name, age };
	}
	const ironman = createHero2({ name: "Ironman", age: 45 });
	console.log(ironman);
})();



(function () {
	type Hero = {
		readonly id?: number; // Optional property
		name: string;
		age: number;
		isActive?: boolean; // Optional property
	};

	function createHero(hero: Hero): Hero {
		const { name, age } = hero;
		return {
			name,
			age,
			isActive: true,
		};
	}

	const captainAmerica = createHero({ name: "Captain America", age: 92 });
	console.log(captainAmerica);

	const hulk = createHero({ name: "Hulk", age: 42, isActive: false });
	console.log(hulk);
	// hulk.id = 534534534534543543; // Throws an error
})();



(function () {
	type HeroId = `${string}-${string}-${string}-${string}-${string}`; // Template union type

	type Hero = {
		readonly id?: HeroId;
		name: string;
		age: number;
		isActive?: boolean;
	};

	function createHero(hero: Hero): Hero {
		const { name, age } = hero;
		return {
			id: crypto.randomUUID(), // `${string}-${string}-${string}-${string}-${string}`
			// id: 123, // Throws an error
			// id: "123-123-123-123-123" // Allowed
			name,
			age,
			isActive: true,
		};
	}

	const spiderman = createHero({
		name: "Spiderman",
		age: 17,
		isActive: false,
	});
	console.log(spiderman);
})();

(function () {
	type HexadecimalColor = `#${string}`; // Template union type
	// const color1: HexadecimalColor = "0033ff"; // Throws an error
	const color2: HexadecimalColor = "#0033ff" ?? "#000000"; // Default value black
	console.log(color2);
})();



(function () {
	type HeroId = `${string}-${string}-${string}-${string}-${string}`;
	type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal"; // Union type

	type Hero = {
		readonly id?: HeroId;
		name: string;
		age: number;
		isActive?: boolean;
		powerScale?: HeroPowerScale;
	};

	function createHero(hero: Hero): Hero {
		const { name, age } = hero;
		return {
			id: crypto.randomUUID(),
			name,
			age,
			isActive: true,
		};
	}

	const arrow = createHero({ name: "Arrow", age: 36 });
	console.log(arrow);
	// arrow.powerScale = "incredibly strong"; // Throws an error
	arrow.powerScale = "local";
	console.log(arrow);
})();



(function () {
	type HeroId = `${string}-${string}-${string}-${string}-${string}`;
	type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal";

	type HeroBasicInfo = {
		name: string;
		age: number;
	};

	type HeroProperties = {
		readonly id?: HeroId;
		isActive?: boolean;
		powerScale?: HeroPowerScale;
	};

	type Hero = HeroBasicInfo & HeroProperties; // Intersection type

	function createHero(input: HeroBasicInfo): Hero {
		const { name, age } = input;
		return {
			id: crypto.randomUUID(),
			name,
			age,
			isActive: true,
		};
	}

	const flash = createHero({ name: "Flash", age: 22 });
	console.log(flash);
})();



(function () {
	type Hero = {
		isActive: boolean;
		address: {
			planet: string;
			city: string;
		};
	};

	const heroAddress: Hero["address"] = { // Type indexing from 'type'
		city: "Madrid",
		planet: "Earth",
	};
	console.log(heroAddress);
})();



(function () {
	const address = {
		city: "Madrid",
		planet: "Earth",
	};

	type Address = typeof address; // Type indexing from 'constant'

	const addressTwitch: Address = {
		city: "Mars",
		planet: "Twitch",
	};
	console.log(addressTwitch);
})();


(function(){
	function createAddress() {
		return {
			city: "Barcelona",
			planet: "Earth",
		}
	}

	type Address = ReturnType<typeof createAddress> // Type indexing from function return
})();
